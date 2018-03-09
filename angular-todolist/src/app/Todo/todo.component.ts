import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, ViewChild } from '@angular/core';

import {Todo} from '../todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
  })
export class TodoComponent implements OnChanges {
  @Input() todo: Todo;
  @Input() todoBeingEdited: any;
  @Output() onToggleTodo = new EventEmitter();
  @Output() onStartEditTodo = new EventEmitter();
  @Output() onEndEditTodo = new EventEmitter();
  @Output() onDestroyTodo = new EventEmitter();
  @ViewChild('editField') editField: ElementRef;
  public editText: string;

  ngOnChanges(props) {
    if (props.todoBeingEdited.currentValue && !props.todoBeingEdited.previousValue) {
      const editField = this.editField.nativeElement;
      if (editField.setSelectionRange) {
        console.log(editField);
        editField.setSelectionRange(this.editText.length, this.editText.length);
        editField.focus();
      } else if (editField.createTextRange) {
        const rng = editField.createTextRange();
        rng.move('character', this.editText.length);
        rng.select();
      }
    }
  }

  handleToggleTodo(todo): void {
    this.onToggleTodo.emit(todo.id);
  }

  handleStartEditTodo(todo): void {
    this.editText = todo.text;
    this.onStartEditTodo.emit(todo);
  }

  handleEndEditTodo(todo): void {
    if (!this.todoBeingEdited) {
      return;
    }
    const text: string = this.editText.trim();
    if (text) {
      todo.text = text;
      this.onEndEditTodo.emit(todo);
    } else {
      this.onDestroyTodo.emit(todo.id);
    }
  }

  handleCancelEditTodo(todo): void {
    this.onEndEditTodo.emit(todo);
  }

  handleDestroyTodo(todo): void {
    this.onDestroyTodo.emit(todo.id);
  }

}
