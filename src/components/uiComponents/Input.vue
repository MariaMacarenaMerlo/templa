<!-- <Input
        label="Email:"
        name="email"
        type="email"
        placeholder="Email"
        v-model="user.email"
      /> -->
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
  <div class="flex flex-col mt-4 gap-1">
    <label :for="name" class="text-sm text-texto px-3">
      {{ label }}
    </label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full rounded-full border border-lino bg-gradient-to-r from-arena/70 to-piedra/50 px-8 py-3 text-texto placeholder:text-gray focus:outline-none"
    />
  </div>
</template>
