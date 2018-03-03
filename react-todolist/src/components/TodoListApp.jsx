import 'todomvc-app-css/index.css';
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterTodo from './FilterTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[],
      visibleTodos:[],
      visibilityFilter:'SHOW_ALL',
      todoBeingEdited:null,
      activeTodoCount:0,
      completedTodoCount:0
    };
  }
  
  componentWillMount(){
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.freshTodoList(todos);
    window.onbeforeunload = () => {
      let todos = this.state.todos;
      localStorage.setItem('todos', JSON.stringify(todos));
    };
  }

  render() {
    const { todos, visibleTodos, visibilityFilter, todoBeingEdited, activeTodoCount, completedTodoCount} = this.state;
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todolist</h1>
            <AddTodo
              onAddTodo={text =>
                this.addTodo(text)
            } />
          </header>
          <TodoList 
            todos={todos}
            visibleTodos={visibleTodos}
            todoBeingEdited={todoBeingEdited}
            activeTodoCount={activeTodoCount}
            onToggleTodo={id =>
              this.toggleTodo(id)
            }
            onToggleAllTodo={(checked) =>
              this.toggleAllTodo(checked)
            }
            onStartEditTodo={(todo) =>
              this.startEditTodo(todo)
            }
            onEndEditTodo={(id,text) =>
              this.endEditTodo(id,text)
            }
            onCancelEditTodo={() =>
              this.cancelEditTodo()
            }
            onDestroyTodo={id =>
              this.destroyTodo(id)
            } 
          />
          <FilterTodo 
            todoFilter={visibilityFilter}
            activeTodoCount={activeTodoCount}
            completedTodoCount={completedTodoCount}
            onFilterChange={filter =>
              this.setVisibilityFilter(filter)
            }
            onClearCompletedTodo={() => 
              this.clearCompletedTodo()
            } 
          />
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>TodoList based on react</p>
          <p>Source: 
            <a href="https://github.com/he-zhiyong/todolist/tree/master/react-todolist"> GitHub </a>or
            <a href="https://gitee.com/he-zhiyong/todolist/tree/master/react-todolist"> Gitee </a>
          </p>
        </footer>
      </div>
    )
  }

  freshTodoList(todos){
    let activeTodoCount = this.getActiveTodoCount(todos);
    let completedTodoCount = this.getCompletedTodoCount(todos,activeTodoCount);
    let visibleTodos = this.getVisibleTodos(todos,this.state.visibilityFilter);
    this.setState({
      todos,
      visibleTodos,
      activeTodoCount,
      completedTodoCount
    });
  }

  addTodo(text){
    let todos = this.state.todos;
    todos.push({
      text,
      id:Date.now().toString(),
      completed:false
    });
    this.freshTodoList(todos);
  }

  toggleTodo(id){
    let todos = this.state.todos;
    todos.forEach(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed; 
      }
    })
    this.freshTodoList(todos);
  }

  toggleAllTodo(checked){
    let todos = this.state.todos;
    todos.forEach(
      todo => todo.completed = checked 
    )
    this.freshTodoList(todos);
  }

  startEditTodo(todo){
    this.setState({
			todoBeingEdited:todo
		});
  }

  endEditTodo(id,text){
    let todos = this.state.todos;
    todos.forEach(todo => {
      if(todo.id === id){
        todo.text = text; 
      }
    })
    this.freshTodoList(todos);
    this.setState({
			todoBeingEdited:null
		});
  }

  cancelEditTodo(){
    this.setState({
			todoBeingEdited:null
		});
  }
  
  destroyTodo(id){
    let todos = this.state.todos.filter(
			todo => todo.id !== id
    )  
    this.freshTodoList(todos);
  }
  
  setVisibilityFilter(filterName){
    let todos = this.state.todos;
    this.setState({
      visibleTodos:this.getVisibleTodos(todos,filterName),
      visibilityFilter:filterName
    });
  }

  clearCompletedTodo(){
    let todos = this.state.todos.filter(
			todo => todo.completed === false
    )  
    this.freshTodoList(todos);
  }
  
  getVisibleTodos(todos,filterName){
    switch (filterName) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }

  getActiveTodoCount(todos) {
		return todos.reduce(
			(sum, todo) => sum + (todo.completed ? 0 : 1),
			0
		)
  }
  
  getCompletedTodoCount(todos,activeTodoCount) {
		return todos.length - activeTodoCount;
  }
}

export default App;