<template>
  <div class="hello">
    <section class="todoapp">
      <header class="header">
        <h1>todolist</h1>
        <add-todo @onAddTodo="addTodo"/>
      </header>
      <todo-list
        :totalCount="todos.length"
        :visibleTodos="visibleTodos"
        :activeTodoCount="activeTodoCount"
        :todoBeingEdited="todoBeingEdited"
        @onStartEditTodo="startEditTodo"
        @onEndEditTodo="endEditTodo"
        @onDestroyTodo="destroyTodo"
        @onToggleAllTodo="toggleAllTodo"
      />
      <filter-todo
        :totalCount="todos.length"
        :activeTodoCount="activeTodoCount"
        :completedTodoCount="completedTodoCount"
        :visibilityFilter="visibilityFilter"
        @onFilterChange="setVisibilityFilter"
        @onClearCompletedTodo="clearCompletedTodo"
      />
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>TodoList based on vue</p>
      <p>Source:
        <a href="https://github.com/he-zhiyong/todolist/tree/master/vue-composition-todolist"> GitHub </a>or
        <a href="https://gitee.com/he-zhiyong/todolist/tree/master/vue-composition-todolist"> Gitee </a>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import 'todomvc-app-css/index.css'
import { createComponent, reactive, computed, Ref, toRefs } from '@vue/composition-api'
import { Todo } from './types'
import AddTodo from './AddTodo.vue'
import TodoList from './TodoList.vue'
import FilterTodo from './FilterTodo.vue'

interface State {
  todos: Todo[]
  visibilityFilter: 'all' | 'active' | 'completed'
  todoBeingEdited: Todo | null
  visibleTodos: Ref<Todo[]>
  activeTodoCount: Ref<number>
  completedTodoCount: Ref<number>
}
export default createComponent({
  name: 'TodoListApp',
  components: {
    AddTodo,
    TodoList,
    FilterTodo
  },
  setup () {
    const state: any = reactive<State>({
      todos: getLocalStorageTodos(),
      visibilityFilter: 'all',
      todoBeingEdited: null,
      visibleTodos: computed<Todo[]>(() => {
        switch (state.visibilityFilter) {
          case 'all':
            return state.todos
          case 'active':
            return state.todos.filter((todo: Todo) => !todo.completed)
          case 'completed':
            return state.todos.filter((todo: Todo) => todo.completed)
          default:
            return state.todos
        }
      }),
      activeTodoCount: computed<number>(() => {
        return state.todos.reduce(
          (sum :number, todo: Todo) => sum + (todo.completed ? 0 : 1),
          0
        )
      }),
      completedTodoCount: computed<number>(() => {
        return state.todos.length - state.activeTodoCount
      })
    })

    function getLocalStorageTodos () {
      let todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]')
      return todos
    }
    function saveTodosToLocalStorage () {
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
    function addTodo (text: string) {
      state.todos.push({
        text,
        id: Date.now().toString(),
        completed: false
      })
    }
    function startEditTodo (todo: Todo) {
      state.todoBeingEdited = todo
    }
    function endEditTodo (newTodo: Todo) {
      state.todos.forEach((todo: Todo) => {
        if (todo.id === newTodo.id) {
          todo = newTodo
        }
      })
      state.todoBeingEdited = null
    }
    function toggleAllTodo (checked: boolean) {
      state.todos.forEach((todo :Todo) => {
        todo.completed = checked
      })
    }
    function destroyTodo (id: Todo['id']) {
      state.todos = state.todos.filter(
        (todo: Todo) => todo.id !== id
      )
      state.todoBeingEdited = null
    }
    function setVisibilityFilter (filterName: State['visibilityFilter']) {
      state.visibilityFilter = filterName
    }
    function clearCompletedTodo () {
      state.todos = state.todos.filter(
        (todo :Todo) => todo.completed === false
      )
    }
    window.onbeforeunload = () => {
      saveTodosToLocalStorage()
    }
    return {
      ...toRefs(state),
      addTodo,
      startEditTodo,
      endEditTodo,
      toggleAllTodo,
      destroyTodo,
      setVisibilityFilter,
      clearCompletedTodo
    }
  }
})
</script>
