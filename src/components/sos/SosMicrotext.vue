<script>
import { getRandomMicrotext } from "../../services/microtext.js";

export default {
  name: "SosMicrotext",

  data() {
    return {
      microtext: null,
      errorMessage: "",
    };
  },

  async mounted() {
    try {
      this.microtext = await getRandomMicrotext();

      console.log("Microtexto recibido:", this.microtext);
    } catch (error) {
      console.error("Error:", error);
    }
  },
};
</script>

<template>
  <p v-if="microtext">
    {{ microtext.content }}
  </p>

  <p v-else-if="errorMessage">
    {{ errorMessage }}
  </p>

  <p v-else>Cargando...</p>
</template>
