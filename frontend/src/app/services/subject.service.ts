import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../model/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  getSubjects(){
    return this.http.get<Subject[]>(environment.apiURL + '/subject/todo');
  }
}
