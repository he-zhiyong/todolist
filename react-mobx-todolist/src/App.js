import React, { Component } from 'react';
import TodoListApp from './components/TodoListApp';
import DevTool from "mobx-react-devtools";
import TodoStore from './stores/TodoStore';
import ViewStore from './stores/ViewStore';

const todos = JSON.parse(localStorage.getItem('todos')) || [];
const todoStore = TodoStore.fromJS(todos);
const viewStore = new ViewStore();
//todoStore.saveStoreToLocalstorage(todoStore.todos);
todoStore.subscribeLocalstorageToStore();

class App extends Component {
  render() {
    return (
      <div>
        <DevTool />
        <TodoListApp todoStore={todoStore} viewStore={viewStore} />
      </div>
    )
  }
}

export default App;
