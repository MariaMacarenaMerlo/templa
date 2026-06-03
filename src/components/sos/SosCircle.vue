<script>
export default {
  name: "SosCircle",

  data() {
    return {
      phaseIndex: 0,
      phases: [
        {
          label: "Inhalá",
          description: "Tomá aire lentamente",
          duration: 4000,
        },
        {
          label: "Sostené",
          description: "Mantené el aire un momento",
          duration: 4000,
        },
        {
          label: "Exhalá",
          description: "Soltá el aire despacio",
          duration: 6000,
        },
      ],
      timer: null,
    };
  },

  computed: {
    currentPhase() {
      return this.phases[this.phaseIndex];
    },
  },

  methods: {
    startBreathing() {
      // Inicia el temporizador de la fase actual.
      // Cuando se cumple el tiempo definido en duration,
      // se ejecuta nextPhase() y la respiración continúa.
      this.timer = setTimeout(this.nextPhase, this.currentPhase.duration);
    },

    // Avanza a la siguiente fase de respiración.
    // El operador % (módulo) permite que al llegar al final
    // del array vuelva automáticamente al inicio.
    // si x<y entonces x%y = x y si x>=y entonces x%y = x-y
    nextPhase() {
      this.phaseIndex = (this.phaseIndex + 1) % this.phases.length;
      this.startBreathing();
    },
  },

  mounted() {
    this.startBreathing();
  },

  beforeUnmount() {
    clearTimeout(this.timer);
  },
};
</script>

<template>
  <div class="sos-breathing">
    <div class="sos-circle"></div>

    <h2>{{ currentPhase.label }}</h2>
    <p>{{ currentPhase.description }}</p>
  </div>
</template>
