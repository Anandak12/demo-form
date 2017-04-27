import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    HttpModule,
    RouterModule.forRoot([
      {
      path:'complaints',
      component:ComplaintsListComponent
     }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
