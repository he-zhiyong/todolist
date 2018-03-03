export default {
  visibleTodos: state => {
    switch(state.visibilityFilter){
      case 'all':
        return state.todos
      case 'active':
        return state.todos.filter(todo => !todo.completed)
      case 'completed':
        return state.todos.filter(todo => todo.completed)
      default:
        return state.todos
    }
  },
  activeTodoCount: state => {
    return state.todos.reduce(
      (sum, todo) => sum + (todo.completed ? 0 : 1),
      0
    )
  },
  completedTodoCount: (state, getters) => {
    return state.todos.length - getters.activeTodoCount
  }
}
