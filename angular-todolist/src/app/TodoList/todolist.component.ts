import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html'
})
export class TodoListComponent{
  @Input() todos:Array<Todo>;
  @Input() visibleTodos:Array<Todo>;
  @Input() activeTodoCount:number;
  @Input() todoBeingEdited:any;
  @Output() onToggleTodo = new EventEmitter();
  @Output() onToggleAllTodo = new EventEmitter();
  @Output() onStartEditTodo = new EventEmitter();
  @Output() onEndEditTodo = new EventEmitter();
  @Output() onDestroyTodo = new EventEmitter();

  handleToggleTodo(id){
    this.onToggleTodo.emit(id)
  }

  handleToggleAllTodo(checked){
    this.onToggleAllTodo.emit(checked)
  }

  handleStartEditTodo(todo){
    this.onStartEditTodo.emit(todo)
  }

  handleEndEditTodo(todo){
    this.onEndEditTodo.emit(todo)
  }

  handleDestroyTodo(id){
    this.onDestroyTodo.emit(id)
  }
}
