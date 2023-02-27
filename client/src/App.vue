<script setup>
import AccountPlus from 'vue-material-design-icons/AccountPlus.vue'
import BulletinBoard from 'vue-material-design-icons/BulletinBoard.vue'
import FormatListBulleted from 'vue-material-design-icons/FormatListBulleted.vue'

import MyButton from './components/MyButton.vue'
</script>

<template>
  <header>
    <BulletinBoard title="The project logo"></BulletinBoard>
    Project Mgmt
  </header>
  <main>
    <div class="buttons">
      <MyButton secondary>
        <AccountPlus title="Add Client"></AccountPlus>
        Add Client
      </MyButton>
      <MyButton>
        <FormatListBulleted title="Add Client"></FormatListBulleted>
        Add Project
      </MyButton>
    </div>
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
  display: grid;
  gap: 1.5rem;
  margin: 1.5rem 5.75rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}
</style>
