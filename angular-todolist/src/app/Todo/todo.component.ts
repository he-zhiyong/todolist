import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Todo} from '../todo';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent{
  @Input() todo:Todo;
  @Input() todoBeingEdited:any;
  @Output() onToggleTodo = new EventEmitter();
  @Output() onStartEditTodo = new EventEmitter();
  @Output() onEndEditTodo = new EventEmitter();
  @Output() onDestroyTodo = new EventEmitter();

  handleToggleTodo(todo){
    this.onToggleTodo.emit(todo.id)
  }

  handleStartEditTodo(todo){
    this.onStartEditTodo.emit(todo)
  }

  handleEndEditTodo(todo,text){
    let newTodo = {
      text,
      ...todo
    }
    this.onEndEditTodo.emit(newTodo)
  }

  handleDestroyTodo(todo){
    this.onDestroyTodo.emit(todo.id)
  }

}
