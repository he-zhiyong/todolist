import {Component, OnInit} from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TodoService]
})
export class AppComponent implements OnInit {
  todos: Array<Todo>;
  visibilityFilter: string;
  todoBeingEdited: object;
  activeTodoCount: number;
  constructor(private todoService: TodoService) { }

  initTodos(): void {
    this.todoService.getTodos().then(todos => this.todos = todos);
    this.visibilityFilter = 'all';
    this.todoBeingEdited = null;
    this.activeTodoCount = 2
  }

  ngOnInit(): void {
    this.initTodos();
  }

  addTodo(e){
    console.log(e)
  }
}
