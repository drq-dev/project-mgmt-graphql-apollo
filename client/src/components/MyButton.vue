<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'text',
    validator(variant) {
      if (!variant) return true
      // The value must match one of these strings
      return ['primary', 'secondary', 'text', 'error'].includes(variant)
    }
  },
  secondary: Boolean,
  text: Boolean
})
</script>

<template>
  <button type="button" :class="[variant]"><slot></slot></button>
</template>

<style scoped>
/* remove default button styles */
button,
input[type='submit'],
input[type='reset'] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

button {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--default-border-radius);
  color: #ffffff;
}

button:hover {
  opacity: 0.8;
}

.primary {
  background-color: var(--primary-color);
}
.secondary {
  background-color: var(--secondary-color);
}

.text {
  color: #000000;
  background-color: #f9fafb;
  padding: 0.75rem;
}

.error {
  background-color: var(--error-color);
}
</style>
