import 'todomvc-app-css/index.css';
import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import FilterTodo from '../components/FilterTodo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, toggleAllTodo,startEditTodo, endEditTodo, cancelEditTodo, destroyTodo, clearCompletedTodo,setVisibilityFilter, VisibilityFilters } from '../actions';

class TodoListApp extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, todos, visibleTodos, visibilityFilter, todoBeingEdited, activeTodoCount, completedTodoCount} = this.props;
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todolist</h1>
            <AddTodo
              onAddTodo={text =>
                dispatch(addTodo(text))
            } />
          </header>
          <TodoList
            todos={todos}
            visibleTodos={visibleTodos}
            todoBeingEdited={todoBeingEdited}
            activeTodoCount={activeTodoCount}
            onToggleTodo={id =>
              dispatch(toggleTodo(id))
            }
            onToggleAllTodo={checked =>
              dispatch(toggleAllTodo(checked))
            }
            onStartEditTodo={(todo) =>
              dispatch(startEditTodo(todo))
            }
            onEndEditTodo={(id,text) =>
              dispatch(endEditTodo(id,text))
            }
            onCancelEditTodo={() =>
              dispatch(cancelEditTodo())
            }
            onDestroyTodo={id =>
              dispatch(destroyTodo(id))
            } 
          />
          <FilterTodo
            todoFilter={visibilityFilter}
            activeTodoCount={activeTodoCount}
            completedTodoCount={completedTodoCount}
            onFilterChange={filter =>
              dispatch(setVisibilityFilter(filter))
            } 
            onClearCompletedTodo={() => 
              dispatch(clearCompletedTodo())
            } 
          />
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>TodoList based on react and redux,Debug with redux-devtools</p>
          <p>Source: 
            <a href="https://github.com/he-zhiyong/todolist/tree/master/react-redux-todolist"> GitHub </a>or
            <a href="https://gitee.com/he-zhiyong/todolist/tree/master/react-redux-todolist"> Gitee</a>
          </p>
        </footer>
      </div>
    )
  }
};

TodoListApp.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired,
  todoBeingEdited: PropTypes.object,
  activeTodoCount: PropTypes.number.isRequired,
  completedTodoCount: PropTypes.number.isRequired
}

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

function getActiveTodoCount(todos) {
  return todos.reduce(
    (sum, todo) => sum + (todo.completed ? 0 : 1),
    0
  )
}

function getCompletedTodoCount(todos,activeTodoCount) {
  return todos.length - activeTodoCount;
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    todos:state.todos,
    visibleTodos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    todoBeingEdited: state.todoBeingEdited,
    activeTodoCount:getActiveTodoCount(state.todos),
    completedTodoCount:getCompletedTodoCount(state.todos,getActiveTodoCount(state.todos))
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(TodoListApp) 中；
export default connect(select)(TodoListApp);