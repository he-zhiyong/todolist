import getters from './getters'
import state from './state'

state.visibleTodos = getters.visibleTodos(state)

export default {
  state,
  getters
}