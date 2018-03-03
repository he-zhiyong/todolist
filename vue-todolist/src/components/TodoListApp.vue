<template>
  <div>
    <section class="todoapp">
      <header class="header">
        <h1>todolist</h1>
        <add-todo @onAddTodo="addTodo"></add-todo>
      </header>
      <todo-list
        :todos="todos"
        :visibleTodos="visibleTodos"
        :todoBeingEdited="todoBeingEdited"
        :activeTodoCount="activeTodoCount"
        @onStartEditTodo="startEditTodo"
        @onEndEditTodo="endEditTodo"
        @onDestroyTodo="destroyTodo"
        @onToggleAllTodo="toggleAllTodo"
      >
      </todo-list>
      <filter-todo
        :todos="todos"
        :activeTodoCount="activeTodoCount"
        :completedTodoCount="completedTodoCount"
        :visibilityFilter="visibilityFilter"
        @onFilterChange="setVisibilityFilter"
        @onClearCompletedTodo="clearCompletedTodo"
      >
      </filter-todo>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>TodoList based on vue</p>
      <p>Source:
        <a href="https://github.com/he-zhiyong/todolist/tree/master/vue-todolist"> GitHub </a>or
        <a href="https://gitee.com/he-zhiyong/todolist/tree/master/vue-todolist"> Gitee </a>
      </p>
    </footer>
  </div>
</template>

<script>
  import 'todomvc-app-css/index.css'
  import AddTodo from "./AddTodo"
  import TodoList from "./TodoList"
  import FilterTodo from "./FilterTodo"

  export default {
    name:'TodoListApp',
    components: {
      AddTodo,
      TodoList,
      FilterTodo
    },
    data(){
      return {
        todos:this.getLocalStorageTodos(),
        visibilityFilter:'all',
        todoBeingEdited:null
      }
    },
    methods:{
      getLocalStorageTodos(){
        let todos = JSON.parse(localStorage.getItem('todos')) || []
        return todos
      },
      saveTodosToLocalStorage(){
        localStorage.setItem('todos', JSON.stringify(this.todos))
      },
      addTodo(text){
        this.todos.push({
          text,
          id:Date.now().toString(),
          completed:false
        })
      },
      startEditTodo(todo){
        this.todoBeingEdited = todo
      },
      endEditTodo(newTodo){
        this.todos.forEach(todo => {
          if(todo.id === newTodo.id){
            todo = newTodo
          }
        })
        this.todoBeingEdited = null
      },
      toggleAllTodo(checked){
        this.todos.forEach(todo => {
          todo.completed = checked
        })
      },
      destroyTodo(id){
        this.todos = this.todos.filter(
          todo => todo.id !== id
        )
        this.todoBeingEdited = null
      },
      setVisibilityFilter(filterName){
        this.visibilityFilter = filterName
      },
      clearCompletedTodo(){
        this.todos = this.todos.filter(
          todo => todo.completed === false
        )
      }
    },
    computed: {
      visibleTodos: function () {
        switch(this.visibilityFilter){
          case 'all':
            return this.todos
          case 'active':
            return this.todos.filter(todo => !todo.completed)
          case 'completed':
            return this.todos.filter(todo => todo.completed)
          default:
            return this.todos
        }
      },
      activeTodoCount: function () {
        return this.todos.reduce(
          (sum, todo) => sum + (todo.completed ? 0 : 1),
          0
        )
      },
      completedTodoCount: function () {
        return this.todos.length - this.activeTodoCount
      }
    },
    created() {
      window.onbeforeunload = () => {
        this.saveTodosToLocalStorage()
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
