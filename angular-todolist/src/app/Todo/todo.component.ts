import {Component, OnInit, Input} from '@angular/core';

import {Todo} from '../todo';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  @Input() todo:Todo;
  @Input() todoBeingEdited:any;
  constructor() { }

  ngOnInit() {
    //console.log(this.todoBeingEdited)
  }
}
