import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Todo} from '../todo';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent{
  @Input() todo:Todo;
  @Input() todoBeingEdited:any;
  @Output() onDestroyTodo = new EventEmitter();

  handleToggleTodo(){
    console.log(1)
  }
  handleDestroyTodo(todo){
    this.onDestroyTodo.emit(todo.id)
  }

}
