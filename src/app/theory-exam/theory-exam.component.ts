import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ITheeoryQuestions } from '../Interfaces/ITheoryQuestion';

@Component({
  selector: 'app-theory-exam',
  templateUrl: './theory-exam.component.html',
  styleUrls: ['./theory-exam.component.css']
})
export class TheoryExamComponent implements OnInit {

  constructor(private auth:AuthService) { }
  myDate:Date;
  questions:ITheeoryQuestions[]=null;
  ngOnInit() {
    this.myDate = new Date;
    this.myDate.setHours(this.myDate.getHours() + 2);
    this.questions = this.auth.theoryQuestionPaper
  }
  

}
