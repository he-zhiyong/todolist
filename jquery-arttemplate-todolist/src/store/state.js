export default {
  todos:JSON.parse(localStorage.getItem('todos')) || [],
  visibleTodos:[],
  visibilityFilter:'all',
  todoBeingEdited:null
}