<script>
import ModalSquare from "../uiComponents/ModalSquare.vue";
import ButtonSubmit from "../uiComponents/ButtonSubmit.vue";
import { logoutUser } from "../../services/auth.js";
import router from "../../router/router.js";

export default {
  name: "LogoutModal",
  data() {
    return {
      user: {
        id: null,
        email: null,
      },
      loading: false,
    };
  },
  components: {
    ModalSquare,
    ButtonSubmit,
  },
  methods: {
    async handleLogoutUser() {
      try {
        await logoutUser();
        this.$emit("close");
        router.push("/login");
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
      console.log("Sesión cerrada para el usuario:", this.user);
      this.loading = false;
    },
  },
  emits: ["close"],
};
</script>
<template>
  <ModalSquare title="Cerrar sesión" @close="$emit('close')">
    <form action="#" @submit.prevent="handleLogoutUser">
      <p class="text-texto text-center">
        ¿Estás seguro de que deseas cerrar sesión?
      </p>
      <ButtonSubmit>Cerrar sesión</ButtonSubmit>
    </form>
  </ModalSquare>
</template>
