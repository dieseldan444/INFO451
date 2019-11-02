import { Component, OnInit, Input } from '@angular/core';
import { TodoModel } from 'src/app/shared/todo-model';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodoService } from './../services/todo.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

   todo: TodoModel;
   todos: TodoModel[];
   ids = new Array();
   prevId: any;
   nextId: any;
   disableButton: boolean;

   constructor(private todoService: TodoService,
               private route: ActivatedRoute,
               private location: Location
           ) { }
 
   ngOnInit() {
     const id = this.route.snapshot.params['id'];
     console.log('id-');
     console.log(id);
     this.getTodo(id);
     
     // this.todo = this.todoService.returnTodo(id);

     this.todoService.getTodos()
        .subscribe(data => this.todos = data);

    this.route.params.pipe(
          switchMap((params: Params) => this.todoService.getTodo(+params['id'])))
         .subscribe(data => { 
                  this.todo = data; 
                  this.setPrevNext(this.todo.id); 
                            }
                  );
              }

   setPrevNext(id: number) {
    this.ids = new Array();
    let index = -1;

     this.todos.forEach(data => {
        this.ids.push(data.id); // Add id to the array of ids
        if (id === data.id) { // find the index
          index = this.ids.length - 1;
        }
     });

     this.prevId = this.ids[index - 1];
     if (this.prevId === undefined) { // passed the first item
      this.prevId = this.ids[this.ids.length - 1]; // set to the last item
     }

     this.nextId = this.ids[index + 1];
     if (this.nextId === undefined) { // passed the last item
      this.nextId = this.ids[0]; // set to the first item
     }

     this.disableButton = (this.todos.length === 1);
   }
 
   goBack(): void {
     this.location.back();
   }

   getTodo(id): void {
     this.todoService.getTodo(id)
     .subscribe(data => this.todo = data);
   }
}