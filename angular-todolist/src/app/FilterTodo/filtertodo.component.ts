import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter-todo',
  templateUrl: './filtertodo.component.html'
})
export class FilterTodoComponent {
  @Input() visibilityFilter: string;
  @Input() activeTodoCount: number;
  @Input() completedTodoCount: number;
  @Output() onFilterChange = new EventEmitter();
  @Output() onClearCompletedTodo = new EventEmitter();

  handleFilterChange(filterName): void {
    this.onFilterChange.emit(filterName);
  }

  handleClearCompletedTodo(): void {
    this.onClearCompletedTodo.emit();
  }
}
