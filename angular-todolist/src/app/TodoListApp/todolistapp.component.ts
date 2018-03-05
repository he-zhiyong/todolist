import {Component, OnInit} from '@angular/core';

import { Todo } from '../Todo/todo';

@Component({
  selector: 'todo-list-app',
  templateUrl: './todolistapp.component.html'
})
export class TodoListAppComponent implements OnInit {
  todos: Array<Todo>;
  visibilityFilter: string;
  todoBeingEdited: object;
  activeTodoCount: number;
  constructor() { }

  ngOnInit() {
    this.todos =  JSON.parse(localStorage.getItem('todos')) || [];
    this.visibilityFilter = 'all';
    this.todoBeingEdited = null;
    this.activeTodoCount = 2
  }

  addTodo(e){
    console.log(e)
  }
}
