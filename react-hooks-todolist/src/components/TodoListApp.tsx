import 'todomvc-app-css/index.css'
import React, { useState, useEffect } from 'react'
import { Todo, State } from './types'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import FilterTodo from './FilterTodo'

const TodoListApp: React.FC = () => {
  const getLocalStorageTodos = () => {
    let todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]')
    return todos
  }
  window.onbeforeunload = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const [ todos, setTodos ] = useState<Todo[]>(getLocalStorageTodos())
  const [ visibilityFilter, setVisibilityFilter ] = useState<State['visibilityFilter']>('all')
  const [ todoBeingEdited, setTodoBeingEdited ] = useState<State['todoBeingEdited']>(null)
  const [ visibleTodos, setVisibleTodos ] = useState<Todo[]>([])
  const [ activeTodoCount, setActiveTodoCount ] = useState<State['activeTodoCount']>(0)
  const [ completedTodoCount, setCompletedTodoCount ] = useState<State['completedTodoCount']>(0)

  useEffect(() => {
    setVisibleTodos(() => {
      switch (visibilityFilter) {
        case 'all':
          return todos
        case 'active':
          return todos.filter((todo: Todo) => !todo.completed)
        case 'completed':
          return todos.filter((todo: Todo) => todo.completed)
        default:
          return todos
      }
    })
    setActiveTodoCount(todos.reduce(
			(sum, todo) => sum + (todo.completed ? 0 : 1),
			0
    ))
    setCompletedTodoCount(todos.length - todos.reduce(
			(sum, todo) => sum + (todo.completed ? 0 : 1),
			0
    ))
  }, [todos, visibilityFilter])

  const handleAddTodo = (text: Todo['text']) => {
    setTodos(() => [
      ...todos,
      {
        text,
        id: Date.now().toString(),
        completed: false
      }
    ])
  }
  const handleToggleTodo = (id: Todo['id']) => {
    setTodos(todos => todos.map<Todo>(todo => {
      if (todo.id === id) todo.completed = !todo.completed
      return {
        ...todo
      }
    }))
  }
  const handleToggleAllTodo = (checked: boolean) => {
    setTodos(todos => todos.map<Todo>(todo => {
      todo.completed = checked
      return {
        ...todo
      }
    }))
  }
  const handleStartEditTodo = (todo: Todo) => {
    setTodoBeingEdited(todo)
  }
  const handleEndEditTodo = (id: Todo['id'], text: Todo['text']) => {
    setTodos(todos => {
      todos.forEach(todo => {
        if(todo.id === id){
          todo.text = text
        }
      })
      return todos
    })
    setTodoBeingEdited(null)
  }
  const handleCancelEditTodo = () => {
    setTodoBeingEdited(null)
  }
  const handleDestroyTodo = (id: Todo['id']) => {
    setTodos(todos => todos.filter(
      todo => todo.id !== id
    ))
  }
  const handleFilterChange = (filterName: State['visibilityFilter']) => {
    setVisibilityFilter(filterName)
  }
  const handleClearCompletedTodo = () => {
    setTodos(todos => todos.filter(
      todo => todo.completed === false
    ))
  }

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todolist</h1>
          <AddTodo onAddTodo={handleAddTodo}/>
        </header>
        <TodoList 
          totalCount={todos.length}
          visibleTodos={visibleTodos}
          todoBeingEdited={todoBeingEdited}
          activeTodoCount={activeTodoCount}
          onToggleTodo={id =>
            handleToggleTodo(id)
          }
          onToggleAllTodo={(checked) =>
            handleToggleAllTodo(checked)
          }
          onStartEditTodo={(todo) =>
            handleStartEditTodo(todo)
          }
          onEndEditTodo={(id,text) =>
            handleEndEditTodo(id,text)
          }
          onCancelEditTodo={() =>
            handleCancelEditTodo()
          }
          onDestroyTodo={id =>
            handleDestroyTodo(id)
          } 
        />
        <FilterTodo 
          visibilityFilter={visibilityFilter}
          activeTodoCount={activeTodoCount}
          completedTodoCount={completedTodoCount}
          onFilterChange={filterName =>
            handleFilterChange(filterName)
          }
          onClearCompletedTodo={() => 
            handleClearCompletedTodo()
          } 
        />
      </section>
      
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>TodoList based on react</p>
        <p>Source: 
          <a href="https://github.com/he-zhiyong/todolist/tree/master/react-hooks-todolist"> GitHub </a>or
          <a href="https://gitee.com/he-zhiyong/todolist/tree/master/react-hooks-todolist"> Gitee </a>
        </p>
      </footer>
    </div>
  )
}

export default TodoListApp