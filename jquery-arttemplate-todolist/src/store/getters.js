const runtime = require('art-template/lib/runtime');
const getters = {
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
  activeTodoCount: todos => {
    return todos.reduce(
      (sum, todo) => sum + (todo.completed ? 0 : 1),
      0
    )
  },
  activeTodoWord: function(todos) {
    return this.activeTodoCount(todos) > 1 ? 'items' : 'item'
  },
  toggleAllChecked:function(todos) {
    return todos.length > 0 && this.activeTodoCount(todos) === 0
  },
}

export default Object.assign(runtime,getters)