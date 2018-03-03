import 'todomvc-app-css/index.css';
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterTodo from './FilterTodo';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

@observer
export default class TodoApp extends Component {
	render() {
		const {todoStore, viewStore} = this.props;
		return (
			<div>
				<section className="todoapp">
					<header className="header">
						<h1>todolist</h1>
						<AddTodo todoStore={todoStore} />
					</header>
					<TodoList todoStore={todoStore} viewStore={viewStore} />
					<FilterTodo todoStore={todoStore} viewStore={viewStore} />
				</section>
				<footer className="info">
          <p>Double-click to edit a todo</p>
					<p>TodoList based on react and mobx,Debug with mobx-react-devtools</p>
          <p>Source: 
            <a href="https://github.com/he-zhiyong/todolist/tree/master/react-mobx-todolist"> GitHub </a>or
            <a href="https://gitee.com/he-zhiyong/todolist/tree/master/react-mobx-todolist"> Gitee</a>
          </p>
        </footer>
			</div>
		)
	}
}

TodoApp.propTypes = {
	viewStore: PropTypes.object.isRequired,
	todoStore: PropTypes.object.isRequired
}