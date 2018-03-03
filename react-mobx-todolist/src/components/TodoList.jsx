import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends Component {
  render() {
    const { todoStore, viewStore } = this.props;
    if (todoStore.todos.length === 0)
      return null;
    return (
      <section className="main">
        <input
          id="toggleAll"
          className="toggle-all"
          type="checkbox"
          onChange={this.handleToggleAllTodo}
          checked={todoStore.activeTodoCount === 0}
        />
        <label htmlFor="toggleAll"></label>
        <ul className="todo-list">
          {this.getVisibleTodos(viewStore.todoFilter).map(todo =>
            (<Todo
              key={todo.id}
              todo={todo}
              viewStore={viewStore}
            />)
          )}
        </ul>
      </section>
    )
  }

  getVisibleTodos(filter) {
    let todos = this.props.todoStore.todos;
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }

  handleToggleAllTodo = (event) => {
    let checked = event.target.checked;
		this.props.todoStore.toggleAll(checked);
	}
}

TodoList.propTypes = {
  viewStore: PropTypes.object.isRequired,
  todoStore: PropTypes.object.isRequired
}
