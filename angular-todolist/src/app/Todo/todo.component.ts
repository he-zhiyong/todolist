import { Component, Input, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';

import {Todo} from '../todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
  })
export class TodoComponent {
  @Input() todo: Todo;
  @Input() todoBeingEdited: any;
  @Output() onToggleTodo = new EventEmitter();
  @Output() onStartEditTodo = new EventEmitter();
  @Output() onEndEditTodo = new EventEmitter();
  @Output() onDestroyTodo = new EventEmitter();
  public editText: string;
  private editField: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer) {
    this.editField = el.nativeElement.children;
  }

  handleToggleTodo(todo): void {
    this.onToggleTodo.emit(todo.id);
  }

  handleStartEditTodo(todo): void {
    this.editText = todo.text;
    this.onStartEditTodo.emit(todo);
    this.editField[1].focus();
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
