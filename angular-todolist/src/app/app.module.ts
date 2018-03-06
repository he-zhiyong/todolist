import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { TodoService } from './todo.service';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './AddTodo/addtodo.component';
import { TodoComponent } from './Todo/todo.component';
import { TodoListComponent } from './TodoList/todolist.component';
import { FilterTodoComponent } from './FilterTodo/filtertodo.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoComponent,
    FilterTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
