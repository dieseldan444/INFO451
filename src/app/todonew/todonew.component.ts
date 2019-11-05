import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TodoModel } from './../shared/todo-model';
import { TodoService } from './../services/todo.service';


@Component({
  selector: 'app-todonew',
  templateUrl: './todonew.component.html',
  styleUrls: ['./todonew.component.css']
})
export class TodonewComponent implements OnInit {
  
  todo: TodoModel;
  drpStatus = ['New', 'Pending', 'Cancelled', 'Completed', 'In Progress'];

  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router)
    { }

  ngOnInit() {
       this.todo=new TodoModel()
  }

    cancel(): void {
      this.router.navigateByUrl('todo');
    }
  
    onSubmit(){
      console.log(this.todo);
    }  
  }