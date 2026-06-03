<script>
//imagenes
import bgHome from "../assets/bg/bg_home_light.png";

//componentes
import H1Saludo from "../components/home/H1Saludo.vue";
import MoodSelector from "../components/home/MoodSelector.vue";
import SosButton from "../components/home/SosButton.vue";
import MicrotextCard from "../components/home/MicrotextCard.vue";
import Dock from "../components/uiComponents/Dock.vue";

export default {
  name: "Home",
  data() {
    return {
      bgHome,
    };
  },
  components: {
    H1Saludo,
    MoodSelector,
    SosButton,
    MicrotextCard,
    Dock,
  },
};
</script>

<template>
  <main
    class="pt-13 px-3.75 min-h-screen bg-cover bg-center bg-no-repeat flex flex-col gap-y-8"
    :style="{ backgroundImage: `url(${bgHome})` }"
  >
    <header class="px-8">
      <H1Saludo />
      <MoodSelector />
    </header>
    <section class="flex flex-col items-center">
      <SosButton />
      <MicrotextCard />
    </section>
    <Dock />
  </main>
</template>
