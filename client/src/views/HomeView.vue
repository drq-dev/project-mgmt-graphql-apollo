<script setup>
import AccountPlus from 'vue-material-design-icons/AccountPlus.vue'
import FormatListBulleted from 'vue-material-design-icons/FormatListBulleted.vue'

import MyButton from '../components/MyButton.vue'
</script>
<template>
  <div class="container">
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
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 1.5rem;
}
.buttons {
  display: flex;
  gap: 1rem;
}
</style>
