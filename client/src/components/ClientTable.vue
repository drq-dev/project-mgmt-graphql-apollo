<script setup>
import { useQuery, useQueryClient } from '@tanstack/vue-query'
import { getClients } from '../queries/clientQueries'
import { removeClient } from '../mutations/clientMutations'
import MyButton from './MyButton.vue'
import Delete from 'vue-material-design-icons/Delete.vue'
import { useMutation } from '@tanstack/vue-query'

const { isLoading, isError, data } = useQuery({
  queryKey: ['clients'],
  queryFn: getClients
})

const queryClient = useQueryClient()

const { mutate } = useMutation({
  mutationFn: removeClient,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['clients'] })
  }
})
</script>
<template>
  <p v-if="isLoading">Loading...</p>
  <p v-else-if="isError">Something Went Wrong</p>
  <table v-else-if="data">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th></th>
    </tr>
    <tr v-for="client in data.clients" :key="client.id">
      <td>{{ client.name }}</td>
      <td>{{ client.email }}</td>
      <td>{{ client.phone }}</td>
      <td>
        <MyButton
          variant="error"
          aria-label="Delete client."
          @click="mutate({ clientID: client.id })"
          dense
          ><Delete :size="20"></Delete
        ></MyButton>
      </td>
    </tr>
  </table>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1.5rem;
}
tr {
  border-bottom: 1px solid #dee2e6;
}
th,
td {
  padding-block: 0.75rem;
}
th {
  font-size: 1.05rem;
  font-weight: bold;
  text-align: left;
}
</style>
