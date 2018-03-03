import { combineReducers } from 'redux';
import todos from './todos';
import todoBeingEdited from './todoBeingEdited';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos,
  todoBeingEdited,
  visibilityFilter
});

export default todoApp;