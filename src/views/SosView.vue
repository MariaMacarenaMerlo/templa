<script>
import SosCircle from "../components/sos/SosCircle.vue";
import SosMicrotext from "../components/sos/SosMicrotext.vue";
import Exit from "../components/uiComponents/Exit.vue";

export default {
  name: "SosView",
  data() {
    return {
      emergencyContact: {
        name: "Contacto de Emergencia", // TODO: esto deberia poder guardase en supabase y ser editable por el usuario
        phone: "+5492235050119",
      },
    };
  },
  components: {
    SosCircle,
    SosMicrotext,
    Exit,
  },
};
</script>
<template>
  <header>
    <Exit />
  </header>
  <main
    class="h-screen w-screen flex flex-col items-center justify-center bg-[#253241]"
  >
    <SosMicrotext />
    <SosCircle />
    <a :href="`tel:${emergencyContact.phone}`">
      Llamar a {{ emergencyContact.name }}
    </a>
  </main>
</template>
