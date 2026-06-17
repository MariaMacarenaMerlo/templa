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

  data() {
    return {
      animationStarted: false,
    };
  },

  mounted() {
    // Inicia la animación después de que el componente se haya montado.
    setTimeout(() => {
      this.animationStarted = true;
    }, 0);
  },
};
</script>

<template>
  <div
    class="breath-circle w-[210px] h-[210px] md:w-[240px] md:h-[240px]"
    :class="animationStarted ? phase : ''"
    :style="{ transitionDuration: duration + 's' }"
  >
    <span class="text-[3.25rem] text-[#9E958F]">{{ secondsLeft }}</span>
  </div>
</template>
