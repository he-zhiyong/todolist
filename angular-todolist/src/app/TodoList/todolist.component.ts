import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html'
})
export class TodoListComponent{
  @Input() todos:Array<Todo>;
  @Input() visibleTodos:Array<Todo>;
  @Input() todoBeingEdited:any;
  @Output() onDestroyTodo = new EventEmitter();

  handleDestroyTodo(id){
    this.onDestroyTodo.emit(id)
  }
}
