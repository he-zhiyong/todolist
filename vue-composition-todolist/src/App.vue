<template>
  <div id="app">
    <TodoListApp msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoListApp from './components/TodoListApp.vue'

export default Vue.extend({
  name: 'app',
  components: {
    TodoListApp
  }
})
</script>
