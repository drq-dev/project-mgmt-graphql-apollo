<script setup>
// TODO: Create form components
// TODO: Animation
import { ref } from 'vue'
import AccountPlus from 'vue-material-design-icons/AccountPlus.vue'
import FormatListBulleted from 'vue-material-design-icons/FormatListBulleted.vue'
import ClientTable from '../components/ClientTable.vue'
import MyButton from '../components/MyButton.vue'
import MyModal from '../components/MyModal.vue'
import ProjectList from '../components/ProjectList.vue'
const isClientModalOpen = ref(false)
</script>
<template>
  <div class="container">
    <div class="buttons">
      <MyButton variant="secondary" @click="isClientModalOpen = true" dense>
        <AccountPlus title="Add Client"></AccountPlus> Add Client
      </MyButton>
      <MyModal v-model="isClientModalOpen" title="Add Client">
        <form>
          <label for="name">Name</label>
          <input id="name" type="text" />
          <label for="email">Email</label>
          <input id="email" type="email" />
          <label for="phone">Phone</label>
          <input id="phone" type="tel" />
          <MyButton variant="secondary" type="submit">Submit</MyButton>
        </form>
      </MyModal>
      <MyButton variant="primary" dense>
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
form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

input {
  font-size: 1rem;
  padding: 0.75em;
  margin-bottom: 1rem;
  border-radius: var(--default-border-radius);
  border: 1px solid var(--default-border-color);
}
</style>
