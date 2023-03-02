<script setup>
import BulletinBoard from 'vue-material-design-icons/BulletinBoard.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" aria-label="Link to homepage"
        ><BulletinBoard title="The project logo"></BulletinBoard> Project Mgmt
      </RouterLink>
    </nav>
  </header>
  <main>
    <RouterView></RouterView>
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

a {
  display: flex;
  align-items: center;
  color: var(--primary-color);
  text-decoration: none;
}
</style>
