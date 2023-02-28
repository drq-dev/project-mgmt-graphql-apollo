<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { reactive } from 'vue'
import MyButton from '../components/MyButton.vue'

const state = reactive({
  name: '',
  email: '',
  phone: ''
})

const rules = {
  name: { required },
  email: { required, email },
  phone: { required }
}

const v$ = useVuelidate(rules, state)

const submit = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return
}
</script>

<template>
  <form @submit.prevent="submit">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="state.name" />
    <p v-if="v$.name.$errors.length > 0" class="error-message">{{ v$.name.$errors[0].$message }}</p>
    <label for="email">Email</label>
    <input id="email" type="email" v-model="state.email" />
    <p v-if="v$.email.$errors.length > 0" class="error-message">
      {{ v$.email.$errors[0].$message }}
    </p>
    <label for="phone">Phone</label>
    <input id="phone" type="tel" v-model="state.phone" />
    <p v-if="v$.phone.$errors.length > 0" class="error-message">
      {{ v$.phone.$errors[0].$message }}
    </p>
    <MyButton variant="secondary" type="submit" class="submit-button">Submit</MyButton>
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
.submit-button {
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
</style>
