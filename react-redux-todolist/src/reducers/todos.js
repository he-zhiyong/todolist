import { ADD_TODO, TOGGLE_TODO, TOGGLEALL_TODO, ENDEDIT_TODO, DESTROY_TODO, CLEARCOMPLETED_TODO } from '../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => 
        todo.id === action.id ? {...todo,completed:!todo.completed} : todo
      );
    case TOGGLEALL_TODO:
      return state.map(todo =>{
        return {...todo,completed:action.checked}
      });
    case ENDEDIT_TODO: 
      return state.map(todo => 
        todo.id === action.id ? {...todo,text:action.text} : todo
      );
    case DESTROY_TODO:
      return state.filter(todo => 
        todo.id !== action.id
      );
    case CLEARCOMPLETED_TODO:
      return state.filter(todo => 
        todo.completed === false
      );
    default:
      return state;
  }
};

export default todos;
