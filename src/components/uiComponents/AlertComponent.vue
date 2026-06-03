<script>
export default {
  name: "AlertComponent",

  props: {
    message: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      default: "error",
    },
  },
};
</script>

<template>
  <p
    class="rounded-2xl border px-4 py-3 text-sm font-medium"
    :class="{
      'border-red-400/20 bg-red-500/10 text-red-300': type === 'error',

      'border-green-400/20 bg-green-500/10 text-green-300': type === 'success',
    }"
  >
    {{ message }}
  </p>
</template>
