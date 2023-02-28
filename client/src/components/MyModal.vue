<script setup>
import { onMounted, ref, watch } from 'vue'
import Close from 'vue-material-design-icons/Close.vue'
import MyButton from './MyButton.vue'

const props = defineProps({ modelValue: { type: Boolean }, title: { type: String, default: '' } })
const emit = defineEmits(['update:modelValue'])

const modal = ref(null)

watch(props, (newValue) => (newValue.modelValue ? modal.value.showModal() : modal.value.close()))

onMounted(() =>
  modal.value.addEventListener('close', () => {
    console.log('close')
    emit('update:modelValue', false)
  })
)
</script>

<template>
  <dialog ref="modal">
    <div class="container">
      <header>
        <h2>{{ title }}</h2>
        <MyButton variant="icon" @click="emit('update:modelValue', false)">
          <Close :size="30" title="Close modal" aria-label="Close modal"></Close>
        </MyButton>
      </header>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
:modal {
  width: 100%;
  max-width: 40rem;
  padding: 1.5rem 0;
  border: 0;
  border-radius: var(--default-border-radius);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.35);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--default-border-color);
}

header,
.content {
  padding-inline: 1.5rem;
}

.content {
  padding-top: 1.5rem;
}
</style>
