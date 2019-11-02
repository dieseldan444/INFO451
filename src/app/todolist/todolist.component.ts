import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/shared/todo-model';
import { ToDoItems } from 'src/app/shared/todoitems';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  
  public todos: TodoModel[];
  public selectedTodo: TodoModel;

  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    //this.todos = this.todoService.returnToDos();
    this.getTodos();
  }

  deleteTodo (todo: TodoModel){
    this.todos = this.todos.filter(data => data !== todo);

     this.todoService
          .deleteTodo(todo.id)
          .subscribe();
  }

  getTodos(): void {
    this.todoService.getTodos()
    .subscribe(data => this.todos = data);
  }
}