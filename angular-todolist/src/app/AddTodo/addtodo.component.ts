import { Component, OnInit, Output , NgModule, EventEmitter} from '@angular/core';

const ENTER_KEY = 13;

@Component({
  selector: 'add-todo',
  templateUrl: './addtodo.component.html'
})
export class AddTodoComponent{
  @Output() onAddTodo = new EventEmitter();
  private newTodoText:string;

  handleAddTodoKeyDown(value){
    let newTodoText = value.trim();
    if(newTodoText){
      this.onAddTodo.emit(newTodoText);
      this.newTodoText = '';
    }
  }
}
