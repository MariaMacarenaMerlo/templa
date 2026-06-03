<script>
//TODO: Agregar barra de navegacion superior
//imagenes
import bgLoginRegister from "../assets/bg/bg_register_login.jpg";

import LoginForm from "../components/login/LoginForm.vue";

export default {
  name: "LoginView",

  components: {
    LoginForm,
  },

  data() {
    return {
      bgLoginRegister,
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
    class="min-h-screen bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${bgLoginRegister})` }"
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
    <article>
      <button @click="goToRegister">registrarme</button>
    </article>
  </section>
</template>
