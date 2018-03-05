import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListAppComponent } from './TodoListApp/todolistapp.component';
import { AddTodoComponent } from './AddTodo/addtodo.component';
import { TodoComponent } from './Todo/todo.component';
import { TodoListComponent } from './TodoList/todolist.component';
import { FilterTodoComponent } from './FilterTodo/filtertodo.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListAppComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoComponent,
    FilterTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
