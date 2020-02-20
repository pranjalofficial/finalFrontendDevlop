import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IInformation } from './Interfaces/IInformation';
import { ITheeoryQuestions } from './Interfaces/ITheoryQuestion';
import { IPracticalQuestions } from './Interfaces/IPracticalQuestion';
import { ICandidateList } from './Interfaces/ICandidateList';
import { ITheoryResult } from './Interfaces/ITheoryResult';
import { IPracticalResult } from './Interfaces/IPracticalResult';
import { async } from '@angular/core/testing';
import { forkJoin } from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReqConnService {

  constructor(private http:HttpClient) { }

  urlBatch:string = "https://webapplication320200218110357.azurewebsites.net/api/CenterAssesorInfo/";
  urlTheory:string = "https://webapplication320200218110357.azurewebsites.net/api/TheoryQuestion/";
  urlPractical:string = "https://webapplication320200218110357.azurewebsites.net/api/PracticalQuestion/";
  urlCandidate:string = "https://webapplication320200218110357.azurewebsites.net/api/CandidateList/";
  urlTheoryResult:string = "https://webapplication320200218110357.azurewebsites.net/api/TheoryResult";
  urlPracticalResult:string="https://webapplication320200218110357.azurewebsites.net/api/PracticalResult";
  asyncResult:Observable<IInformation>

  private handleError(err: HttpErrorResponse) {
 
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

        errorMessage = `An error occurred: ${err.error.message}`;
    } else {

        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}

batches(rId:number){
  debugger
  const promise = this.http.get<IInformation>(this.urlBatch+rId).toPromise();
  console.log(promise);
}
 batchInfo(rID:number):Observable<IInformation>{
    debugger
  return this.http.get<IInformation>(this.urlBatch+rID,{headers: new HttpHeaders({'Content-type': 'application/json'})
  }).pipe(tap(data=> console.log('All:'+JSON.stringify(data))),catchError(this.handleError));
  }

  theory(rID:number):Observable<ITheeoryQuestions[]>{
    return this.http.get<ITheeoryQuestions[]>(this.urlTheory+rID,{headers: new HttpHeaders({'Content-type': 'application/json'})
  }).pipe(tap(data=> console.log('All:'+JSON.stringify(data))),catchError(this.handleError));
  }

  practical(rID:number):Observable<IPracticalQuestions[]>{
    return this.http.get<IPracticalQuestions[]>(this.urlPractical+rID,{headers: new HttpHeaders({'Content-type': 'application/json'})
  }).pipe(tap(data=> console.log('All:'+JSON.stringify(data))),catchError(this.handleError));
  }

  candidate(rID:number):Observable<ICandidateList[]>{
    return this.http.get<ICandidateList[]>(this.urlCandidate+rID,{headers: new HttpHeaders({'Content-type': 'application/json'})
  }).pipe(tap(data=> console.log('All:'+JSON.stringify(data))),catchError(this.handleError));
  }

  theoryResult(theoryAnswers:ITheoryResult){
    debugger
    return this.http.post(this.urlTheoryResult,theoryAnswers)
  }

  practicalResult(practicalResult:IPracticalResult[]){
    debugger
    return this.http.post(this.urlPracticalResult,practicalResult)
  }

}
