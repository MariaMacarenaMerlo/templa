<script>
//sonido
import homeAudio from "../assets/audio/birds-freq-templa.mp3";
//imagenes
import bgHome from "../assets/bg/bg_home_light.webp";
//iconos
import RespirarIcon from "../assets/icons/cards/respirar.svg";
import HablarIcon from "../assets/icons/cards/templaIA.svg";
import ReflexionarIcon from "../assets/icons/cards/reflexionar.svg";

//componentes
import HomeHeader from "../components/home/HomeHeader.vue";
import SosButton from "../components/home/SosButton.vue";
import RandomQuote from "../components/home/RandomQuote.vue";
import Dock from "../components/uiComponents/Dock.vue";
import ActionCard from "../components/home/ActionCard.vue";

//servicios
import { subscribeToUserStateChanges } from "../services/auth.js";

export default {
  name: "Home",
  data() {
    return {
      bgHome,
      RespirarIcon,
      HablarIcon,
      ReflexionarIcon,

      user: null,

      cards: [
        {
          icon: RespirarIcon,
          title: "Respirar",
          text: "Ejercicios para calmar tu mente",
          route: "/respiraciones",
        },
        {
          icon: HablarIcon,
          title: "Hablar",
          text: "Conversa con Templa IA",
          route: "/templaIA",
        },
        {
          icon: ReflexionarIcon,
          title: "Reflexionar",
          text: "Escribe lo que estás viviendo",
          route: "/diario-emocional",
        },
      ],

      audio: null,
      isSoundOn: false,
    };
  },
  components: {
    HomeHeader,
    SosButton,
    RandomQuote,
    ActionCard,
    Dock,
  },
  methods: {
    playPauseAudio(soundOn) {
      if (soundOn) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    },
  },
  mounted() {
    this.audio = new Audio(homeAudio); //audio es una API nativa de JS, tiene propiedades y metodos
    this.audio.loop = true;
    this.audio.play();

    subscribeToUserStateChanges((user) => {
      this.user = user;
    });
  },

  unmounted() {
    this.audio.pause();
  },
};
</script>

<template>
  <main>
    <!-- TODO: definirlo en una clase para cambiar la imagen segun el breakpoint -->
    <section
      class="pt-13 px-3.75 bg-cover bg-center bg-no-repeat flex flex-col gap-y-10 min-h-[675px] lg:px-[20%]"
      :style="{
        backgroundImage: `url(${bgHome})`,
        backgroundPosition: 'center bottom',
      }"
    >
      <HomeHeader @soundOn="playPauseAudio" :user="user" />
      <div class="flex flex-col items-center gap-[28px]">
        <SosButton />
        <div>
          <p class="text-center">Frena un momento</p>
          <p class="text-center">Toma un respiro</p>
        </div>
      </div>
      <RandomQuote />
    </section>

    <section
      class="bg-linear-to-b from-[#EFDAC9] to-[#F3F0EC] px-[17px] pb-[6rem] lg:px-[20%]"
    >
      <h2 class="font-normal text-[17px] pt-2">
        ¿Qué te gustaría hacer ahora?
      </h2>
      <div class="grid grid-cols-3 gap-[10px] py-[21px]">
        <ActionCard
          v-for="card in cards"
          :key="card.title"
          :icon="card.icon"
          :title="card.title"
          :text="card.text"
          :route="card.route"
        />
      </div>
    </section>
    <Dock />
  </main>
</template>
