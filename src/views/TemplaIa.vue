<script>
import Dock from "../components/uiComponents/Dock.vue";
export default {
  name: "TemplaIa",

  components: {
    Dock,
  },
};
</script>
<template>
  <section class="min-h-screen px-6 pt-12 pb-28">
    <header class="mb-8">
      <h1 class="text-2xl font-semibold">Templa IA</h1>
      <p class="text-sm text-gray-500">Esta es la sección de Templa IA.</p>
    </header>

    <div class="flex flex-col gap-4">
      <p>Contenido de Templa IA</p>
    </div>
  </section>
  <Dock />
</template>
