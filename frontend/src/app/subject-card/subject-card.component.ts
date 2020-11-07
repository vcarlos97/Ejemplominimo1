import { Component, Input, OnInit } from '@angular/core';
import { Subject } from '../model/subject';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit {

  @Input()
  subject: Subject;

  @Input()
  subjectIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

}
