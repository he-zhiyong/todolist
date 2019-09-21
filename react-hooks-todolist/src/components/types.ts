export interface Todo {
  text: string
  id: string
  completed: boolean
}

export interface State {
  todos: Todo[]
  totalCount: number
  visibilityFilter: 'all' | 'active' | 'completed'
  todoBeingEdited: Todo | null
  visibleTodos: Todo[]
  activeTodoCount: number
  completedTodoCount: number
}
