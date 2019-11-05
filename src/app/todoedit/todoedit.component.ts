import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TodoModel } from './../shared/todo-model';
import { TodoService } from './../services/todo.service';


@Component({
  selector: 'app-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.css']
})
export class TodoeditComponent implements OnInit {

  todo: TodoModel;
  drpStatus = ['New', 'Pending', 'Cancelled', 'Completed', 'In Progress'];

  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router)
    { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.todoService.getTodo(id)
        .subscribe(data => this.todo = data); // this.todoService.getTodo from last classwork
  }
  cancel(): void {
    this.router.navigateByUrl('todo');
  }

  onSubmit(){
    console.log(this.todo);
  }
}