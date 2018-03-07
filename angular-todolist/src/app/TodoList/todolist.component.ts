import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todolist.component.html'
})
export class TodoListComponent {
  @Input() todos: Array<Todo>;
  @Input() visibleTodos: Array<Todo>;
  @Input() activeTodoCount: number;
  @Input() todoBeingEdited: any;
  @Output() onToggleTodo = new EventEmitter();
  @Output() onToggleAllTodo = new EventEmitter();
  @Output() onStartEditTodo = new EventEmitter();
  @Output() onEndEditTodo = new EventEmitter();
  @Output() onDestroyTodo = new EventEmitter();

  handleToggleTodo(id): void {
    this.onToggleTodo.emit(id);
  }

  handleToggleAllTodo(checked): void {
    this.onToggleAllTodo.emit(checked);
  }

  handleStartEditTodo(todo): void {
    this.onStartEditTodo.emit(todo);
  }

  handleEndEditTodo(todo): void {
    this.onEndEditTodo.emit(todo);
  }

  handleDestroyTodo(id): void {
    this.onDestroyTodo.emit(id);
  }
}
