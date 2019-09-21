import React from 'react'
import TodoComponent from './Todo'
import { Todo, State } from './types'

interface Props {
  totalCount: number
  visibleTodos: State['todos']
  todoBeingEdited: State['todoBeingEdited']
  activeTodoCount: State['activeTodoCount']
  onToggleTodo: (id: Todo['id']) => void
  onToggleAllTodo: (checked: boolean) => void
  onStartEditTodo: (todo: Todo) => void
  onEndEditTodo: (id: Todo['id'], text: Todo['text']) => void
  onCancelEditTodo: () => void
  onDestroyTodo: (id: Todo['id']) => void
}
const TodoList: React.FC<Props> = (props: Props) => {
  const { totalCount, visibleTodos, todoBeingEdited, activeTodoCount, onToggleTodo, onToggleAllTodo, onStartEditTodo, onEndEditTodo, onCancelEditTodo, onDestroyTodo } = props

  const handleToggleAllTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    let checked = event.target.checked
    onToggleAllTodo(checked)
  }
  return (
    <section className="main" style={{'display': totalCount > 0 ? 'block':'none' }}>
        <input
          id="toggleAll"
          className="toggle-all"
          type="checkbox"
          onChange={handleToggleAllTodo}
          checked={activeTodoCount === 0}
        />
        <label htmlFor="toggleAll"></label>
        <ul className="todo-list">
          {visibleTodos.map(todo =>
            <TodoComponent 
              key={todo.id}
              todo={todo}
              todoBeingEdited={todoBeingEdited}
              onToggleTodo={() => onToggleTodo(todo.id)} 
              onStartEditTodo={() => onStartEditTodo(todo)} 
              onEndEditTodo={(text) => onEndEditTodo(todo.id,text)} 
              onCancelEditTodo={() => onCancelEditTodo()}
              onDestroyTodo={() => onDestroyTodo(todo.id)} 
            />
          )}
        </ul>
      </section>
  )
}

export default TodoList