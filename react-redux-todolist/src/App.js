import React, { Component } from 'react';
import TodoListApp from './containers/TodoListApp';
import { createStore , compose } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import DevTools from './containers/DevTools';

const enhancer = compose(
  DevTools.instrument()
);
const loadState = () => {
  let todos = JSON.parse(localStorage.getItem('todos'));
  return {
    todos
  };
}
const store = createStore(todoApp, loadState(), enhancer);
const saveState = (state) => {
  const todos = JSON.stringify(state.todos);
  localStorage.setItem('todos', todos);
};
window.onbeforeunload = () => {
  const state = store.getState();
  saveState(state);
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoListApp />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

export default App;
