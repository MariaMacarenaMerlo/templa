<script>
export default {
  name: "Exit",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <button @click="goHome" aria-label="Volver al inicio">✕</button>
</template>
