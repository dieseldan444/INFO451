import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoModel } from './../shared/todo-model';
import { TodoService } from './../services/todo.service';

@Component({
  selector: 'app-todonew',
  templateUrl: './todonew.component.html',
  styleUrls: ['./todonew.component.css']
})
export class TodonewComponent implements OnInit {

  todo: TodoModel;
  drpStatus = ['Active', 'Pending', 'Skipped', 'Completed', 'In Progress'];

  constructor(private todoService: TodoService,
    private router: Router) { }

  ngOnInit() {
    this.todo=new TodoModel;
  }

  cancel(): void {
    this.router.navigateByUrl('todo');
  }

  onSubmit(): void {

    this.todoService.addTodo(this.todo)
        .subscribe(() => this.cancel());
  }
}