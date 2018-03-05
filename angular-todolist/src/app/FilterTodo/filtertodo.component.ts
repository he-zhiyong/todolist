import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'filter-todo',
  templateUrl: './filtertodo.component.html'
})
export class FilterTodoComponent implements OnInit {
  @Input() visibilityFilter:string;
  @Input() activeTodoCount:number;
  constructor() { }

  ngOnInit() { }
}
