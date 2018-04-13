import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from './models/problem';

@Injectable()
export class ControlService {
  appUrl = 'http://localhost:3000/api';
  problems: Problem[];
  choose = [];

  constructor(private http: HttpClient) { 
    this.getProblem();
   }
  
  ngOnInit() {  
    this.getProblem();
  }
  
  getProblem() {
    this.http.get<Problem[]>(`${this.appUrl}/fetchProblem`)
      .subscribe(
        problems => { 
          let temp = problems

          console.log("temp", problems)
          this.problems = problems }
        // Error <any>로 바꾸면 해결되는데;;.
      );
  }

  selected(index, select, id) {
    // index: 문제번호, id: 선택된 답의 번호 select: 선택된 답
    this.choose.push({ index, id, select })
    console.log(this.choose)
  }

}
