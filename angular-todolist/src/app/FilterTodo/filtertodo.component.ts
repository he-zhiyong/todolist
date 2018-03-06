import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'filter-todo',
  templateUrl: './filtertodo.component.html'
})
export class FilterTodoComponent{
  @Input() visibilityFilter: string;
  @Input() activeTodoCount: number;
  @Input() completedTodoCount: number;
  @Output() onFilterChange = new EventEmitter();
  constructor() { }

  handleFilterChange(filterName){
    this.onFilterChange.emit(filterName);
  }
}
