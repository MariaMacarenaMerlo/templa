<script>
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

export default {
  name: "Home",
  data() {
    return {
      bgHome,
      RespirarIcon,
      HablarIcon,
      ReflexionarIcon,

      cards: [
        {
          icon: RespirarIcon,
          title: "Respirar",
          text: "Ejercicios para calmar tu mente",
          route: "/ejercicios-respiracion",
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
    };
  },
  components: {
    HomeHeader,
    SosButton,
    RandomQuote,
    ActionCard,
    Dock,
  },
};
</script>

<!--
HomeView 
** Homheader
** SosButton
** MicroTextCard
** ActionCard x3
** Dock
-->
<template>
  <main>
    <section
      class="pt-13 px-3.75 pb- bg-cover bg-center bg-no-repeat flex flex-col gap-y-10 min-h-[675px]"
      :style="{ backgroundImage: `url(${bgHome})` }"
    >
      <HomeHeader />
      <div class="flex flex-col items-center gap-[28px]">
        <SosButton />
        <div>
          <p class="text-center">Frena un momento</p>
          <p class="text-center">Toma un respiro</p>
        </div>
      </div>
      <RandomQuote />
    </section>

    <section class="bg-linear-to-b from-[#EFDAC9] to-[#F3F0EC] px-[17px]">
      <h2 class="font-normal text-[17px]">¿Qué te gustaría hacer ahora?</h2>
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
