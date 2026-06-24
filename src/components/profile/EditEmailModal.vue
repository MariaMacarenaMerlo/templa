<script>
import ModalSquare from "../uiComponents/ModalSquare.vue";
import Input from "../uiComponents/Input.vue";
import ButtonSubmit from "../uiComponents/ButtonSubmit.vue";
import {
  subscribeToUserStateChanges,
  updateAuthUserProfile,
} from "../../services/auth.js";

export default {
  name: "EditEmailModal",
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
    Input,
    ButtonSubmit,
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        await updateAuthUserProfile({
          email: this.user.email,
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
        email: userData.email,
      };
    });
  },
};
</script>
<template>
  <ModalSquare title="Editar correo electrónico" @close="$emit('close')">
    <form action="#" @submit.prevent="handleSubmit">
      <Input
        label="Correo electrónico:"
        name="email"
        type="email"
        placeholder="Ingresar nuevo correo electrónico"
        v-model="user.email"
      />
      <ButtonSubmit>Actualizar</ButtonSubmit>
    </form>
  </ModalSquare>
</template>
