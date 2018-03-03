<template>
  <li :class="{ completed: todo.completed, editing: todo == todoBeingEdited }">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed">
      <label @dblclick="handleStartEditTodo(todo)">{{ todo.text }}</label>
      <button class="destroy" @click="handleDestroyTodo(todo)"></button>
    </div>
    <input class="edit" type="text"
      v-model="editText"
      v-todo-focus="todo == todoBeingEdited"
      @blur="handleEndEditTodo(todo)"
      @keyup.enter="handleEndEditTodo(todo)"
      @keyup.esc="handleCancelEditTodo(todo)">
  </li>
</template>

<script>
  export default {
    name:'Todo',
    props:{
      todo:{
        type:Object,
        required:true
      },
      todoBeingEdited:{
        type:Object,
        required:false
      }
    },
    data(){
      return {
        editText:''
      }
    },
    methods:{
      handleStartEditTodo(todo){
        this.editText = todo.text.trim()
        this.$emit('onStartEditTodo', todo)
      },
      handleEndEditTodo(todo){
        if (!this.todoBeingEdited) {
          return
        }
        let text = this.editText.trim()
        if (text) {
          todo.text = text;
          this.$emit('onEndEditTodo', todo)
        } else {
          this.$emit('onDestroyTodo', todo.id)
        }
      },
      handleCancelEditTodo(todo){
        this.$emit('onEndEditTodo', todo)
      },
      handleDestroyTodo(todo){
        this.$emit('onDestroyTodo', todo.id)
      }
    },
    directives: {
      'todo-focus': function (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    }
  }
</script>