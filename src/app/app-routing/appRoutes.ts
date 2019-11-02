import { Routes } from '@angular/router';
import { TodolistComponent } from './../todolist/todolist.component';
import { DetailComponent } from './../detail/detail.component';
import { HomeComponent } from './../home/home.component';
import { ContactComponent } from './../contact/contact.component';
import { HelpComponent } from './../help/help.component';
import { TermsComponent } from './../terms/terms.component';

export const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'todo',  component: TodolistComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'help', component: HelpComponent},
  { path: 'terms', component: TermsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];