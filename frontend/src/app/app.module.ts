import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectCardComponent } from './subject-card/subject-card.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentFormComponent } from './student-form/student-form.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    SubjectCardComponent,
    StudentCardComponent,
    StudentFormComponent,
    SubjectFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
