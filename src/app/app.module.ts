import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { DetailComponent } from './detail/detail.component';
import { TodoService } from './services/todo.service';
import { FooterComponent } from './footer/footer.component';
import { TermsComponent } from './terms/terms.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDataService } from './services/in-memory-todo-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    HelpComponent,
    DetailComponent,
    FooterComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryTodoDataService, { dataEncapsulation: false }
     )
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
