<script>
export default {
  name: "ActionCard",
  props: {
    icon: String,
    title: String,
    text: String,
    route: String,
  },
};
</script>

<template>
  <article
    @click="$router.push(route)"
    class="flex flex-col items-center text-center rounded-[20px] bg-[#F3F0EC]/80 border border-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] px-[14px] py-5"
  >
    <div class="flex items-center justify-center">
      <img :src="icon" :alt="title" class="w-full h-full object-contain" />
    </div>

    <h3 class="text-[18px] font-normal">
      {{ title }}
    </h3>

    <p class="font-light leading-tight">
      {{ text }}
    </p>
  </article>
</template>
