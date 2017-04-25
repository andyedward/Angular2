import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TodoComponent} from './todo.component';
import { TodoDetailComponent} from './todo-detail.component';

import { TodoService } from './todo.service'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'todo',
        component: TodoComponent
      },
      {
        path: 'detail/:id',
        component: TodoDetailComponent
      }
    ])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
