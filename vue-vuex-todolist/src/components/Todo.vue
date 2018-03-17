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
  import { mapState, mapMutations } from 'vuex'
  export default {
    name:'Todo',
    props:{
      todo:{
        type:Object,
        required:true
      }
    },
    data(){
      return {
        editText:''
      }
    },
    methods:{
      ...mapMutations(['startEditTodo','endEditTodo','destroyTodo']),
      handleStartEditTodo(todo){
        this.editText = todo.text.trim()
        this.startEditTodo(todo)
      },
      handleEndEditTodo(todo){
        if (!this.todoBeingEdited) {
          return
        }
        let text = this.editText.trim()
        if (text) {
          todo.text = text;
          this.endEditTodo(todo)
        } else {
          this.destroyTodo(todo.id)
        }
      },
      handleCancelEditTodo(todo){
        this.endEditTodo(todo)
      },
      handleDestroyTodo(todo){
        this.destroyTodo(todo.id)
      }
    },
    computed:mapState(['todoBeingEdited']),
    directives: {
      'todo-focus': function (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    }
  }
</script>
