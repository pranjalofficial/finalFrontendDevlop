import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICandidateList } from './Interfaces/ICandidateList';
import { ITheeoryQuestions } from './Interfaces/ITheoryQuestion';
import { IPracticalQuestions } from './Interfaces/IPracticalQuestion';
import { ReqConnService } from './req-conn.service';
import { ILanguage } from './Interfaces/ILanguage';
import { IInformation } from './Interfaces/IInformation';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router, private reqConn:ReqConnService) { }

  rId:number;
  selectedLanguage:ILanguage = {
    lang:null
  };
  candidateList:ICandidateList[]=null;
  theoryQuestionPaper:ITheeoryQuestions[] = null;
  practicalQuestionPaper:IPracticalQuestions[] = null;
  hindiPractical:IPracticalQuestions[] =[{
    pqCode:null,
    pqMarks:null,
    pqNos:null,
    pqQuestion:null,
    pqType:null,
    pqVersionOfQb:null,
    pqLang:null
  },
]
  tamilPractical:IPracticalQuestions[] =[{
    pqCode:null,
    pqMarks:null,
    pqNos:null,
    pqQuestion:null,
    pqType:null,
    pqVersionOfQb:null,
    pqLang:null
  },
]
  englishPractical:IPracticalQuestions[] =[{
    pqCode:null,
    pqMarks:null,
    pqNos:null,
    pqQuestion:null,
    pqType:null,
    pqVersionOfQb:null,
    pqLang:null
  },
]
  batch:IInformation=null;
  requestId(id:number){
    this.rId = id;
    this.reqConn.batches(id);
    this.reqConn.batchInfo(id)
    .subscribe((res:IInformation)=>
    this.batch = res)
    this.requestData(id);
  }
  requestData(id:number){
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

  selectedLanguagePractical(){
    
    if(this.selectedLanguage.lang == 'English'){
      for(let i=0;i<=this.practicalQuestionPaper.length-1;i++){
        if(this.practicalQuestionPaper[i].pqLang==this.selectedLanguage.lang)
        {
          if(this.englishPractical[0].pqCode == null){
            this.englishPractical[this.englishPractical.length-1] = this.practicalQuestionPaper[i];
          }
          else{
            this.englishPractical[this.englishPractical.length] = this.practicalQuestionPaper[i];
          }
          
        }
      }
    }
    if(this.selectedLanguage.lang == 'Hindi'){
      for(let i=0;i<=this.practicalQuestionPaper.length-1;i++){
        if(this.practicalQuestionPaper[i].pqLang==this.selectedLanguage.lang)
        {
          if(this.englishPractical[0].pqCode == null){
            this.englishPractical[this.englishPractical.length-1] = this.practicalQuestionPaper[i];
          }
          else{
            this.englishPractical[this.englishPractical.length] = this.practicalQuestionPaper[i];
          }
          
        }
      }
    }
    if(this.selectedLanguage.lang =='Tamil'){
      for(let i=0;i<=this.practicalQuestionPaper.length-1;i++){
        if(this.practicalQuestionPaper[i].pqLang==this.selectedLanguage.lang)
        {
          if(this.tamilPractical[0].pqCode == null){
            this.tamilPractical[this.tamilPractical.length-1] = this.practicalQuestionPaper[i];
          }
          else{
            this.tamilPractical[this.tamilPractical.length] = this.practicalQuestionPaper[i];
          }
          
        }
      }
    }
  }

  language(lang:string){
    
    this.selectedLanguage.lang = lang;
    this.selectedLanguagePractical();
  }
}
