<script>
export default {
  name: "BreathCard",
  props: {
    exercise: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
  <router-link :to="`/breath/${exercise.id}`">
    <article class="rounded-3xl bg-white/60 p-5 shadow-sm">
      <h3>{{ exercise.name }}</h3>
      <p>{{ exercise.description }}</p>
      <p>{{ exercise.duration }} segundos</p>
      <!-- TODO: pasar a minutos y segundos -->
    </article>
  </router-link>
</template>
