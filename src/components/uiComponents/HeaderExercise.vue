<script>
import SoundOff from "../../assets/icons/soundOff.svg";
import SoundOn from "../../assets/icons/soundOn.svg";

export default {
  name: "HeaderExercise",

  data() {
    return {
      soundOn: true,
      SoundOff,
      SoundOn,
    };
  },

  methods: {
    switchSound() {
      this.soundOn = !this.soundOn;
      if (this.soundOn) {
        // Apagar el sonido
        console.log("Apagando sonido...");
      } else {
        // Encender el sonido
        console.log("Encendiendo sonido...");
      }
    },

    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <header class="flex justify-between">
    <!--Pregunta: el aria-label si la imagen ya tiene descripcion es necesario ?? -->
    <button @click="switchSound" aria-label="Encender/Apagar sonido">
      <img
        :src="soundOn ? SoundOff : SoundOn"
        :alt="soundOn ? 'Apagar sonido' : 'Activar sonido'"
      />
    </button>
    <button @click="goToHome" aria-label="Salir del ejercicio">
      <img
        src="../../assets/icons/X.svg"
        alt="Salir del ejercicio"
        class="w-3.5 h-7.25"
      />
    </button>
  </header>
</template>
