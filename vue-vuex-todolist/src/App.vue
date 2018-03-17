<template>
  <div id="app">
    <todo-list-app></todo-list-app>
  </div>
</template>

<script>
  import TodoListApp from './components/TodoListApp'
  import store from './store'
  export default {
    name: 'app',
    components: {
      TodoListApp
    },
    store
  }
</script>
