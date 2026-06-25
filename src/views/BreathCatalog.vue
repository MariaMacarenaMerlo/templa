<script>
import { getExercisesByCategory } from "../services/exercises";
import BreathCard from "../components/breathing/BreathCard.vue";
import Dock from "../components/uiComponents/Dock.vue";
import bgLight from "../assets/bg/bg_home_light.webp";

export default {
  name: "BreathCatalog",
  data() {
    return {
      exercises: [],

      bgLight,
    };
  },
  components: {
    BreathCard,
    Dock,
  },
  async mounted() {
    this.exercises = await getExercisesByCategory("1");
  },
};
</script>

<template>
  <section
    class="min-h-screen px-6 pt-12 pb-28"
    :style="{
      backgroundImage: `url(${bgLight})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <header class="mb-8">
      <h1 class="text-2xl font-semibold">Respirar</h1>
      <p class="text-sm text-gray-500">
        Elegí una práctica breve para volver al presente.
      </p>
    </header>

    <div class="flex flex-col gap-4">
      <BreathCard
        v-for="exercise in exercises"
        :key="exercise.id"
        :exercise="exercise"
      />
    </div>
  </section>
  <Dock />
</template>
