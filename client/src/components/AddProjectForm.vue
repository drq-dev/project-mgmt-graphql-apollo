<script setup>
//TODO: Refactor forms (redundant)
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { onMounted, reactive, ref, watch } from 'vue'
import MyButton from '../components/MyButton.vue'
import { useQueryClient } from '@tanstack/vue-query'
import { useMutation } from '@tanstack/vue-query'
import { addProject } from '../mutations/projectMutations'
import { useQuery } from '@tanstack/vue-query'
import { getClientNames } from '../queries/clientQueries'

const emit = defineEmits(['submitted'])

const state = reactive({
  name: '',
  description: '',
  projectState: '',
  clientId: ''
})

const rules = {
  name: { required },
  description: { required },
  projectState: { required },
  clientId: { required }
}

const nameRef = ref(null)
const descriptionRef = ref(null)
const projectStateRef = ref(null)
const clientIdRef = ref(null)

const v$ = useVuelidate(rules, state)

const focusInvalidField = () => {
  if (v$.value.name.$error) {
    nameRef.value.focus()
  } else if (v$.value.description.$error) {
    descriptionRef.value.focus()
  } else if (v$.value.projectState.$error) {
    projectStateRef.value.focus()
  } else if (v$.value.clientId.$error) {
    projectStateRef.value.focus()
  }
}

const queryClient = useQueryClient()
const { isLoading, isError, isSuccess, mutate } = useMutation({
  mutationFn: addProject,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['clients'] })
    queryClient.invalidateQueries({ queryKey: ['projects'] })
  }
})

watch(isSuccess, async (newValue) => {
  if (newValue) {
    resetForm()
    emit('submitted')
  }
})

const submit = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) {
    focusInvalidField()
    return
  }
  mutate({
    name: state.name,
    description: state.description,
    status: state.projectState,
    clientId: state.clientId
  })
}

onMounted(() => {
  nameRef.value.focus()
})

const resetForm = () => {
  state.name = ''
  state.description = ''
  state.projectState = ''
  state.clientId = ''
  v$.value.$reset()
}

const {
  isLoading: clientsAreLoaded,
  isError: clientsLoadingError,
  data: clientsData
} = useQuery({
  queryKey: ['clients'],
  queryFn: getClientNames
})

const evalClientIdOptions = (clients) =>
  clients
    ? clients.map(({ id, name }) => {
        return { text: name, value: id }
      })
    : []
</script>

<template>
  <form @submit.prevent="submit">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="state.name" ref="nameRef" />
    <p v-if="v$.name.$errors.length > 0" class="error-message">{{ v$.name.$errors[0].$message }}</p>

    <label for="description">Description</label>
    <input id="description" type="string" v-model="state.description" ref="descriptionRef" />
    <p v-if="v$.description.$errors.length > 0" class="error-message">
      {{ v$.description.$errors[0].$message }}
    </p>

    <label for="state">State</label>
    <select name="state" id="state" v-model="state.projectState" ref="projectStateRef">
      <option disabled value="">Please select one</option>
      <option>Not Started</option>
      <option>In Progress</option>
      <option>Completed</option>
    </select>
    <p v-if="v$.projectState.$errors.length > 0" class="error-message">
      {{ v$.projectState.$errors[0].$message }}
    </p>

    <label for="state">Client</label>
    <select
      name="clientId"
      id="clientId"
      v-model="state.clientId"
      ref="clientIdRef"
      :disabled="clientsLoadingError"
    >
      <option v-if="clientsAreLoaded">Loading...</option>
      <template v-else>
        <option disabled value="">Please select one</option>
        <option
          v-for="option in evalClientIdOptions(clientsData?.clients)"
          :key="option.id"
          :value="option.value"
        >
          {{ option.text }}
        </option></template
      >
    </select>
    <p v-if="clientsLoadingError" class="error-message">
      Clients cannot be loaded. Try again later or contact support.
    </p>
    <p v-else-if="v$.projectState.$errors.length > 0" class="error-message">
      {{ v$.projectState.$errors[0].$message }}
    </p>
    <div class="submit-container">
      <MyButton variant="secondary" type="submit" class="submit-button" :disabled="isLoading"
        >Submit</MyButton
      >
      <p v-if="isError" class="error-message">
        Data could not be transmitted. Please try again or contact support.
      </p>
    </div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

label,
.submit-container {
  margin-top: 1rem;
}

label:first-child {
  margin-top: 0;
}
input,
select {
  font-size: 1rem;
  padding: 0.75em;
  margin-bottom: 0.25rem;
  border-radius: var(--default-border-radius);
  border: 1px solid var(--default-border-color);
}

select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}

.error-message {
  color: var(--error-color);
}

.submit-container {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
