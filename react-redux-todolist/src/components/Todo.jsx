import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export default class Todo extends Component {
	constructor(props) {
    super(props);
    this.state = {
			editText:''
    };
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.todoBeingEdited && this.props.todoBeingEdited) {
			var node = ReactDOM.findDOMNode(this.refs.editField);
			node.focus();
			node.setSelectionRange(node.value.length, node.value.length);
		}
	}
	
  render() {
    const { todo, todoBeingEdited } = this.props;
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
						onChange={this.props.onToggleTodo}
					/>
					<label onDoubleClick={this.handleEditTodo}>
						{todo.text}
					</label>
					<button className="destroy" onClick={this.props.onDestroyTodo} />
				</div>
				<input
					ref="editField"
					className="edit"
					value={this.state.editText}
					onChange={this.handleChange}
					onBlur={this.handleSubmit}
					onKeyDown={this.handleKeyDown}
				/>
			</li>
    )
	}

	handleEditTodo = () => {
		let todo = this.props.todo;
		this.setState({
			editText:todo.text
		});
		this.props.onStartEditTodo();
	}

	handleChange = event => {
		this.setState({
			editText:event.target.value
		});
	}

	handleSubmit = event => {
		let text = this.state.editText.trim();
		if (text) {
			this.props.onEndEditTodo(text);
		} else {
			this.props.onDestroyTodo();
		}
	}

	handleKeyDown = event => {
		if (event.which === ESCAPE_KEY) {
			let todo = this.props.todo;
			this.setState({
				editText:todo.text
			});
			this.props.onCancelEditTodo();
		} else if (event.which === ENTER_KEY) {
			this.handleSubmit(event);
		}
	}
}

Todo.propTypes = {
	todo: PropTypes.object.isRequired,
	todoBeingEdited: PropTypes.object,
	onToggleTodo: PropTypes.func.isRequired,
	onStartEditTodo: PropTypes.func.isRequired,
	onEndEditTodo: PropTypes.func.isRequired,
	onCancelEditTodo: PropTypes.func.isRequired,
  onDestroyTodo: PropTypes.func.isRequired
}