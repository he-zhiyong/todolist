export default {
  saveTodosToLocalStorage(state){
    localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  addTodo(state,text){
    state.todos.push({
      text,
      id:Date.now().toString(),
      completed:false
    })
  },
  startEditTodo(state,todo){
    state.todoBeingEdited = todo
  },
  endEditTodo(state,newTodo){
    state.todos.forEach(todo => {
      if(todo.id === newTodo.id){
        todo = newTodo
      }
    })
    state.todoBeingEdited = null
  },
  toggleAllTodo(state,checked){
    state.todos.forEach(todo => {
      todo.completed = checked
    })
  },
  destroyTodo(state,id){
    state.todos = state.todos.filter(
      todo => todo.id !== id
    )
    state.todoBeingEdited = null
  },
  setVisibilityFilter(state,filterName){
    state.visibilityFilter = filterName
  },
  clearCompletedTodo(state){
    state.todos = state.todos.filter(
      todo => todo.completed === false
    )
  }
}
