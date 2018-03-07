import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

import {Todo} from '../todo';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnChanges{
  @Input() todo:Todo;
  @Input() todoBeingEdited:any;
  @Output() onToggleTodo = new EventEmitter();
  @Output() onStartEditTodo = new EventEmitter();
  @Output() onEndEditTodo = new EventEmitter();
  @Output() onDestroyTodo = new EventEmitter();
  private editText:string;

  ngOnChanges(prevProps){
    if (!prevProps.todoBeingEdited.previousValue && this.todoBeingEdited) {
      
			//var node = ReactDOM.findDOMNode(this.refs.editField);
			//node.focus();
			//node.setSelectionRange(node.value.length, node.value.length);
		}
  }

  handleToggleTodo(todo){
    this.onToggleTodo.emit(todo.id)
  }

  handleStartEditTodo(todo){
    this.editText = todo.text;
    this.onStartEditTodo.emit(todo)
  }

  handleEndEditTodo(todo){
    if (!this.todoBeingEdited) {
      return
    }
    let text = this.editText.trim();
    if(text){
      todo.text = text;
      this.onEndEditTodo.emit(todo);
    }else{
      this.onDestroyTodo.emit(todo.id);
    }
  }

  handleCancelEditTodo(todo){
    this.onEndEditTodo.emit(todo);
  }

  handleDestroyTodo(todo){
    this.onDestroyTodo.emit(todo.id)
  }

}
