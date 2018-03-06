import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html'
})
export class TodoListComponent implements OnInit {
  @Input() todos:Array<Todo>;
  @Input() visibilityFilter:string;
  @Input() todoBeingEdited:any;
  private visibleTodos:any;
  constructor() { }

  ngOnInit() {
    this.visibleTodos = () => {
      switch(this.visibilityFilter){
        case 'all':
          return this.todos
        case 'active':
          return this.todos.filter(todo => !todo.completed)
        case 'completed':
          return this.todos.filter(todo => todo.completed)
        default:
          return this.todos
      }
    }
  }
}
