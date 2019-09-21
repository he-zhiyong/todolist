<template>
  <li :class="{ completed: todo.completed, editing: todo == todoBeingEdited }">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed">
      <label @dblclick="handleStartEditTodo(todo)">{{ todo.text }}</label>
      <button class="destroy" @click="handleDestroyTodo(todo)"></button>
    </div>
    <input class="edit" type="text"
      v-model="editText"
      v-todo-focus="todo == todoBeingEdited"
      @blur="handleEndEditTodo(todo)"
      @keyup.enter="handleEndEditTodo(todo)"
      @keyup.esc="handleCancelEditTodo(todo)">
  </li>
</template>

<script lang="ts">
import { createComponent, ref, computed, SetupContext } from '@vue/composition-api'
import { Todo, State } from './types'

interface Props {
  todo: Todo
  todoBeingEdited: State['todoBeingEdited']
}
export default createComponent({
  name: 'Todo',
  props: {
    todo: {
      type: Object,
      required: true
    },
    todoBeingEdited: {
      type: Object,
      required: false
    }
  },
  setup (props: Props, { emit } :SetupContext) {
    const editText = ref('')

    function handleStartEditTodo (todo: Todo) {
      editText.value = todo.text.trim()
      emit('onStartEditTodo', todo)
    }
    function handleEndEditTodo (todo: Todo) {
      if (!props.todoBeingEdited) {
        return
      }
      let text = editText.value.trim()
      if (text) {
        todo.text = text
        emit('onEndEditTodo', todo)
      } else {
        emit('onDestroyTodo', todo.id)
      }
    }
    function handleCancelEditTodo (todo: Todo) {
      emit('onEndEditTodo', todo)
    }
    function handleDestroyTodo (todo: Todo) {
      emit('onDestroyTodo', todo.id)
    }

    return {
      editText,
      handleStartEditTodo,
      handleEndEditTodo,
      handleCancelEditTodo,
      handleDestroyTodo
    }
  },
  directives: {
    'todo-focus': function (el: any, binding: any) {
      if (binding.value) {
        el.focus()
      }
    }
  }
})
</script>
