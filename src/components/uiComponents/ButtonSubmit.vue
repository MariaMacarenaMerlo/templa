<script>
export default {
  name: "ButtonSubmit",
};
</script>
<template>
  <button
    type="submit"
    class="w-full rounded-full bg-lino px-8 py-3 mt-2 text-texto hover:from-arena/80 hover:to-piedra/80 focus:outline-none shadow-[0px_7px_6.8px_-6px_rgba(0,0,0,0.25),inset_0px_4px_4px_-2px_rgba(0,0,0,0.08)]"
  >
    <slot />
  </button>
</template>
