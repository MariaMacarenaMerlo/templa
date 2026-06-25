<script>
import Dock from "../components/uiComponents/Dock.vue";
export default {
  name: "Premium",

  components: {
    Dock,
  },
};
</script>
<template>
  <section class="min-h-screen px-6 pt-12 pb-28">
    <header class="mb-8">
      <h1 class="text-2xl font-semibold">Premium</h1>
      <p class="text-sm text-gray-500">
        Subscribite a los planes premium y accedé a contenido exclusivo.
      </p>
    </header>

    <div class="flex flex-col gap-4">
      <p>Contenido premium</p>
    </div>
  </section>
  <Dock />
</template>
