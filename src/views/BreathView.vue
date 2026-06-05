<script>
import MainBreath from "../components/breathing/MainBreath.vue";
import SosMicrotext from "../components/breathing/SosMicrotext.vue";
import Exit from "../components/uiComponents/Exit.vue";

import bgExerciseDay from "../assets/bg/bg_respiraciones2.png";

export default {
  name: "BreathView",
  data() {
    return {
      bgExerciseDay,
      emergencyContact: {
        name: "Contacto de Emergencia", // TODO: esto deberia poder guardase en supabase y ser editable por el usuario
        phone: "+5492235050119",
      },
    };
  },
  components: {
    MainBreath,
    SosMicrotext,
    Exit,
  },
};
</script>
<template>
  <div
    class="h-dvh flex flex-col bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${bgExerciseDay})` }"
  >
    <header>
      <Exit />
    </header>
    <main class="flex-1 flex flex-col items-center justify-center">
      <SosMicrotext />
      <MainBreath />
    </main>
  </div>
</template>
