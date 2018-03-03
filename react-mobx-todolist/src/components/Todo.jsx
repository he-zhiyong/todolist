import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { observable, expr } from 'mobx';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

@observer
export default class Todo extends Component {
	@observable editText = "";
	@observable todoEditing = false;

	componentDidUpdate(prevProps) {
		if (!this.todoEditing && this.props.viewStore.todoBeingEdited) {
			let node = ReactDOM.findDOMNode(this.refs.editField);
			this.todoEditing = true;
			node.focus();
			node.setSelectionRange(node.value.length, node.value.length);
		}
	}
	
	render() {
		const { todo, viewStore } = this.props;
		return (
			<li className={[
				todo.completed ? "completed" : "",
				expr(() => todo === viewStore.todoBeingEdited ? "editing" : "")
			].join(" ")}>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={todo.completed}
						onChange={this.handleToggle}
					/>
					<label onDoubleClick={this.handleEditTodo}>
						{todo.text}
					</label>
					<button className="destroy" onClick={this.handleDestroy} />
				</div>
				<input
					ref="editField"
					className="edit"
					value={this.editText}
					onChange={this.handleChange}
					onBlur={this.handleSubmit}
					onKeyDown={this.handleKeyDown}
				/>
			</li>
		)
	}

	handleEditTodo = () => {
		let todo = this.props.todo;
		this.props.viewStore.todoBeingEdited = todo;
		this.editText = todo.text;
	}
	
	handleChange = event => {
		this.editText = event.target.value;
	}
	
	handleSubmit = event => {
		let text = this.editText.trim();
		if (text) {
			this.props.todo.settext(text);
			this.editText = text;
		} else {
			this.handleDestroy();
		}
		this.props.viewStore.todoBeingEdited = null;
		this.todoEditing = false;
	}

	handleKeyDown = event => {
		if (event.which === ESCAPE_KEY) {
			this.editText = this.props.todo.text;
			this.props.viewStore.todoBeingEdited = null;
			this.todoEditing = false;			
		} else if (event.which === ENTER_KEY) {
			this.handleSubmit(event);
		}
	}

	handleToggle = () => {
		this.props.todo.toggle();
	}

	handleDestroy = () => {
		this.props.todo.destroy();
		this.props.viewStore.todoBeingEdited = null;
	}
}

Todo.propTypes = {
	todo: PropTypes.object.isRequired,
	viewStore: PropTypes.object.isRequired
}
