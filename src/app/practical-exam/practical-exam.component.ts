import { Component, OnInit } from '@angular/core';
import { IPracticalQuestions } from '../Interfaces/IPracticalQuestion';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-practical-exam',
  templateUrl: './practical-exam.component.html',
  styleUrls: ['./practical-exam.component.css']
})
export class PracticalExamComponent implements OnInit {

  constructor(private auth:AuthService) { }
  myDate:Date;
  questions:IPracticalQuestions[]=[{
    pqCode:null,
    pqMarks:null,
    pqNos:null,
    pqQuestion:null,
    pqType:null,
    pqVersionOfQb:null
  }]
  nos:string[] = null; 
  // listofNOS:string[] = null;
  some:string
  ngOnInit() {
    debugger  
    this.questions = this.auth.practicalQuestionPaper;
    this.some = this.questions[0].pqNos
    this.nos = [this.some]
    this.myDate = new Date;
    this.myDate.setHours(this.myDate.getHours() + 2);
    for(let i=0;i<=this.questions.length-1;i++){
      if(this.questions[i].pqNos != this.nos[this.nos.length-1]){
        this.nos[this.nos.length] = this.questions[i].pqNos
      }
    }


  }
  checkIf(value: any){
    debugger;  //open the devtools and go to the view...code execution will stop here!
    //..code to be checked... `value` can be inspected now along with all of the other component attributes
}
 
}
