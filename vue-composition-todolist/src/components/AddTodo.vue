<template>
  <input
    class="new-todo"
    placeholder="What needs to be done?"
    autofocus autocomplete="off"
    v-model="newTodoText"
    @keydown.enter="handleAddTodoKeyDown"
  />
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

export default createComponent({
  name: 'AddTodo',
  setup (props, { emit }) {
    const newTodoText = ref('')

    function handleAddTodoKeyDown () {
      if (newTodoText.value.trim()) {
        emit('onAddTodo', newTodoText.value.trim())
        newTodoText.value = ''
      }
    }

    return {
      newTodoText,
      handleAddTodoKeyDown
    }
  }
})
</script>
