<script setup>
import MyButton from './MyButton.vue'

defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <div class="card">
    <h2 class="name">{{ project.name }}</h2>
    <MyButton class="button" variant="text">View</MyButton>
    <p class="status">
      Status: <strong>{{ project.status }}</strong>
    </p>
  </div>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-areas: 'name button' 'status status';
  row-gap: 0.5rem;
  padding: 1rem;
  padding-bottom: 2rem;
  border: 1px solid var(--default-border-color);
  border-radius: var(--default-border-radius);
}

.name {
  grid-area: name;
  align-self: center;
}

.button {
  grid-area: button;
  justify-self: end;
  width: max-content;
}

.status {
  grid-area: status;
}

strong {
  font-weight: 600;
}
</style>
