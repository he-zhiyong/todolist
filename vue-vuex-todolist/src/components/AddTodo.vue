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
  import { mapMutations } from 'vuex'
  export default {
    name:'AddTodo',
    data(){
      return {
        newTodoText:''
      }
    },
    methods:{
      ...mapMutations(['addTodo']),
      handleAddTodoKeyDown(){
        let newTodoText = this.newTodoText.trim()
        if(newTodoText){
          this.addTodo(newTodoText);
          this.newTodoText = ''
        }
      }
    }
  }
</script>
