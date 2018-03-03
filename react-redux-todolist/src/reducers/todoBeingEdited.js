import { STARTEDIT_TODO, CANCELEDIT_TODO } from '../actions';

const todoBeingEdited = (state = null, action) => {
  switch (action.type) {
    case STARTEDIT_TODO:
      return action.todo;
    case CANCELEDIT_TODO:
      return null;
    default:
      return null;
  }
};

export default todoBeingEdited;