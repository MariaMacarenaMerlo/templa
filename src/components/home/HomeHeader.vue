<script>
import SoundOff from "../../assets/icons/soundOff.svg";
import SoundOn from "../../assets/icons/soundOn.svg";
import MuyBien from "../../assets/icons/smiles/muyBien.svg";
import Bien from "../../assets/icons/smiles/bien.svg";
import Regular from "../../assets/icons/smiles/regular.svg";
import Mal from "../../assets/icons/smiles/mal.svg";
import MuyMal from "../../assets/icons/smiles/muyMal.svg";

export default {
  name: "HomeHeader",

  data() {
    return {
      soundOn: true,
      SoundOff,
      SoundOn,
      MuyBien,
      Bien,
      Regular,
      Mal,
      MuyMal,

      moods: [
        { id: 1, name: "Muy bien", icon: MuyBien },
        { id: 2, name: "Bien", icon: Bien },
        { id: 3, name: "Regular", icon: Regular },
        { id: 4, name: "Mal", icon: Mal },
        { id: 5, name: "Muy Mal", icon: MuyMal },
      ],
    };
  },

  methods: {
    switchSound() {
      this.soundOn = !this.soundOn;
      if (this.soundOn) {
        this.$emit("soundOn", true);
        console.log("Enciendo sonido...");
      } else {
        this.$emit("soundOn", false);
        console.log("Apago sonido...");
      }
    },

    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <header class="px-8 py-4.5">
    <div class="flex justify-between">
      <h1 class="font-medium text-2xl pb-2">Hola, Pepa</h1>
      <button @click="switchSound" aria-label="Encender o apagar sonido">
        <img
          :src="soundOn ? SoundOn : SoundOff"
          :alt="soundOn ? 'Apagar sonido' : 'Activar sonido'"
        />
      </button>
    </div>

    <!--Estados de animo-->
    <div>
      <h2 class="font-normal text-xl pb-2">¿Cómo te sientes hoy?</h2>
      <div class="flex gap-3.5">
        <button v-for="mood in moods" :key="mood.id">
          <img :src="mood.icon" :alt="mood.name" />
        </button>
      </div>
    </div>
  </header>
</template>
