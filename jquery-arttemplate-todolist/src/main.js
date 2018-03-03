import 'todomvc-app-css/index.css'
import TodoListApp from './components/TodoListApp.art'
import store from './store'
import App from './App'

App.render(store,TodoListApp)

window.store = store
window.onbeforeunload = () => {
  localStorage.setItem('todos', JSON.stringify(store.state.todos))
}