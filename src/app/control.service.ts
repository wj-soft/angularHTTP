import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from './models/problem';

@Injectable()
export class ControlService {
  appUrl = 'http://localhost:3000/api';
  problems: Problem[];

  constructor(private http: HttpClient) { 
    this.getProblem();
   }
  
  ngOnInit() {  
    this.getProblem();
  }
  
  getProblem() {
    this.http.get<any>(`${this.appUrl}/fetchProblem`)
      .subscribe(
        problems => { this.problems = problems.problems }
        // problems => { this.problems = problems } <Todo[]> 타입으로 서버값이 변수에 할당이 안이루어짐, 임시로 위와 같이 대처함.
      );
  }
}
