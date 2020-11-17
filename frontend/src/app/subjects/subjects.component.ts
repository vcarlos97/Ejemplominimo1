import { SubjectService } from './../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject';
import { Router } from '@angular/router';



@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects: Subject[];

  constructor(public subjectService: SubjectService, private router: Router) { }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe (subjects =>{
      this.subjects = subjects;
    })
  }

  addSubject(){
    this.router.navigateByUrl('/newSubject');
  }

  listStudents(){
    this.router.navigateByUrl('/students');
  }
}
