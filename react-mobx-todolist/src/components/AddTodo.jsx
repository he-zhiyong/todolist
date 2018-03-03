import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const ENTER_KEY = 13;

@observer
export default class AddTodo extends Component {
  render() {
    return (
      <input
        ref="newTodo"
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={this.handleAddTodoKeyDown}
        autoFocus={true}
		  />
    )
  }

  handleAddTodoKeyDown = event => {
    if (event.keyCode !== ENTER_KEY) {
			return;
		}
    event.preventDefault();
    let newTodo = this.refs.newTodo;
    let newTodoText = newTodo.value.trim();
    if(newTodoText){
      this.props.todoStore.addTodo(newTodoText);
      newTodo.value = '';
    }
  }
}

AddTodo.propTypes = {
	todoStore: PropTypes.object.isRequired
}
