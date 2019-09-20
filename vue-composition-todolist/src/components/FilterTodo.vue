<template>
  <footer class="footer" v-show="totalCount">
    <span class="todo-count">
      <strong>{{activeTodoCount}}</strong> {{activeTodoCount>1?'items':'item'}} left
    </span>
    <ul class="filters">
      <li><a @click="handleFilterChange('all')" :class="{ selected: visibilityFilter == 'all' }">All</a></li>
      <li><a @click="handleFilterChange('active')" :class="{ selected: visibilityFilter == 'active' }">Active</a></li>
      <li><a @click="handleFilterChange('completed')" :class="{ selected: visibilityFilter == 'completed' }">Completed</a></li>
    </ul>
    <button class="clear-completed" @click="handleClearCompletedTodo" v-show="completedTodoCount > 0">
      Clear completed
    </button>
  </footer>
</template>

<script lang="ts">
import { createComponent, ref, computed, SetupContext } from '@vue/composition-api'
import { Todo } from './types'

interface Props {
  totalCount: number
  activeTodoCount: number
  completedTodoCount: number
  visibilityFilter: 'all' | 'active' | 'completed'
}
export default createComponent({
  name: 'FilterTodo',
  props: {
    totalCount: {
      type: Number,
      required: true
    },
    activeTodoCount: {
      type: Number,
      required: true
    },
    completedTodoCount: {
      type: Number,
      required: true
    },
    visibilityFilter: {
      type: String,
      required: true
    }
  },
  setup (props: Props, { emit } :SetupContext) {
    function handleFilterChange (filterName: Props['visibilityFilter']) {
      emit('onFilterChange', filterName)
    }
    function handleClearCompletedTodo () {
      emit('onClearCompletedTodo')
    }

    return {
      handleFilterChange,
      handleClearCompletedTodo
    }
  }
})
</script>
