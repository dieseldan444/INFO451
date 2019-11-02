import { Injectable } from '@angular/core';
import { TodoModel } from 'src/app/shared/todo-model';
import { ToDoItems } from 'src/app/shared/todoitems';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoUrl = 'api/TodoItems';  // URL to web api

  constructor(private http: HttpClient) { }

  returnToDos(): TodoModel[] {
  return ToDoItems;
  }
  
  returnTodo(id: string): TodoModel {
    return ToDoItems.filter(todo => todo.id === id)[0];
  }

  /** GET TodoItems from the mock web server */
getTodos (): Observable<TodoModel[]> {
  return this.http.get<TodoModel[]>(this.todoUrl);
}

getTodo (id: number): Observable<TodoModel> {
  const url = `${this.todoUrl}/${id}`;
  return this.http.get<TodoModel>(url);
}

deleteTodo (id: number): Observable<TodoModel> {
  const url = `${this.todoUrl}/${id}`;
  return this.http.delete<TodoModel>(url, httpOptions);
  }
}