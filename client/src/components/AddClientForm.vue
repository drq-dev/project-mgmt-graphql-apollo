<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { onMounted, reactive, ref, watch } from 'vue'
import MyButton from '../components/MyButton.vue'
import { useQueryClient } from '@tanstack/vue-query'
import { useMutation } from '@tanstack/vue-query'
import { addClient } from '../mutations/clientMutations'

const emit = defineEmits(['submitted'])

const state = reactive({
  name: '',
  email: '',
  phone: ''
})

const nameRef = ref(null)
const emailRef = ref(null)
const phoneRef = ref(null)

const rules = {
  name: { required },
  email: { required, email },
  phone: { required }
}

const v$ = useVuelidate(rules, state)

const focusInvalidField = () => {
  if (v$.value.name.$error) {
    nameRef.value.focus()
  } else if (v$.value.email.$error) {
    emailRef.value.focus()
  } else if (v$.value.phone.$error) {
    phoneRef.value.focus()
  }
}

const queryClient = useQueryClient()
const { isLoading, isError, isSuccess, mutate } = useMutation({
  mutationFn: addClient,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['clients'] })
  }
})

watch(isSuccess, async (newValue) => {
  if (newValue) {
    emit('submitted')
  }
})

const submit = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) {
    focusInvalidField()
    return
  }
  mutate({ name: state.name, email: state.email, phone: state.phone })
}

onMounted(() => {
  nameRef.value.focus()
})
</script>

<template>
  <form @submit.prevent="submit">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="state.name" ref="nameRef" />
    <p v-if="v$.name.$errors.length > 0" class="error-message">{{ v$.name.$errors[0].$message }}</p>

    <label for="email">Email</label>
    <input id="email" type="email" v-model="state.email" ref="emailRef" />
    <p v-if="v$.email.$errors.length > 0" class="error-message">
      {{ v$.email.$errors[0].$message }}
    </p>

    <label for="phone">Phone</label>
    <input id="phone" type="tel" v-model="state.phone" ref="phoneRef" />
    <p v-if="v$.phone.$errors.length > 0" class="error-message">
      {{ v$.phone.$errors[0].$message }}
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
input {
  font-size: 1rem;
  padding: 0.75em;
  margin-bottom: 0.25rem;
  border-radius: var(--default-border-radius);
  border: 1px solid var(--default-border-color);
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
