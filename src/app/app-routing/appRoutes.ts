import { Routes } from '@angular/router';
import { TodolistComponent } from './../todolist/todolist.component';
import { DetailComponent } from './../detail/detail.component';
import { HomeComponent } from './../home/home.component';
import { ContactComponent } from './../contact/contact.component';
import { HelpComponent } from './../help/help.component';
import { TermsComponent } from './../terms/terms.component';
import { TodoeditComponent } from './../todoedit/todoedit.component';
import { TodonewComponent } from './../todonew/todonew.component';

export const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'todo',  component: TodolistComponent },
  { path: 'detail/:id',  component: DetailComponent },
  { path: 'contact',  component: ContactComponent},
  { path: 'help',  component: HelpComponent},
  { path: 'terms',  component: TermsComponent},
  { path: 'todoedit/:id',  component: TodoeditComponent},
  { path: 'todonew',  component: TodonewComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];