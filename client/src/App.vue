<script setup>
import BulletinBoard from 'vue-material-design-icons/BulletinBoard.vue'

import HomeView from './views/HomeView.vue'
</script>

<template>
  <header>
    <BulletinBoard title="The project logo"></BulletinBoard>
    Project Mgmt
  </header>
  <main>
    <HomeView></HomeView>
  </main>
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
  margin: 1.5rem 5.75rem;
}
</style>
