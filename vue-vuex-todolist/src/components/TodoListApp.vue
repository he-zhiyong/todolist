<template>
  <div>
    <section class="todoapp">
      <header class="header">
        <h1>todolist</h1>
        <add-todo></add-todo>
      </header>
      <todo-list></todo-list>
      <filter-todo></filter-todo>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>TodoList based on vue and vuex</p>
      <p>Source:
        <a href="https://github.com/he-zhiyong/todolist/tree/master/vue-vuex-todolist"> GitHub </a>or
        <a href="https://gitee.com/he-zhiyong/todolist/tree/master/vue-vuex-todolist"> Gitee </a>
      </p>
    </footer>
  </div>
</template>

<script>
  import 'todomvc-app-css/index.css'
  import AddTodo from "./AddTodo"
  import TodoList from "./TodoList"
  import FilterTodo from "./FilterTodo"
  import { mapState, mapMutations } from 'vuex'

  export default {
    name:'TodoListApp',
    components: {
      AddTodo,
      TodoList,
      FilterTodo
    },
    methods:mapMutations(['saveTodosToLocalStorage']),
    computed:mapState(['todos']),
    created() {
      window.onbeforeunload = () => {
        this.saveTodosToLocalStorage(this.todos)
      }
    },
    /* watch: {
      todos: {
        handler: function () {
          this.saveTodosToLocalStorage()
        },
        deep: true
      }
    }, */
  }
</script>

<style>

</style>

