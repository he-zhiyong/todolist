<template>
  <section class="main" v-show="todos.length" v-cloak>
    <input id="toggleAll" class="toggle-all" type="checkbox" v-model="toggleAllTodo">
    <label for="toggleAll"></label>
    <ul class="todo-list">
      <Todo class="todo" v-for="todo in visibleTodos"
        :key="todo.id"
        :todo="todo"
        :todoBeingEdited="todoBeingEdited"
        @onStartEditTodo="onStartEditTodo"
        @onEndEditTodo="onEndEditTodo"
        @onDestroyTodo="onDestroyTodo"
      >
      </Todo>
    </ul>
  </section>
</template>

<script>
  import Todo from './Todo'

  export default {
    name:'TodoList',
    components: {
      Todo
    },
    props:{
      todos:{
        type:Array,
        required:true
      },
      visibleTodos:{
        type:Array,
        required:true
      },
      activeTodoCount:{
        type:Number,
        required:true
      },
      todoBeingEdited:{
        type:Object,
        required:false
      }
    },
    methods:{
      onStartEditTodo(todo){
        this.$emit('onStartEditTodo', todo)
      },
      onEndEditTodo(id,text){
        this.$emit('onEndEditTodo', id, text)
      },
      onDestroyTodo(id){
        this.$emit('onDestroyTodo', id)
      }
    },
    computed:{
      toggleAllTodo: {
        get: function () {
          return this.activeTodoCount === 0
        },
        set: function (checked) {
          this.$emit('onToggleAllTodo', checked)
        }
      }
    }
  }
</script>

<style scoped>
  [v-cloak] { display: none; }
</style>

