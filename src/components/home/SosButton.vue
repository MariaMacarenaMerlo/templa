<script>
export default {
  name: "SosButton",

  methods: {
    goToPause() {
      this.$router.push("/sos");
    },
  },
};
</script>
<template>
  <button
    @click="goToPause"
    class="pause-button relative w-45.5 h-45.5 rounded-full border-2 border-white/90 flex items-center justify-center overflow-visible"
    aria-label="Tomar una pausa"
  >
    <span class="wave-ring wave-ring-1"></span>
    <span class="wave-ring wave-ring-2"></span>
    <span class="wave-ring wave-ring-3"></span>
  </button>
</template>
