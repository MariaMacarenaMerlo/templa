<script>
import MainBreath from "../components/breathing/MainBreath.vue";
import SosMicrotext from "../components/breathing/SosMicrotext.vue";
import Exit from "../components/uiComponents/Exit.vue";
import HeaderExercise from "../components/uiComponents/HeaderExercise.vue";
import Modal from "../components/uiComponents/Modal.vue";

import bgExerciseDay from "../assets/bg/bg_respiraciones2.png";

export default {
  name: "BreathView",
  data() {
    return {
      bgExerciseDay,
      showFeedbackModal: false,

      modalContent: {
        title: "¿Esto te ayudó?",
        subtitle: "Observá cómo te sentís en este momento",
        buttons: [
          { label: "Sí, me ayudó", value: "si" },
          { label: "Un poco", value: "poco" },
          { label: "Todavía no", value: "no" },
        ],
      },
    };
  },
  components: {
    MainBreath,
    SosMicrotext,
    Exit,
    HeaderExercise,
    Modal,
  },

  methods: {
    handleFeedback(value) {
      switch (value) {
        case "si":
          this.finishExercise();
          break;

        case "poco":
          this.finishOrContinueExercise();
          break;

        case "no":
          this.groundingOrExploreExercise();
          break;

        case "home":
          this.$router.push("/");
          break;

        case "explore":
          this.$router.push("/exercises");
          break;

        case "grounding":
          this.$router.push("/grounding");
          break;

        default:
          console.log("Respuesta desconocida");
          break;
      }
    },

    finishExercise() {
      //TODO:
      // redirijo a la home o a otra sección.
      this.modalContent = {
        title: "Lo hiciste muy bien",
        subtitle: "Tomarte este momento ya fuê un paso importante.",
        buttons: [{ label: "Volver al inicio", value: "home" }],
      };
    },

    finishOrContinueExercise() {
      //TODO:
      //1. Terminar el ejercicio (redirijo a la home o a otra sección).
      //2. Explorar catalogo de ejercicios (redirijo a la sección de ejercicios).
      this.modalContent = {
        title: "Es un buen comienzo",
        subtitle: "¿Qué te gustaría hacer ahora?",
        buttons: [
          { label: "Explorar ejercicios", value: "explore" },
          { label: "Finalizar", value: "home" },
        ],
      };
    },
    groundingOrExploreExercise() {
      //TODO:
      //cambio contenido de la modal:
      // muestro mensaje de ánimo y ofrezco dos opciones:
      //1. Hacer un ejercicio de grounding (redirijo a un ejercicio de grounding).
      //2. Explorar catalogo de ejercicios (redirijo a la sección de ejercicios).
      this.modalContent = {
        title: "Probemos con otra técnica",
        subtitle: "Grounding ayuda a volver la atención al presente",
        buttons: [
          { label: "Continuar con grounding", value: "grounding" },
          { label: "Explorar ejercicios", value: "explore" },
        ],
      };
    },
  },
};
</script>
<template>
  <div
    class="h-dvh flex flex-col bg-cover bg-bottom bg-no-repeat p-10"
    :style="{ backgroundImage: `url(${bgExerciseDay})` }"
  >
    <HeaderExercise />
    <main class="flex-1 flex flex-col items-center">
      <MainBreath
        @exercise-finished="showFeedbackModal = true"
        class="flex-9"
      />
      <div class="flex-1 flex flex-col items-center justify-center">
        <SosMicrotext />
      </div>
    </main>

    <!-- Modal -->

    <div v-if="showFeedbackModal" class="fixed inset-0 z-50">
      <Modal
        :title="modalContent.title"
        :subtitle="modalContent.subtitle"
        :buttons="modalContent.buttons"
        @select="handleFeedback"
      />
    </div>
  </div>
</template>
