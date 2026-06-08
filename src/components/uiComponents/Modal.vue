<!-- Modo de uso:
 <Modal 
 title="String"
 subtitle="String"
 :buttons="arrayDeBotones" />
 
 
 para la construccion del array de los botones usar en el padre 
 nombreArray: [
        { label: "", value: "" },

        -->

<script>
import bgModalLight from "../../assets/bg/bg_modal_light.jpg";
export default {
  name: "Modal",
  props: {
    title: String,
    subtitle: String,
    buttons: Array,
  },
  emits: ["select"],

  data() {
    return {
      bgModalLight,
    };
  },
};
</script>
<template>
  <div class="absolute inset-0 bg-black/40"></div>
  <div
    class="absolute bottom-0 w-full rounded-t-4xl bg-cover bg-center px-8.75 pt-9.5 pb-12.5 flex flex-col gap-10.25"
    :style="{ backgroundImage: `url(${bgModalLight})` }"
  >
    <h2 class="text-center text-[24px]">{{ title }}</h2>
    <p v-if="subtitle" class="text-center text-[18px]">{{ subtitle }}</p>
    <div class="flex flex-col justify-evenly gap-2.75">
      <button
        v-for="button in buttons"
        :key="button.value"
        @click="$emit('select', button.value)"
        class="text-[22px] bg-linear-to-r from-durazno to-[#F2DACF] rounded-full h-[54px] border border-lino"
      >
        {{ button.label }}
      </button>
    </div>
  </div>
</template>
