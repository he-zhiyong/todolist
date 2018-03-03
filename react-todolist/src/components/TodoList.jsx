import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <section className="main" style={{'display':this.props.todos.length > 0 ? 'block':'none' }}>
        <input
          id="toggleAll"
          className="toggle-all"
          type="checkbox"
          onChange={this.handleToggleAllTodo}
          checked={this.props.activeTodoCount === 0}
        />
        <label htmlFor="toggleAll"></label>
        <ul className="todo-list">
          {this.props.visibleTodos.map(todo =>
            <Todo 
              key={todo.id}
              todo={todo}
              todoBeingEdited={this.props.todoBeingEdited}
              onToggleTodo={() => this.props.onToggleTodo(todo.id)} 
              onStartEditTodo={() => this.props.onStartEditTodo(todo)} 
              onEndEditTodo={text => this.props.onEndEditTodo(todo.id,text)} 
              onCancelEditTodo={() => this.props.onCancelEditTodo()}
              onDestroyTodo={() => this.props.onDestroyTodo(todo.id)} />
          )}
        </ul>
      </section>
    )
  }

  handleToggleAllTodo = (event) => {
    let checked = event.target.checked;
		this.props.onToggleAllTodo(checked);
	}
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
	todoBeingEdited: PropTypes.object,  
	activeTodoCount: PropTypes.number.isRequired,  
  onToggleTodo: PropTypes.func.isRequired,
  onToggleAllTodo: PropTypes.func.isRequired,
	onStartEditTodo: PropTypes.func.isRequired,  
  onEndEditTodo: PropTypes.func.isRequired,
	onCancelEditTodo: PropTypes.func.isRequired,  
  onDestroyTodo: PropTypes.func.isRequired
}