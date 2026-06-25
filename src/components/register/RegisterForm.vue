<script>
import { registerUser } from "../../services/auth";
import Input from "../uiComponents/Input.vue";
import AlertComponent from "../uiComponents/AlertComponent.vue";
import ButtonSubmit from "../uiComponents/ButtonSubmit.vue";

export default {
  name: "RegisterForm",
  data() {
    return {
      user: {
        email: "",
        password: "",
        confirmPassword: "",
      },

      loading: false,

      errorMessage: "",
    };
  },

  components: { Input, AlertComponent, ButtonSubmit },
  methods: {
    async submitFormRegister() {
      if (this.user.password !== this.user.confirmPassword) {
        this.errorMessage = "Las contraseñas no coinciden";
        return;
      }

      try {
        this.loading = true;
        await registerUser({
          email: this.user.email,
          password: this.user.password,
        });
        this.$router.push("/");
      } catch (error) {
        //traduccion a mano
        if (error.message.includes("already registered")) {
          this.errorMessage = "Ya existe una cuenta con ese email.";
        } else if (error.message.includes("Password")) {
          this.errorMessage = "La contraseña debe tener al menos 6 caracteres.";
        } else {
          this.errorMessage =
            "No se pudo crear la cuenta. Revisá los datos ingresados.";
        }
      }
      this.loading = false;
    },
  },
};
</script>

<template>
  <form action="#" @submit.prevent="submitFormRegister">
    <Input
      label="Ingresá tu Email:"
      name="email"
      type="text"
      placeholder="Ingresá tu email"
      v-model="user.email"
    />

    <Input
      label="Creá tu contraseña:"
      name="password"
      type="password"
      placeholder="Creá una contraseña"
      v-model="user.password"
    />

    <Input
      label="Confirmá tu contraseña:"
      name="confirm-password"
      type="password"
      placeholder="Confirmá tu contraseña"
      v-model="user.confirmPassword"
    />
    <ul class="pt-2">
      <li class="text-texto text-sm text-center">
        La contraseña debe tener al menos 6 caracteres.
      </li>
    </ul>
    <AlertComponent v-if="errorMessage" :message="errorMessage" />

    <ButtonSubmit> Registrarme </ButtonSubmit>
  </form>
</template>
