<script setup>
import { useQuery } from '@tanstack/vue-query'
import { getProjects } from '../queries/projectQueries'
import ProjectCard from './ProjectCard.vue'
const { isLoading, isError, data } = useQuery({
  queryKey: ['projects'],
  queryFn: getProjects
})
</script>
<template>
  <p v-if="isLoading">Loading...</p>
  <p v-else-if="isError">Something Went Wrong</p>
  <section v-else-if="data">
    <ProjectCard
      v-for="project in data.projects"
      :key="project.id"
      :project="project"
    ></ProjectCard>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1.5rem;
}
</style>
