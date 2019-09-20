<template>
  <section class="main" v-show="totalCount" v-cloak>
    <input id="toggleAll" class="toggle-all" type="checkbox" v-model="toggleAllTodo">
    <label for="toggleAll"></label>
    <ul class="todo-list">
      <Todo class="todo" v-for="todo in visibleTodos"
        :key="todo.id"
        :todo="todo"
        :todoBeingEdited="todoBeingEdited"
        @onStartEditTodo="onStartEditTodo"
        @onEndEditTodo="onEndEditTodo"
        @onDestroyTodo="onDestroyTodo"
      />
    </ul>
  </section>
</template>

<script lang="ts">
import { createComponent, computed, SetupContext } from '@vue/composition-api'
import { Todo } from './types'
import TodoComponent from './Todo.vue'

interface Props {
  totalCount: number
  visibleTodos: Todo[]
  activeTodoCount: number
  todoBeingEdited: Todo | null
}
export default createComponent({
  name: 'TodoList',
  components: {
    Todo: TodoComponent
  },
  props: {
    totalCount: {
      type: Number,
      required: true
    },
    visibleTodos: {
      type: Array,
      required: true
    },
    activeTodoCount: {
      type: Number,
      required: true
    },
    todoBeingEdited: {
      type: Object,
      required: false
    }
  },
  setup (props: Props, { emit }: SetupContext) {
    const { activeTodoCount } = props
    const toggleAllTodo = computed({
      get: function () {
        return activeTodoCount === 0
      },
      set: function (checked) {
        emit('onToggleAllTodo', checked)
      }
    })

    function onStartEditTodo (todo: Todo) {
      emit('onStartEditTodo', todo)
    }
    function onEndEditTodo (id: Todo['id'], text: Todo['text']) {
      emit('onEndEditTodo', id, text)
    }
    function onDestroyTodo (id: Todo['id']) {
      emit('onDestroyTodo', id)
    }

    return {
      toggleAllTodo,
      onStartEditTodo,
      onEndEditTodo,
      onDestroyTodo
    }
  }
})
</script>

<style scoped>
  [v-cloak] { display: none; }
</style>
