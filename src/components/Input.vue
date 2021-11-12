<script setup>
import { ref } from "vue";
import "../assets/css/input.css";

const props = defineProps({
  label: { type: String, required: true },
  type: { type: String, default: "text" },
  modelValue: { type: String, required: true },
});
defineEmits(["update:modelValue"]);

const filled = ref(!!props.modelValue);
</script>

<template>
  <section class="input input--nao" :class="{ 'input--filled': filled }">
    <input
      class="input__field input__field--nao"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      @blur="filled = modelValue.trim() !== ''"
      @focus="filled = true"
    />
    <label class="input__label input__label--nao" for="input-3">
      <span class="input__label-content input__label-content--nao">
        {{ label }}
      </span>
    </label>
    <svg
      class="graphic graphic--nao"
      width="300%"
      height="100%"
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
    >
      <path
        d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"
      />
    </svg>
  </section>
</template>
