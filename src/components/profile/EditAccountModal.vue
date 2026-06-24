<script>
import ModalSquare from "../uiComponents/ModalSquare.vue";
import Input from "../uiComponents/Input.vue";
import ButtonSubmit from "../uiComponents/ButtonSubmit.vue";
import {
  subscribeToUserStateChanges,
  updateAuthUserProfile,
} from "../../services/auth.js";

export default {
  name: "EditAccountModal",
  data() {
    return {
      user: {
        id: null,
        display_name: null,
      },
      loading: false,
    };
  },
  components: {
    ModalSquare,
    Input,
    ButtonSubmit,
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        await updateAuthUserProfile({
          display_name: this.user.display_name,
        });
      } catch (error) {
        console.error("Error al actualizar el perfil:", error);
      }
      console.log("Datos del usuario actualizados:", this.user);
      this.loading = false;
      this.$emit("close");
    },
  },
  emits: ["close"],
  mounted() {
    subscribeToUserStateChanges((userData) => {
      this.user = {
        id: userData.id,
        display_name: userData.display_name,
      };
    });
  },
};
</script>
<template>
  <ModalSquare title="Editar perfill" @close="$emit('close')">
    <form action="#" @submit.prevent="handleSubmit">
      <Input
        label="Nombre de usuario:"
        name="username"
        type="text"
        placeholder="Elegir nombre de usuario"
        v-model="user.display_name"
      />
      <ButtonSubmit>Actualizar</ButtonSubmit>
    </form>
  </ModalSquare>
</template>
