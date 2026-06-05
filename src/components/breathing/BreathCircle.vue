<script>
export default {
  name: "BreathCircle",

  props: {
    duration: {
      type: Number,
    },
    phase: {
      type: String,
    },
    secondsLeft: {
      type: Number,
    },
  },
};
</script>

<template>
  <div
    class="breath-circle"
    :class="phase"
    :style="{ transitionDuration: duration + 's' }"
  >
    <span class="breath-number">{{ secondsLeft }}</span>
  </div>
</template>
