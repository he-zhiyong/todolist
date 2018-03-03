<template>
  <div id="app">
    <todo-list-app></todo-list-app>
  </div>
</template>

<script>
  import TodoListApp from './components/TodoListApp'

  export default {
    name: 'app',
    components: {
      TodoListApp
    }
  }
</script>
