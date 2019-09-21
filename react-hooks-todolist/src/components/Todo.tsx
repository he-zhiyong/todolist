import React, { useEffect } from 'react'
import { Todo, State } from './types'

const ESCAPE_KEY = 27
const ENTER_KEY = 13

interface Props {
  key: string
  todo: Todo
  todoBeingEdited: State['todoBeingEdited']
  onToggleTodo: () => void
  onStartEditTodo: () => void
  onEndEditTodo: (text: Todo['text']) => void
  onCancelEditTodo: () => void
  onDestroyTodo: () => void
}
const TodoComponent: React.FC<Props> = (props: Props) => { 
  const { todo, todoBeingEdited, onToggleTodo, onStartEditTodo, onEndEditTodo, onCancelEditTodo, onDestroyTodo } = props
  let editField: HTMLInputElement | null = null

  useEffect(() => {
    if (todoBeingEdited) editField!.focus()
    return () => {}
  }, [editField, todoBeingEdited])

  const handleEditTodo = () => {
    editField!.value = todo.text
    onStartEditTodo()
  }
  const handleSubmit = (destroy?: boolean) => {
    let text = editField!.value.trim()
		if (text) {
			onEndEditTodo(text)
		} else if (destroy) {
			onDestroyTodo()
		}
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.which === ESCAPE_KEY) {
			onCancelEditTodo()
		} else if (event.which === ENTER_KEY) {
			handleSubmit(true)
		}
  }

  return (
    <li className={[
      todo.completed ? "completed" : "",
      todo === todoBeingEdited ? "editing" : ""
    ].join(" ")}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={onToggleTodo}
        />
        <label onDoubleClick={handleEditTodo}>
          {todo.text}
        </label>
        <button className="destroy" onClick={onDestroyTodo} />
      </div>
      <input
        ref={input => editField = input}
        className="edit"
        autoFocus={true} 
        onBlur={() => handleSubmit()}
        onKeyDown={handleKeyDown}
      />
    </li>
  )
}

export default TodoComponent