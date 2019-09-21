import React from 'react'
import { Todo } from './types'

const ENTER_KEY = 13
interface Props {
  onAddTodo: (text: Todo['text']) => void
}
const AddTodo: React.FC<Props> = (props: Props) => {
  const handleAddTodoKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode !== ENTER_KEY) return
    event.preventDefault()
    const newTodo = event.target as HTMLInputElement
    const newTodoText = newTodo.value.trim()
    if (newTodoText.trim()) {
      props.onAddTodo(newTodoText)
      newTodo.value = ''
    }
  }

  return (
    <input 
      className="new-todo"
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      onKeyDown={handleAddTodoKeyDown}
    />
  )
}

export default AddTodo