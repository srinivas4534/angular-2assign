import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { LoginComponent } from './login.component';

import { AppRoutingModule } from './app-routing.module';

import { StudentService } from './student.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { StudentSearchService } from './student-search.service';
import { StudentSearchComponent } from './student-search.component';

@NgModule({
  declarations: [
    AppComponent,StudentComponent,LoginComponent,StudentSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [StudentService,StudentSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

