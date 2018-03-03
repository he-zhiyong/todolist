/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLEALL_TODO = 'TOGGLEALL_TODO';
export const STARTEDIT_TODO = 'STARTEDIT_TODO';
export const ENDEDIT_TODO = 'ENDEDIT_TODO';
export const CANCELEDIT_TODO = 'CANCELEDIT_TODO';
export const DESTROY_TODO = 'DESTROY_TODO';
export const CLEARCOMPLETED_TODO = 'CLEARCOMPLETED_TODO';
export const SET_VISIBILITY_EDIT = 'SET_VISIBILITY_EDIT';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * 其它的常量
 */

export const ActiveTodoCount = 0;
export const completedTodoCount = 0;
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text,
    id: Date.now().toString()
  }
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
};

export const toggleAllTodo = checked => {
  return {
    type: TOGGLEALL_TODO,
    checked
  }
};

export const startEditTodo = todo => {
  return {
    type: STARTEDIT_TODO,
    todo
  }
};

export const endEditTodo = (id,text)=> {
  return {
    type: ENDEDIT_TODO,
    id,
    text
  }
};

export const cancelEditTodo = (todo)=> {
  return {
    type: CANCELEDIT_TODO,
    todo
  }
};

export const destroyTodo = id => {
  return {
    type: DESTROY_TODO,
    id
  }
};

export const clearCompletedTodo = () => {
  return {
    type: CLEARCOMPLETED_TODO
  }
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
};