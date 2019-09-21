import React from 'react'
import { State } from './types'

interface Props {
  visibilityFilter: State['visibilityFilter']
  activeTodoCount: State['activeTodoCount']
  completedTodoCount: State['completedTodoCount']
  onFilterChange: (filterName: State['visibilityFilter']) => void
  onClearCompletedTodo: () => void
}
const FilterTodo: React.FC<Props> = (props: Props) => {
  const { visibilityFilter, activeTodoCount, completedTodoCount, onFilterChange, onClearCompletedTodo } = props
  if (!activeTodoCount && !completedTodoCount) return null

  
  const renderFilter = (filterName: State['visibilityFilter'], caption: string) => {
    return (
			<li>
        <a
          onClick={() => onFilterChange(filterName)}
          className={filterName === visibilityFilter ? "selected" : ""}>
					{caption}
				</a>
				{' '}
			</li>
		)
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodoCount}</strong> {activeTodoCount > 1 ? 'items' : 'item'} left
      </span>
      <ul className="filters">
        {renderFilter('all', 'All')}
        {renderFilter('active', 'Active')}
        {renderFilter('completed', 'Completed')}
      </ul>
      {completedTodoCount === 0
        ? null
        : <button
            className="clear-completed"
            onClick={onClearCompletedTodo}>
            Clear completed
          </button>
      }
    </footer>
  )
}

export default FilterTodo