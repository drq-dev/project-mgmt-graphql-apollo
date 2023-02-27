<script setup>
import { useQuery } from '@tanstack/vue-query'
import { getProjects } from '../queries/projectQueries'
const { isLoading, isError, data, error } = useQuery({
  queryKey: ['projects'],
  queryFn: getProjects
})
</script>
<template>
  <p v-if="isLoading">Is loading ...</p>
  <p v-else-if="isError">Error: {{ error }}</p>
  <p v-else-if="data">Data: {{ data }}</p>
</template>
