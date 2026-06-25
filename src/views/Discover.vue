<script>
import { getExercisesByCategory } from "../services/exercises";
import BreathCard from "../components/breathing/BreathCard.vue";
import Dock from "../components/uiComponents/Dock.vue";
import bgLight from "../assets/bg/bg_home_light.webp";

export default {
  name: "Discover",
  data() {
    return {
      exercisesBreath: [],
      exercisesGrounding: [],

      bgLight,
    };
  },
  components: {
    BreathCard,
    Dock,
  },
  async mounted() {
    this.exercisesBreath = await getExercisesByCategory("1");
    this.exercisesGrounding = await getExercisesByCategory("2");
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
      <h1 class="text-2xl font-semibold">Descubre nuevos ejercicios y más</h1>
      <p class="text-sm text-gray-500">
        Elegí una práctica breve para volver al presente.
      </p>
    </header>
    <main>
      <h2>Respiraciones</h2>
      <div class="flex gap-4">
        <BreathCard
          v-for="exerciseBreath in exercisesBreath"
          :key="exerciseBreath.id"
          :exercise="exerciseBreath"
        />
      </div>
      <h2>Grounding</h2>
      <div class="flex gap-4">
        <BreathCard
          v-if="exercisesGrounding.length > 0"
          v-for="exerciseGrounding in exercisesGrounding"
          :key="exerciseGrounding.id"
          :exercise="exerciseGrounding"
        />
        <p v-else>No hay ejercicios de grounding disponibles.</p>
      </div>
    </main>
  </section>
  <Dock />
</template>
