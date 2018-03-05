import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  @Input() todo:any;
  constructor() { }

  ngOnInit() {

  }
}
