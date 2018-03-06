<template>
  <input
    class="new-todo"
    placeholder="What needs to be done?"
    autofocus autocomplete="off"
    v-model="newTodoText"
    @keydown.enter="handleAddTodoKeyDown"
  />
</template>

<script>
  export default {
    name:'AddTodo',
    data(){
      return {
        newTodoText:''
      }
    },
    methods:{
      handleAddTodoKeyDown(){
        let newTodoText = this.newTodoText.trim()
        if(newTodoText){
          this.$emit('onAddTodo', newTodoText)
          this.newTodoText = ''
        }
      }
    }
  }
</script>
