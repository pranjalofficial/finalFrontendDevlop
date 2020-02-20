import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { ITheeoryQuestions } from '../Interfaces/ITheoryQuestion';
import { ILanguage } from '../Interfaces/ILanguage';
import { FormBuilder, NgForm } from '@angular/forms';
import { ITheoryResult } from '../Interfaces/ITheoryResult';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { Time } from '@angular/common';
import { ModalService } from '../_modal';
import { IAnswerIndex } from '../Interfaces/IAnswerIndex';
import { NgbSlideEvent, NgbSlideEventSource, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ReqConnService } from '../req-conn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theory-exam',
  templateUrl: './theory-exam.component.html',
  styleUrls: ['./theory-exam.component.css']
})
export class TheoryExamComponent implements OnInit {
  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;
  constructor(private route:Router,private auth:AuthService,public fb: FormBuilder,private config: NgbCarouselConfig,private modalService: ModalService, private conn: ReqConnService) {
    config.interval = 0;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
   }
  myDate:Date;
  answerIndex:IAnswerIndex = {
    q1:0,
    q2:0,
    q3:0,
    q4:0,
    q5:0,
    q6:0,
    q7:0,
    q8:0,
    q9:0,
    q10:0,
    q11:0,
    q12:0,
    q13:0,
    q14:0,
    q15:0,
    q16:0,
    q17:0,
    q18:0,
    q19:0,
    q20:0,
  }
  registrationForm = this.fb.group({
  })
  answer:ITheoryResult={
    trId:0,
    trbatchId:null,
    trCandidateId:null,
    trMarks1:0,
    trMarks2:0,
    trMarks3:0,
    trMarks4:0,
    trMarks5:0,
    trMarks6:0,
    trMarks7:0,
    trMarks8:0,
    trMarks9:0,
    trMarks10:0,
    trMarks11:0,
    trMarks12:0,
    trMarks13:0,
    trMarks14:0,
    trMarks15:0,
    trMarks16:0,
    trMarks17:0,
    trMarks18:0,
    trMarks19:0,
    trMarks20:0,
    trTotalMarks:0
  };
  questions:ITheeoryQuestions[]=[{
    tqCode:null,
    tqCorrectAnswer:null,
    tqLanguage:null,
    tqMarks:null,
    tqOption1:null,
    tqOption2:null,
    tqOption3:null,
    tqOption4:null,
    tqQuestion:null,
    tqVersionOfQb:null
  }];

  index:number=0;

  countDownTime:Time 
  ngOnInit() {
    this.myDate = new Date;
    this.myDate.setHours(this.myDate.getHours() + 2);
    for(let i=0;i<=this.auth.theoryQuestionPaper.length-1;i++){
      if(this.auth.theoryQuestionPaper[i].tqLanguage==this.auth.selectedLanguage.lang)
      {
        if(this.questions[0].tqCode == null){
          this.questions[this.questions.length-1] = this.auth.theoryQuestionPaper[i];
        }
        else{
          this.questions[this.questions.length] = this.auth.theoryQuestionPaper[i];
        }
        
      }
    }
    this.answer.trCandidateId = this.auth.candidateID;
    this.answer.trbatchId = this.auth.rId;
    
  }
  submit(){
    debugger
    this.answer.trTotalMarks = this.answer.trMarks1 + this.answer.trMarks2 + this.answer.trMarks3 +this.answer.trMarks4 + this.answer.trMarks5 +this.answer.trMarks6 +this.answer.trMarks7 +this.answer.trMarks8 +this.answer.trMarks9 +this.answer.trMarks10 +this.answer.trMarks11 +this.answer.trMarks12 +this.answer.trMarks13 +this.answer.trMarks14 +this.answer.trMarks15 + this.answer.trMarks16 + this.answer.trMarks17 + this.answer.trMarks18 + this.answer.trMarks19 + this.answer.trMarks20 
    console.log(this.answer);
    this.conn.theoryResult(this.answer).subscribe();
    this.route.navigate(['candidate-List']);
  }
  nextSlide(){

    if(this.index != 0){
      this.index
    }
    else{
      this.index = this.index + 1;
    }
    this.carousel.next();
  }

  prevSlide(){
    this.index = this.index - 1;
    this.carousel.prev();
  }

  onItemChange(item:number,qp:ITheeoryQuestions){
    
      switch(this.questions.indexOf(qp)){
        case 0:  
        this.answerIndex.q1 = 1    
         if(item == qp.tqCorrectAnswer){
          this.answer.trMarks1 = 1
        }
        else{
          this.answer.trMarks1 = 0
        }
        break;
        case 1: 
        this.answerIndex.q2 = 1      
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks2 = 1
        }
        else{
          this.answer.trMarks2 = 0
        }
        break;
        case 2: 
        this.answerIndex.q3 = 1      
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks3 = 1
        }
        else{
          this.answer.trMarks3 = 0
        }
        break;
        case 3:
         this.answerIndex.q4 = 1       
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks4 = 1
        }
        else{
          this.answer.trMarks4 = 0
        }
        break;
        case 4:   
        this.answerIndex.q5 = 1    
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks5 = 1
        }
        else{
          this.answer.trMarks5 = 0
        }
        break;
        case 5:   
        this.answerIndex.q6 = 1    
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks6 = 1
        }
        else{
          this.answer.trMarks6 = 0
        }
        break;
        case 6:  
        this.answerIndex.q7 = 1     
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks7 = 1
        }
        else{
          this.answer.trMarks7 = 0
        }
        break;
        case 7:    
        this.answerIndex.q8 = 1   
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks8 = 1
        }
        else{
          this.answer.trMarks8 = 0
        }
        break;
        case 8:     
        this.answerIndex.q9 = 1  
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks9 = 1
        }
        else{
          this.answer.trMarks9 = 0
        }
        break;
        case 9:  
        this.answerIndex.q10 = 1     
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks10 = 1
        }
        else{
          this.answer.trMarks10 = 0
        }
        break;
        case 10:   
        this.answerIndex.q11 = 1    
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks11 = 1
        }
        else{
          this.answer.trMarks11 = 0
        }
        break;
        case 11:   
        this.answerIndex.q12 = 1    
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks12 = 1
        }
        else{
          this.answer.trMarks12 = 0
        }
        break;
        case 12:  
        this.answerIndex.q13 = 1     
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks13 = 1
        }
        else{
          this.answer.trMarks13 = 0
        }
        break;
        case 13: 
        this.answerIndex.q14 = 1      
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks14 = 1
        }
        else{
          this.answer.trMarks14 = 0
        }
        break;
        case 14: 
        this.answerIndex.q15 = 1      
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks15 = 1
        }
        else{
          this.answer.trMarks15 = 0
        }
        break;
        case 15:  
        this.answerIndex.q16 = 1     
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks16 = 1
        }
        else{
          this.answer.trMarks16 = 0
        }
        break;
        case 16: 
        this.answerIndex.q17 = 1      
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks17 = 1
        }
        else{
          this.answer.trMarks17 = 0
        }
        break;
        case 17: 
        this.answerIndex.q18 = 1      
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks18 = 1
        }
        else{
          this.answer.trMarks18 = 0
        }
        break;
        case 18:  
        this.answerIndex.q19 = 1     
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks19 = 1
        }
        else{
          this.answer.trMarks19 = 0
        }
        break;
        case 19:  
        this.answerIndex.q20 = 1     
        if(item == qp.tqCorrectAnswer){
          this.answer.trMarks20 = 1
        }
        else{
          this.answer.trMarks20 = 0
        }
        break;
      }
  }

 
  
  openModal(id: string) {
    
    this.modalService.open(id);
}

  closeModal(id: string) {
    this.modalService.close(id);
}
}
