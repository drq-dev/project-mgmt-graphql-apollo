<script setup>
import { useQuery } from '@tanstack/vue-query'
import { getClients } from '../queries/clientQueries'
const { isLoading, isError, data } = useQuery({
  queryKey: ['clients'],
  queryFn: getClients
})
</script>
<template>
  <p v-if="isLoading">Loading...</p>
  <p v-else-if="isError">Something Went Wrong</p>
  <table v-else-if="data">
    {{
      data
    }}
  </table>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1.5rem;
}
</style>
