<script>
export default {
  name: "CardProfile",
  props: {
    icon: String,
    h2: String,
    p: String,
  },
};
</script>
<template>
  <article
    class="bg-lino border-solid border-[0.5px] border-white rounded-[15px] py-[15px] px-[10px] shadow-[0px_4px_4px_rgba(175,143,132,0.39)]"
  >
    <div class="flex gap-2.5 mb-[20px]">
      <div>
        <img :src="icon" :alt="h2" />
      </div>
      <div>
        <h2>{{ h2 }}</h2>
        <p>{{ p }}</p>
      </div>
    </div>

    <slot />
  </article>
</template>
