<template>
  <section class="main" v-show="todos.length" v-cloak>
    <input id="toggleAll" class="toggle-all" type="checkbox" v-model="toggleAll">
    <label for="toggleAll"></label>
    <ul class="todo-list">
      <Todo class="todo" v-for="todo in visibleTodos"
        :key="todo.id"
        :todo="todo"
      >
      </Todo>
    </ul>
  </section>
</template>

<script>
  import Todo from './Todo'
  import { mapState, mapMutations, mapGetters } from 'vuex'

  export default {
    name:'TodoList',
    components: {
      Todo
    },
    methods:{
      ...mapMutations(['toggleAllTodo'])
    },
    computed:{
      ...mapState(['todos']),
      ...mapGetters(['visibleTodos','activeTodoCount']),
      toggleAll: {
        get: function () {
          return this.activeTodoCount === 0
        },
        set: function (checked) {
          this.toggleAllTodo(checked)
        }
      }
    }
  }
</script>

<style scoped>
  [v-cloak] { display: none; }
</style>

