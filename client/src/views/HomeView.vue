<script setup>
// TODO: Create form components
import { ref } from 'vue'
import AccountPlus from 'vue-material-design-icons/AccountPlus.vue'
import FormatListBulleted from 'vue-material-design-icons/FormatListBulleted.vue'
import AddClientForm from '../components/AddClientForm.vue'
import AddProjectForm from '../components/AddProjectForm.vue'
import ClientTable from '../components/ClientTable.vue'
import MyButton from '../components/MyButton.vue'
import MyModal from '../components/MyModal.vue'
import ProjectList from '../components/ProjectList.vue'

const isAddClientFormModalOpen = ref(false)
const isAddProjectFormModalOpen = ref(false)
</script>
<template>
  <div class="container">
    <div class="buttons">
      <MyButton variant="secondary" @click="isAddClientFormModalOpen = true" dense>
        <AccountPlus title="Add Client"></AccountPlus> Add Client
      </MyButton>
      <MyModal v-model="isAddClientFormModalOpen" title="Add Client">
        <AddClientForm @submitted="isAddClientFormModalOpen = false"></AddClientForm>
      </MyModal>
      <MyButton variant="primary" @click="isAddProjectFormModalOpen = true" dense>
        <FormatListBulleted title="Add Project"></FormatListBulleted>Add Project
      </MyButton>
      <MyModal v-model="isAddProjectFormModalOpen" title="Add Project">
        <AddProjectForm @submitted="isAddProjectFormModalOpen = false"></AddProjectForm>
      </MyModal>
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
