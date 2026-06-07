<script>
import BreathCircle from "./BreathCircle.vue";

export default {
  name: "MainBreath",

  components: {
    BreathCircle,
  },
  emits: ["exercise-finished"],
  data() {
    return {
      phaseIndex: 0,
      secondsLeft: 0,
      timer: null,
      countdown: null,

      //cronometro
      remainingTime: 0,
      chronometer: null,

      exerciseBreath: {
        name: "Respiración 4-4-6",
        totalDuration: 15,
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
      },
    };
  },

  computed: {
    currentPhase() {
      return this.exerciseBreath.phases[this.phaseIndex];
    },
    changeTimeFormat() {
      // Formatea los segundos restantes a minutos y segundos.
      const minutes = Math.floor(this.remainingTime / 60);
      const seconds = this.remainingTime % 60; //modulo de 60 para obtener los segundos restantes después de contar los minutos completos.

      return `${minutes}:${seconds.toString().padStart(2, "0")}`; //convertimos en string y usamos padStart para asegurarnos de que los segundos siempre tengan dos dígitos, agregando un cero al principio si es necesario.
    },
  },

  methods: {
    startChronometer() {
      this.remainingTime = this.exerciseBreath.totalDuration;
      this.chronometer = setInterval(() => {
        this.remainingTime--;

        if (this.remainingTime <= 0) {
          clearInterval(this.chronometer);
          clearInterval(this.countdown);
          clearTimeout(this.timer);

          this.remainingTime = 0;
          this.secondsLeft = 0;

          console.log("Ejercicio terminado");
          this.$emit("exercise-finished");
        }
      }, 1000);
      console.log("Cronómetro iniciado");
    },

    startBreathing() {
      clearTimeout(this.timer);
      clearInterval(this.countdown);

      this.secondsLeft = this.currentPhase.duration;

      // Inicia el temporizador de la fase actual.
      // Cuando se cumple el tiempo definido en duration,
      // se ejecuta nextPhase() y la respiración continúa.

      // setInterval se ejecuta cada segundo, a diferencia de setTimeout
      // que se ejecuta una sola vez.
      this.countdown = setInterval(() => {
        if (this.secondsLeft > 1) {
          this.secondsLeft--;
        }
      }, 1000);

      // Esperá lo que dure esta fase y después pasá a la siguiente.
      this.timer = setTimeout(() => {
        this.nextPhase();
      }, this.currentPhase.duration * 1000);
    },

    // Avanza a la siguiente fase de respiración.
    // El operador % (módulo) permite que al llegar al final
    // del array vuelva automáticamente al inicio.
    // Si x < y entonces x % y = x, y si x >= y entonces x % y = x - y.
    nextPhase() {
      this.phaseIndex =
        (this.phaseIndex + 1) % this.exerciseBreath.phases.length;

      this.startBreathing();
    },
  },

  mounted() {
    this.startBreathing();
    this.startChronometer();
  },

  beforeUnmount() {
    clearTimeout(this.timer);
    clearInterval(this.countdown);
    clearInterval(this.chronometer);
  },
};
</script>

<template>
  <div class="sos-breathing flex flex-col gap-13">
    <h1 class="text-center text-[1.25rem]">{{ exerciseBreath.name }}</h1>
    <p class="text-center text-[18px]">{{ currentPhase.description }}</p>

    <BreathCircle
      class="mt-4"
      :duration="currentPhase.duration"
      :phase="currentPhase.phase"
      :secondsLeft="secondsLeft"
    />
    <div class="flex justify-center gap-10">
      <p
        v-for="(phase, index) in exerciseBreath.phases"
        :key="index"
        :class="[
          'text-[1.25rem]',
          index === phaseIndex ? 'underline underline-offset-8' : '',
        ]"
      >
        {{ phase.duration }}
      </p>
    </div>
    <p class="text-center">{{ changeTimeFormat }} restantes</p>
  </div>
</template>
