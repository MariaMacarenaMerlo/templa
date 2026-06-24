<script>
import { subscribeToUserStateChanges } from "../services/auth";
import CardProfile from "../components/profile/CardProfile.vue";
import LiAction from "../components/profile/LiAction.vue";
import ModalSquare from "../components/uiComponents/ModalSquare.vue";
import EditAccountModal from "../components/profile/EditAccountModal.vue";
import EditEmailModal from "../components/profile/EditEmailModal.vue";
import LogoutModal from "../components/profile/LogoutModal.vue";

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
  },
  mounted() {
    subscribeToUserStateChanges(async (userData) => {
      this.user = userData;
    });
  },
};
</script>
<template>
  <header>
    <h1>Hola {{ user?.display_name || "usuario" }}</h1>
    <!-- tenemos el usuario en null por lo tanto no podemos buscar el display name porque no existe, por eso ponemos operador ?. que significa que si user es null (o undefined) no intente buscar y devuelva undefined -->

    <p>Buscando más presencia</p>
  </header>
  <main>
    <CardProfile
      :icon="tuProgreso"
      h2="Tu progreso"
      p="Así viene tu camino en Templa"
    >
      <p>probando</p>
    </CardProfile>
    <CardProfile :icon="cuenta" h2="Cuenta" p="Gestiona tu cuenta">
      <ul>
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
  </main>
</template>
