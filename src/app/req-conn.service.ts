import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInformation } from './Interfaces/IInformation';
import { ITheeoryQuestions } from './Interfaces/ITheoryQuestion';
import { IPracticalQuestions } from './Interfaces/IPracticalQuestion';
import { ICandidateList } from './Interfaces/ICandidateList';

@Injectable({
  providedIn: 'root'
})
export class ReqConnService {

  constructor(private http:HttpClient) { }

  urlBatch:string = "http://localhost:56113/api/CenterAssesorInfo/";
  urlTheory:string = "http://localhost:56113/api/QuestionPaper/";
  urlPractical:string = "http://localhost:56113/api/PracticalQuestions/";
  urlCandidate:string = "http://localhost:56113/api/CandidateList/";
  batchInfo(rID:number):Observable<IInformation>{
    return this.http.get<IInformation>(this.urlBatch+rID,{headers: new HttpHeaders({'Content-type': 'application/json'})
  });
  }

  theory(rID:number):Observable<ITheeoryQuestions[]>{
    return this.http.get<ITheeoryQuestions[]>(this.urlTheory+rID,{headers: new HttpHeaders({'Content-type': 'application/json'})
  });
  }

  practical(rID:number):Observable<IPracticalQuestions[]>{
    return this.http.get<IPracticalQuestions[]>(this.urlPractical+rID,{headers: new HttpHeaders({'Content-type': 'application/json'})
  });
  }

  candidate(rID:number):Observable<ICandidateList[]>{
    return this.http.get<ICandidateList[]>(this.urlCandidate+rID,{headers: new HttpHeaders({'Content-type': 'application/json'})
  });
  }

}
