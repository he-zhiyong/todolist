import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class FilterTodo extends Component {
  render() {
    const { activeTodoCount, completedTodoCount} = this.props;
    
    if (!activeTodoCount && !completedTodoCount)
      return null;
      
    const activeTodoWord = activeTodoCount > 1 ? 'items' : 'item';
    
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeTodoCount}</strong> {activeTodoWord} left
				</span>
        <ul className="filters">
          {this.renderFilter('SHOW_ALL', 'All')}
          {this.renderFilter('SHOW_ACTIVE', 'Active')}
          {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        </ul>
        {completedTodoCount === 0
					? null
					: <button
							className="clear-completed"
							onClick={this.props.onClearCompletedTodo}>
							Clear completed
						</button>
				}
      </footer>
    )
  }

  renderFilter(filterName, caption) {
		return (
			<li>
        <a onClick={() => this.props.onFilterChange(filterName)}
          className={filterName === this.props.todoFilter ? "selected" : ""}>
					{caption}
				</a>
				{' '}
			</li>
		)
  }
}

FilterTodo.propTypes = {
  todoFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired,
  activeTodoCount: PropTypes.number.isRequired,
  completedTodoCount: PropTypes.number.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onClearCompletedTodo: PropTypes.func.isRequired
}