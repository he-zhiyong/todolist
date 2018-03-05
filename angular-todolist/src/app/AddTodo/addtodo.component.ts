import { Component, OnInit, Output ,NgModule} from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'add-todo',
  templateUrl: './addtodo.component.html'
})
export class AddTodoComponent implements OnInit {
  @Output() private onAddTodo = new EventEmitter();
  newTodoText:string;
  constructor() { }

  ngOnInit() { }

  handleAddTodoKeyDown(){
    let newTodoText = this.newTodoText.trim()
    console.log(newTodoText)
    if(newTodoText){
      this.onAddTodo.emit( newTodoText)
      this.newTodoText = ''
    }
  }
}
