<script setup>
import AccountPlus from 'vue-material-design-icons/AccountPlus.vue'
import FormatListBulleted from 'vue-material-design-icons/FormatListBulleted.vue'
import ClientTable from '../components/ClientTable.vue'
import MyButton from '../components/MyButton.vue'
import ProjectList from '../components/ProjectList.vue'
</script>
<template>
  <div class="container">
    <div class="buttons">
      <MyButton variant="secondary">
        <AccountPlus title="Add Client"></AccountPlus>
        Add Client
      </MyButton>
      <MyButton variant="primary">
        <FormatListBulleted title="Add Client"></FormatListBulleted>
        Add Project
      </MyButton>
    </div>
    <ProjectList></ProjectList>
    <hr />
    <ClientTable></ClientTable>
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
hr {
  width: 100%;
  height: 1px;
  background-color: var(--default-border-color);
  border: 0;
}
</style>
