<script>
import BreathCircle from "./BreathCircle.vue";

export default {
  name: "MainBreath",
  components: {
    BreathCircle,
  },

  data() {
    return {
      phaseIndex: 0,
      secondsLeft: 0,
      timer: null,
      phases: [
        {
          name: "Inhalar",
          description: "Tomá aire lentamente",
          duration: 4,
          phase: "expand",
        },
        {
          name: "Sostener",
          description: "Mantené el aire un momento",
          duration: 4,
          phase: "holdExpanded",
        },
        {
          name: "Exhalar",
          description: "Soltá el aire despacio",
          duration: 6,
          phase: "contract",
        },
      ],
    };
  },

  computed: {
    currentPhase() {
      return this.phases[this.phaseIndex];
    },
  },

  methods: {
    startBreathing() {
      clearTimeout(this.timer);
      clearInterval(this.countdown);
      this.secondsLeft = this.currentPhase.duration;
      // Inicia el temporizador de la fase actual.
      // Cuando se cumple el tiempo definido en duration,
      // se ejecuta nextPhase() y la respiración continúa.

      //set interval se ejecuta cada segundo a diferencia de set timeout que se ejecuta una sola vez
      this.countdown = setInterval(() => {
        this.secondsLeft--;
        if (this.secondsLeft <= 0) {
          clearInterval(this.countdown);
        }
      }, 1000);

      //Esperá lo que dure esta fase y después pasá a la siguiente.
      this.timer = setTimeout(() => {
        this.nextPhase();
      }, this.currentPhase.duration * 1000);
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
    clearInterval(this.countdown);
  },
};
</script>

<template>
  <div class="sos-breathing">
    <h2>{{ currentPhase.description }}</h2>

    <BreathCircle
      :duration="currentPhase.duration"
      :phase="currentPhase.phase"
      :secondsLeft="secondsLeft"
    />

    <p>{{ currentPhase.phase }}</p>
  </div>
</template>
