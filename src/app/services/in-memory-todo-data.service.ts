import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TodoModel } from './../shared/todo-model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryTodoDataService implements InMemoryDbService {
  createDb() {
    const TodoItems: TodoModel[] = [
      {
        id: '1',
        Name: 'Homework 1',
        Description: 'HTML Homework',
        Category: 'Homework',
        DueDate: 'January 1, 2019',
        Status: 'Complete',
        imgSrc: 'assets/homework.jpg',
      },
      {
        id: '2',
        Name: 'Quiz 1',
        Description: 'HTML Quiz',
        Category: 'Quiz',
        DueDate: 'January 1, 2019',
        Status: 'Complete',
        imgSrc: 'assets/quiz.jpg',
      },
      {
        id: '3',
        Name: 'Homework 2',
        Description: 'JS Homework',
        Category: 'Homework',
        DueDate: 'January 10, 2019',
        Status: 'Complete',
        imgSrc: 'assets/homework.jpg',
      },
      {
        id: '4',
        Name: 'Quiz 2',
        Description: 'JS Quiz',
        Category: 'Quiz',
        DueDate: 'Jan 10, 2019',
        Status: 'Complete',
        imgSrc: 'assets/quiz.jpg',
      },
      {
        id: '5',
        Name: 'Homework 3',
        Description: 'Type Script Homework',
        Category: 'Homework',
        DueDate: 'January 20, 2019',
        Status: 'In Progress',
        imgSrc: 'assets/homework.jpg',
      },
      {
        id: '6',
        Name: 'Quiz 3',
        Description: 'Type Script Quiz',
        Category: 'Quiz',
        DueDate: 'January 20, 2019',
        Status: 'In Progress',
        imgSrc: 'assets/quiz.jpg',
      },
      {
        id: '7',
        Name: 'Homework 4',
        Description: 'Angular Bootstrap Homework',
        Category: 'Homework',
        DueDate: 'February 1, 2019',
        Status: 'Pending',
        imgSrc: 'assets/homework.jpg',
      },
      {
        id: '8',
        Name: 'Quiz 4',
        Description: 'Angular Bootstrap Quiz',
        Category: 'Quiz',
        DueDate: 'February 1, 2019',
        Status: 'Pending',
        imgSrc: 'assets/quiz.jpg',
      },
      {
        id: '9',
        Name: 'Midterm',
        Description: 'Midterm',
        Category: 'Exam',
        DueDate: 'March 10, 2019',
        Status: 'Pending',
      },
      {
        id: '10',
        Name: 'Homework 5',
        Description: 'XML Homework',
        Category: 'Homework',
        DueDate: 'March 20, 2019',
        Status: 'Pending',
        imgSrc: 'assets/homework.jpg',
      },
      {
        id: '11',
        Name: 'Quiz 5',
        Description: 'XML Quiz',
        Category: 'Quiz',
        DueDate: 'March 20, 2019',
        Status: 'Pending',
        imgSrc: 'assets/quiz.jpg',
      },
      {
        id: '12',
        Name: 'Homework 6',
        Description: 'Angular Pipes Homework',
        Category: 'Homework',
        DueDate: 'April 1, 2019',
        Status: 'Pending',
        imgSrc: 'assets/homework.jpg',
      },
      {
        id: '13',
        Name: 'Quiz 6',
        Description: 'Angular Pipes Quiz',
        Category: 'Quiz',
        DueDate: 'April 1, 2019',
        Status: 'Pending',
        imgSrc: 'assets/quiz.jpg',
      },
      {
        id: '14',
        Name: 'Project',
        Description: 'Final Project',
        Category: 'Project',
        DueDate: 'April 25, 2019',
        Status: 'In Progress',
        imgSrc: 'assets/project.jpg',
      },
      {
        id: '15',
        Name: 'Final Exam',
        Description: 'Cumulative Final Exam',
        Category: 'Exam',
        DueDate: 'May 10, 2019',
        Status: 'Pending',
      }
    ];

    return {TodoItems};
}
  // Overrides the genId method to ensure that a TodoModel always has an id.
  // If the TodoModel array is empty,
  // the method below returns the initial number (1).
  // if the TodoModel array is not empty, the method below returns the highest
  // TodoModel id + 1.
  genId(todos: TodoModel[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }
}