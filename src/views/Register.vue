<script>
//TODO: Agregar barra de navegacion superior
//imagenes
import bgLoginRegister from "../assets/bg/bg_Login_Register.jpg";
import logo from "../assets/logos/logo_vertical_blanco.jpg";

import supabase from "../services/supabase.js";
import registerForm from "../components/register/RegisterForm.vue";
import { registerUser } from "../services/auth.js";
import RegisterForm from "../components/register/RegisterForm.vue";

export default {
  name: "Register",
  data() {
    return {
      bgLoginRegister,
      logo,
      title: "Registrarme",
    };
  },

  components: {
    RegisterForm,
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
        <p class="text-center text-texto text-sm">
          Creá tu cuenta para guardar tu progreso, acceder a tus ejercicios
          favoritos y construir un espacio pensado para vos.
        </p>
      </header>

      <RegisterForm />
    </div>
  </section>
</template>
