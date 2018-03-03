<template>
  <footer class="footer" v-show="todos.length">
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

<script>
  export default {
    name:'FilterTodo',
    props:{
      todos:{
        type:Array,
        required:true
      },
      activeTodoCount:{
        type:Number,
        required:true
      },
      completedTodoCount:{
        type:Number,
        required:true
      },
      visibilityFilter:{
        type:String,
        required:true
      }
    },
    methods:{
      handleFilterChange(filterName){
        this.$emit('onFilterChange', filterName)
      },
      handleClearCompletedTodo(){
        this.$emit('onClearCompletedTodo')
      }
    }
  }
</script>
