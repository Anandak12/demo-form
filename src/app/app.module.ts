import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';
import { ByTerritoryPipe } from './by-territory.pipe';
import { Ng2OrderByPipe } from './ng2-order-by.pipe';
import { ComplaintDetailComponent } from './complaint-detail/complaint-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintsListComponent,
    ByTerritoryPipe,
    Ng2OrderByPipe,
    ComplaintDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    HttpModule,
    RouterModule.forRoot([
      {
      path: 'complaints',
      component: ComplaintsListComponent
     },
     {
       path:'complaints/:id',
       component: ComplaintDetailComponent
     }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
