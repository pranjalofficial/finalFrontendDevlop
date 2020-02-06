import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICandidateList } from './Interfaces/ICandidateList';
import { ITheeoryQuestions } from './Interfaces/ITheoryQuestion';
import { IPracticalQuestions } from './Interfaces/IPracticalQuestion';
import { ReqConnService } from './req-conn.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router, private reqConn:ReqConnService) { }

  rId:number;
  requestId(id:number){
    this.rId = id;
    this.route.navigate(['batch-info']);
  }

  candidateList:ICandidateList[]=null;
  theoryQuestionPaper:ITheeoryQuestions[] = null;
  practicalQuestionPaper:IPracticalQuestions[] = null;
  requestData(id:number){
    debugger
    this.reqConn.candidate(id).subscribe((res:ICandidateList[])=>{
      this.candidateList = [...res];
    })

    this.reqConn.theory(id).subscribe((res:ITheeoryQuestions[])=>{
      this.theoryQuestionPaper = [...res]
    })

    this.reqConn.practical(id).subscribe((res:IPracticalQuestions[])=>{
      this.practicalQuestionPaper = [...res]
    }) 
  }
  candidateID:string;
  dashboard(clID:string){
    this.candidateID = clID;
    this.route.navigate(['dashboard']);
  }
}
