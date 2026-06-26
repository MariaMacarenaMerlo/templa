<script>
//servicios
import { subscribeToUserStateChanges } from "../services/auth";
import { fetchProfileStatsById } from "../services/profileStats.js";

import CardProfile from "../components/profile/CardProfile.vue";
import LiAction from "../components/profile/LiAction.vue";
import ModalSquare from "../components/uiComponents/ModalSquare.vue";
import EditAccountModal from "../components/profile/EditAccountModal.vue";
import EditEmailModal from "../components/profile/EditEmailModal.vue";
import LogoutModal from "../components/profile/LogoutModal.vue";
import Dock from "../components/uiComponents/Dock.vue";

//iconos
import tuProgreso from "../assets/icons/cards/tuProgreso.svg";
import estadoEmocional from "../assets/icons/cards/estadoEmocional.svg";
import botonPausa from "../assets/icons/cards/botonPausa.svg";
import configuraciones from "../assets/icons/cards/configuraciones.svg";
import cuenta from "../assets/icons/cards/cuenta.svg";
//!!! falta premium

import pencil from "../assets/icons/cards/pencil.svg";
import email from "../assets/icons/cards/email.svg";
import signOut from "../assets/icons/cards/signOut.svg";

import calendar from "../assets/icons/cards/calendar.svg";
import air from "../assets/icons/cards/air.svg";
import smile from "../assets/icons/cards/smile.svg";

//bg
import bgLight from "../assets/bg/bg_home_light.webp";

export default {
  name: "Perfil",

  data() {
    return {
      title: "Mi perfil",
      activeModal: null,

      tuProgreso,
      estadoEmocional,
      botonPausa,
      configuraciones,
      cuenta,
      pencil,
      email,
      signOut,
      air,
      smile,
      calendar,
      bgLight,

      stats: {
        practiceDays: 0,
        breathsCount: 0,
        moodsCount: 0,
      },

      user: {
        id: null,
        email: null,
        display_name: null,
      },
    };
  },

  methods: {
    openModal(modalName) {
      this.activeModal = modalName;
    },

    closeModal() {
      this.activeModal = null;
    },
  },
  components: {
    CardProfile,
    LiAction,
    ModalSquare,
    EditAccountModal,
    EditEmailModal,
    LogoutModal,
    Dock,
  },
  mounted() {
    subscribeToUserStateChanges(async (userData) => {
      this.user = userData;

      if (!userData) return;

      this.stats = await fetchProfileStatsById(userData.id);
      console.log(this.stats);
    });
  },
};
</script>
<template>
  <section
    class="flex flex-col bg-cover bg-bottom px-[10px] py-10 lg:px-[20%] min-h-screen"
    :style="{ backgroundImage: `url(${bgLight})` }"
  >
    <header class="flex flex-col pb-[10px]">
      <h1 class="text-2xl font-semibold">
        Hola {{ user?.display_name || "usuario" }}
      </h1>
      <!-- tenemos el usuario en null por lo tanto no podemos buscar el display name porque no existe, por eso ponemos operador ?. que significa que si user es null (o undefined) no intente buscar y devuelva undefined -->

      <p class="text-xl">Buscando más presencia</p>
    </header>
    <main class="flex-1 flex flex-col gap-y-[10px]">
      <CardProfile
        :icon="tuProgreso"
        h2="Tu progreso"
        p="Así viene tu camino en Templa"
      >
        <div class="flex justify-around items-center">
          <article class="flex flex-col items-center">
            <img :src="calendar" alt="calendario" />
            <p>{{ stats.practiceDays || 2 }}</p>
            <p class="text-center">Días de práctica</p>
          </article>
          <article class="flex flex-col items-center">
            <img :src="air" alt="aire" />
            <p>{{ stats.breathsCount }}</p>
            <p class="text-center">Respiraciones realizadas</p>
          </article>
          <article class="flex flex-col items-center">
            <img :src="smile" alt="sonrisa" />
            <p>{{ stats.moodsCount }}</p>
            <p class="text-center">Registros de ánimo</p>
          </article>
        </div>
      </CardProfile>
      <CardProfile :icon="cuenta" h2="Cuenta" p="Gestiona tu cuenta">
        <ul class="md:px-[10%]">
          <LiAction
            :icon="pencil"
            title="Editar perfil"
            @click="openModal('editProfile')"
          />
          <LiAction
            :icon="email"
            title="Correo electrónico"
            @click="openModal('editEmail')"
          />
          <LiAction
            :icon="signOut"
            title="Cerrar sesión"
            @click="openModal('logOut')"
          />
        </ul>
      </CardProfile>

      <EditAccountModal
        v-if="activeModal === 'editProfile'"
        @close="closeModal"
      />

      <EditEmailModal v-if="activeModal === 'editEmail'" @close="closeModal" />

      <LogoutModal v-if="activeModal === 'logOut'" @close="closeModal" />

      <CardProfile
        :icon="botonPausa"
        h2="Botón de pausa Templa"
        p="Tu refugio para volver al presente"
      >
        <div v-if="stats.sos" class="flex flex-col items-center md:px-[10%]">
          <div class="flex flex-col items-center">
            <h3 class="text-2xl font-bold">
              {{ stats.sos.porcentajeSiAyudo }}%
            </h3>

            <p class="text-center text-sm">
              de las veces el Botón de Pausa te ayudó.
            </p>
          </div>

          <div class="w-full pt-2">
            <div class="flex justify-between">
              <p>Activaciones</p>
              <p>{{ stats.sos.totalUses }}</p>
            </div>

            <div class="flex justify-between">
              <p>Me ayudó</p>
              <p>{{ stats.sos.siAyudo }}</p>
            </div>

            <div class="flex justify-between">
              <p>Ayudó un poco</p>
              <p>{{ stats.sos.pocoAyudo }}</p>
            </div>

            <div class="flex justify-between">
              <p>No fué suficiente</p>
              <p>{{ stats.sos.noAyudo }}</p>
            </div>
          </div>
        </div>
      </CardProfile>
      <Dock />
    </main>
  </section>
</template>
