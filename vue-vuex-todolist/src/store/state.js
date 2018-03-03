export default {
  todos:JSON.parse(localStorage.getItem('todos')) || [],
  visibilityFilter:'all',
  todoBeingEdited:null
}
