<script>
import Input from "../uiComponents/Input.vue";
import { loginUser } from "../../services/auth";
import AlertComponent from "../uiComponents/AlertComponent.vue";
import ButtonSubmit from "../uiComponents/ButtonSubmit.vue";

export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },

      loading: false,

      errorMessage: "",
    };
  },
  components: {
    Input,
    AlertComponent,
    ButtonSubmit,
  },

  methods: {
    async submitFormLogin() {
      try {
        this.loading = true;
        await loginUser({
          email: this.user.email,
          password: this.user.password,
        });
      } catch (error) {
        this.errorMessage =
          "Error en contraseña o email, por favor volvé a ingresar tus datos";
      }
      this.loading = false;
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <form action="#" @submit.prevent="submitFormLogin">
    <Input
      label="Email:"
      name="email"
      type="email"
      placeholder="Email"
      v-model="user.email"
    />

    <Input
      label="Contraseña:"
      name="password"
      type="password"
      placeholder="Contraseña"
      v-model="user.password"
    />

    <AlertComponent v-if="errorMessage" :message="errorMessage" />
    <ButtonSubmit>Iniciar sesión</ButtonSubmit>
  </form>
</template>
