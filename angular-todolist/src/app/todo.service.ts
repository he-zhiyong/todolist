import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable()
export class TodoService {

  getTodos(): Array<Todo> {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  saveTodos(todos:Array<Todo>){
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}
