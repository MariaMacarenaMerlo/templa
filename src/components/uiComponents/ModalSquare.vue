<!-- <ModalSquare 
title="..."> <ModaleSquare> -->

<script>
import bgModalLight from "../../assets/bg/bg_modal_light.jpg";
import exit from "../../assets/icons/X.svg";
export default {
  name: "ModalSquare",
  data() {
    return {
      bgModalLight,
      exit,
    };
  },

  props: {
    title: String,
  },
  emits: ["close"],
};
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center px-6">
    <div class="absolute inset-0 bg-black/40"></div>

    <section
      class="relative w-full max-w-[80%] rounded-[24px] bg-cover bg-bottom p-6 shadow-[0px_4px_4px_rgba(175,143,132,0.39)]"
      :style="{ backgroundImage: `url(${bgModalLight})` }"
    >
      <button @click="$emit('close')" class="absolute top-4 right-4">
        <img :src="exit" alt="Cerrar modal" />
      </button>

      <h2>{{ title }}</h2>
      <slot />
    </section>
  </div>
</template>
