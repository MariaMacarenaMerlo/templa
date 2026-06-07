<script>
import MainBreath from "../components/breathing/MainBreath.vue";
import SosMicrotext from "../components/breathing/SosMicrotext.vue";
import Exit from "../components/uiComponents/Exit.vue";
import HeaderExercise from "../components/uiComponents/HeaderExercise.vue";

import bgExerciseDay from "../assets/bg/bg_respiraciones2.png";

export default {
  name: "BreathView",
  data() {
    return {
      bgExerciseDay,
      showFeedbackModal: false,
    };
  },
  components: {
    MainBreath,
    SosMicrotext,
    Exit,
    HeaderExercise,
  },
};
</script>
<template>
  <div
    class="h-dvh flex flex-col bg-cover bg-bottom bg-no-repeat p-10 gap-15"
    :style="{ backgroundImage: `url(${bgExerciseDay})` }"
  >
    <HeaderExercise class="h-" />
    <main class="flex-1 flex flex-col items-center">
      <MainBreath @exercise-finished="showFeedbackModal = true" />
      <SosMicrotext class="mt-4" />
    </main>
    <!-- Modal -->
    <div v-if="showFeedbackModal" class="fixed inset-0 z-50">
      <!-- fondo oscuro -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- tarjeta -->
      <div class="absolute bottom-0 w-full rounded-t-4xl bg-lino p-8">
        <h2>¿Esto te ayudó?</h2>
      </div>
    </div>
  </div>
</template>
