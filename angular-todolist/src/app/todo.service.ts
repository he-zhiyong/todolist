import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable()
export class TodoService {
  getTodos(): Promise<Todo[]> {
    return Promise.resolve(JSON.parse(localStorage.getItem('todos')) || []);
  }
  
}
