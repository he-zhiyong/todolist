import {Component, OnInit} from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TodoService]
})
export class AppComponent implements OnInit {
  todos: Array<Todo>;
  visibleTodos: Array<Todo>;
  visibilityFilter: string;
  todoBeingEdited: object;
  activeTodoCount: number;
  completedTodoCount: number;
  constructor(private todoService: TodoService) { }

  getVisibleTodos(): Array<Todo>{
    switch(this.visibilityFilter){
      case 'all':
        return this.todos
      case 'active':
        return this.todos.filter(todo => !todo.completed)
      case 'completed':
        return this.todos.filter(todo => todo.completed)
      default:
        return this.todos
    }
  }

  getActiveTodoCount():number {
    return this.todos.reduce(
      (sum, todo) => sum + (todo.completed ? 0 : 1),
      0
    )
  }

  getCompletedTodoCount():number {
    return this.todos.length - this.activeTodoCount
  }

  freshTodoList():void{
    this.visibleTodos = this.getVisibleTodos();
    this.activeTodoCount = this.getActiveTodoCount();
    this.completedTodoCount = this.getCompletedTodoCount();
  }


  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.visibilityFilter = 'all';
    this.todoBeingEdited = null;
    this.freshTodoList();
    window.onbeforeunload = () => {
      this.todoService.saveTodos(this.todos)
    }
  }


  addTodo(text: string): void{
    this.todos.push({
      text,
      id:Date.now().toString(),
      completed:false
    })
    this.freshTodoList();
  }

  toggleTodo(id){
    this.todos.forEach(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
    })
    this.freshTodoList();
  }

  toggleAllTodo(checked){
    this.todos.forEach(
      todo => todo.completed = checked
    )
    this.freshTodoList();
  }

  startEditTodo(todo){
    this.todoBeingEdited = todo;
  }

  endEditTodo(newTodo){
    this.todos.forEach(todo => {
      if(todo.id === newTodo.id){
        todo.text = newTodo.text;
      }
    })
    this.todoBeingEdited = null;
    this.freshTodoList();
  }

  destroyTodo(id){
    this.todos = this.todos.filter(
      todo => todo.id !== id
    )
    this.freshTodoList();
  }

  clearCompletedTodo(){
    this.todos = this.todos.filter(
      todo => todo.completed === false
    )
    this.freshTodoList();
  }

  setVisibilityFilter(filterName){
    this.visibilityFilter = filterName;
    this.visibleTodos = this.getVisibleTodos();
  }

}
