<script>
import arrow from "../../assets/icons/cards/arrow.svg";
export default {
  name: "LiAction",
  data() {
    return { arrow };
  },

  props: {
    icon: String,
    title: String,
  },

  emits: ["click"],
};
</script>
<template>
  <li>
    <button
      type="button"
      class="flex items-center justify-between w-full"
      @click="$emit('click')"
    >
      <div class="flex items-center gap-4">
        <img :src="icon" :alt="title" />
        <h3>{{ title }}</h3>
      </div>
      <img :src="arrow" alt="arrow" />
    </button>
  </li>
</template>
