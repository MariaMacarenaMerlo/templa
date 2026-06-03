<script>
export default {
  name: "Input",

  props: {
    label: String,
    modelValue: String,
    name: String,
    type: String,
    placeholder: String,
  },

  emits: ["update:modelValue"],
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="name" class="text-sm font-semibold text-[#F6F2E8]"> </label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full rounded-full border border-lino bg-gradient-to-r from-arena/20 to-piedra/20 px-8 py-3 text-texto placeholder:text-texto focus:outline-none"
    />
  </div>
</template>
