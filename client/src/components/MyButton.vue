<script setup>
defineProps({
  variant: {
    type: String,
    default: 'text',
    validator(variant) {
      if (!variant) return true
      // The value must match one of these strings
      return ['primary', 'secondary', 'text', 'error', 'icon'].includes(variant)
    }
  },
  dense: { type: Boolean, default: false }
})
</script>

<template>
  <button type="button" :class="[variant, { dense: dense }]"><slot></slot></button>
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
  width: max-content;
  padding: 0.75em;
  border-radius: var(--default-border-radius);
  color: #ffffff;
  transition: all 0.3s ease;
}

button:hover {
  opacity: 0.8;
}
button:focus {
  outline: none;
  box-shadow: 0 0 0 5px rgba(21, 156, 228, 0.4);
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
}

.error {
  background-color: var(--error-color);
}
.icon {
  color: hsl(0, 0%, 50%);
  background-color: unset;
}

.icon:hover {
  color: #000000;
  opacity: 0.75;
}

.dense {
  padding: 0.25rem 0.5rem;
}
</style>
