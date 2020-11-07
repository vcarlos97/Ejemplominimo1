import { SubjectsComponent } from './subjects/subjects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/subjects'},
  { path: 'subjects', component: SubjectsComponent},
  { path: 'newSubject', component: SubjectFormComponent},
  { path: 'newStudent', component: StudentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
