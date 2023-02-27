<script setup>
import BulletinBoard from 'vue-material-design-icons/BulletinBoard.vue'
</script>

<template>
  <header>
    <BulletinBoard title="The project logo" fillColor="var(--primary-color)"></BulletinBoard>
    Project Mgmt
  </header>
  <main style="color: var(--primary)">Hello World</main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 5.75rem;

  color: var(--primary-color);
  background-color: #f8f9fa;
}
main {
  margin-inline: 5.75rem;
}
</style>
