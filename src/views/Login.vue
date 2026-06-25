<script>
//TODO: Agregar barra de navegacion superior
//imagenes
import bgLight from "../assets/bg/bg_register_light.webp";
import logo from "../assets/logos/logo_vertical_blanco.jpg";

import LoginForm from "../components/login/LoginForm.vue";

export default {
  name: "LoginView",

  components: {
    LoginForm,
  },

  data() {
    return {
      bgLight,
      logo,
      title: "Iniciar sesión",
    };
  },

  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<template>
  <section
    class="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center"
    :style="{ backgroundImage: `url(${bgLight})` }"
  >
    <div class="w-full max-w-md px-8 pt-24">
      <header class="mb-6">
        <img
          :src="logo"
          alt="Logo de Templa"
          class="mx-auto mb-4 w-auto h-30"
        />
        <h1 class="text-center text-3xl font-bold text-white sr-only">
          {{ title }}
        </h1>
        <p class="text-center text-texto">Me alegra verte nuevamente por acá</p>
      </header>

      <LoginForm />
    </div>
    <article class="w-full max-w-md px-8 pt-4 text-center">
      <button
        @click="goToRegister"
        class="text-center text-texto text-sm underline"
      >
        Registrarme
      </button>
    </article>
  </section>
</template>
