import { Component, OnInit } from '@angular/core';
import { IPracticalQuestions } from '../Interfaces/IPracticalQuestion';
import { AuthService } from '../auth.service';
import { IPracticalResult } from '../Interfaces/IPracticalResult';
import { Router } from '@angular/router';
import { ReqConnService } from '../req-conn.service';

@Component({
  selector: 'app-practical-exam',
  templateUrl: './practical-exam.component.html',
  styleUrls: ['./practical-exam.component.css']
})
export class PracticalExamComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router,private conn:ReqConnService) { }
  myDate:Date;
  questions:IPracticalQuestions[]=[{
    pqCode:null,
    pqMarks:null,
    pqNos:null,
    pqQuestion:null,
    pqType:null,
    pqVersionOfQb:null,
    pqLang:null
  },
]

answer:IPracticalResult[] = new Array;


initialINdex:IPracticalResult = {
  prId:0,
  prCandidateId:null,
  prMarks:null,
  prQuestionId:null,
  prbatchId:null
};

batchID:number;
candiddateID:string;
  nos:string[] = null
  some:string
  markGiven:number;
  
  ngOnInit() {
    debugger  
    if(this.auth.hindiPractical[0].pqCode!=null){
      this.questions = this.auth.hindiPractical;
    }
    else if(this.auth.englishPractical[0].pqCode != null)
    {
      this.questions = this.auth.englishPractical;
    }
    else if(this.auth.tamilPractical[0].pqCode!=null){
      this.questions = this.auth.tamilPractical;
    }
    this.some = this.questions[0].pqNos
    this.nos = [this.some]
    this.myDate = new Date;
    this.myDate.setHours(this.myDate.getHours() + 2);
    
    for(let i=0;i<=this.questions.length-1;i++){
      if(this.questions[i].pqNos != this.nos[this.nos.length-1]){
        this.nos[this.nos.length] = this.questions[i].pqNos
      }
    }
    this.candiddateID = this.auth.candidateID;
    this.batchID = this.auth.rId
 }
onSubmit(questionCode:number){
  debugger
  this.initialINdex.prCandidateId = this.candiddateID
  this.initialINdex.prbatchId = this.batchID
  this.initialINdex.prQuestionId = questionCode
  this.initialINdex.prMarks = this.markGiven
  this.answer.push(this.initialINdex);
  console.log(this.answer);
  if(this.answer.length == this.questions.length){
    this.conn.practicalResult(this.answer).subscribe();
    this.route.navigate(['candidate-List']);

  }
  // if(this.answer[0].prCandidateId == null){
  //   this.answer[this.answer.length-1].prCandidateId = this.candiddateID
  //   this.answer[this.answer.length-1].prbatchId = this.batchID
  //   this.answer[this.answer.length-1].prQuestionId = questionCode
  //   this.answer[this.answer.length-1].prMarks = this.markGiven
  //   console.log(this.answer)
  // }
  // else if(this.answer.length + 1 == this.questions.length){
  //   this.answer[this.answer.length+1].prCandidateId = this.candiddateID
  //   this.answer[this.answer.length+1].prbatchId = this.batchID
  //   this.answer[this.answer.length+1].prQuestionId = questionCode
  //   this.answer[this.answer.length+1].prMarks = this.markGiven
  //   console.log(this.answer)
  //   this.conn.practicalResult(this.answer).subscribe();
  //   this.route.navigate(['candidate-List']);
  // }
  // else{
  //   this.answer[this.answer.length+1].prCandidateId = this.candiddateID
  //   this.answer[this.answer.length+1].prbatchId = this.batchID
  //   this.answer[this.answer.length+1].prQuestionId = questionCode
  //   this.answer[this.answer.length+1].prMarks = this.markGiven
  //   console.log(this.answer)
  // }

  // for(let i=0;i< this.questions.length;i++){
  //   if(this.answer[0].prCandidateId == null){
  //     this.answer[i-1].prCandidateId = this.candiddateID
  //   this.answer[i-1].prbatchId = this.batchID
  //   this.answer[i-1].prQuestionId = questionCode
  //   this.answer[i-1].prMarks = this.markGiven
  //   }
  //   else if(this.answer.length + 1 == this.questions.length){
  //     this.answer[i].prCandidateId = this.candiddateID
  //     this.answer[i].prbatchId = this.batchID
  //     this.answer[i].prQuestionId = questionCode
  //     this.answer[i].prMarks = this.markGiven
  //     this.conn.practicalResult(this.answer).subscribe();
  //     this.route.navigate(['candidate-List']);
  //   }
  //   else{
  //     this.answer[i].prCandidateId = this.candiddateID
  //     this.answer[i].prbatchId = this.batchID
  //     this.answer[i].prQuestionId = questionCode
  //     this.answer[i].prMarks = this.markGiven
  //   }
   
  // }
    
}

}
