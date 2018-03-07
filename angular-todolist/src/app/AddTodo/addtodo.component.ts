import { Component, OnInit, Output , NgModule, EventEmitter} from '@angular/core';

const ENTER_KEY = 13;

@Component({
  selector: 'app-add-todo',
  templateUrl: './addtodo.component.html'
})
export class AddTodoComponent {
  @Output() onAddTodo = new EventEmitter();
  public newTodoText: string;

  handleAddTodoKeyDown(): void {
    const newTodoText = this.newTodoText.trim();
    if (newTodoText) {
      this.onAddTodo.emit(newTodoText);
      this.newTodoText = '';
    }
  }
}
