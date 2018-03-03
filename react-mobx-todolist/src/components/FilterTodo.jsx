import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
export default class FilterTodo extends Component {
	render() {
		const { todoStore } = this.props;
		
		if (!todoStore.activeTodoCount && !todoStore.completedCount)
			return null;

		const activeTodoWord = todoStore.activeTodoCount > 1 ? 'items' : 'item';

		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{todoStore.activeTodoCount}</strong> {activeTodoWord} left
				</span>
				<ul className="filters">
					{this.renderFilter('all', 'All')}
					{this.renderFilter('active', 'Active')}
					{this.renderFilter('completed', 'Completed')}
				</ul>
				{todoStore.completedCount === 0
					? null
					: <button
							className="clear-completed"
							onClick={this.clearCompleted}>
							Clear completed
						</button>
				}
			</footer>
		)
	}

	renderFilter(filterName, caption) {
		const { viewStore } = this.props;
		return (
			<li>
				<a onClick={() => viewStore.todoFilter = filterName}
					className={filterName === viewStore.todoFilter ? "selected" : ""}>
					{caption}
				</a>
				{' '}
			</li>
		)
	}

	clearCompleted = () => {
		this.props.todoStore.clearCompleted();
	}
}

FilterTodo.propTypes = {
	viewStore: PropTypes.object.isRequired,
	todoStore: PropTypes.object.isRequired
}
