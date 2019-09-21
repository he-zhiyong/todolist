import { Ref } from '@vue/composition-api'

export interface Todo {
  text: string
  id: string,
  completed: boolean
}

export interface State {
  todos: Todo[]
  visibilityFilter: 'all' | 'active' | 'completed'
  todoBeingEdited: Todo | null
  visibleTodos: Ref<Todo[]>
  activeTodoCount: Ref<number>
  completedTodoCount: Ref<number>
}
