<script setup>
defineProps({ secondary: Boolean })
</script>

<template>
  <button type="button" :class="{ secondary: secondary }"><slot></slot></button>
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
  border-radius: 0.375rem;
  color: #ffffff;
  background-color: var(--primary-color);
}

button:hover {
  opacity: 0.8;
}

.secondary {
  background-color: var(--secondary-color);
}
</style>
