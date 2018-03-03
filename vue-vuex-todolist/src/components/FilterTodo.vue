<template>
  <footer class="footer" v-show="todos.length">
    <span class="todo-count">
      <strong>{{activeTodoCount}}</strong> {{activeTodoCount>1?'items':'item'}} left
    </span>
    <ul class="filters">
      <li><a @click="setVisibilityFilter('all')" :class="{ selected: visibilityFilter == 'all' }">All</a></li>
      <li><a @click="setVisibilityFilter('active')" :class="{ selected: visibilityFilter == 'active' }">Active</a></li>
      <li><a @click="setVisibilityFilter('completed')" :class="{ selected: visibilityFilter == 'completed' }">Completed</a></li>
    </ul>
    <button class="clear-completed" @click="clearCompletedTodo" v-show="completedTodoCount > 0">
      Clear completed
    </button>
  </footer>
</template>

<script>
  import store from '../store'
  import { mapState, mapMutations, mapGetters } from 'vuex'

  export default {
    name:'FilterTodo',
    store,
    methods:{
      ...mapMutations(['setVisibilityFilter','clearCompletedTodo'])
    },
    computed:{
      ...mapState(['todos','visibilityFilter']),
      ...mapGetters(['activeTodoCount','completedTodoCount'])
    }
  }
</script>
