import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReqConnService } from '../req-conn.service';
import { ITheeoryQuestions } from '../Interfaces/ITheoryQuestion';
import { AuthService } from '../auth.service';
import { ICandidateList } from '../Interfaces/ICandidateList';
import { IPracticalQuestions } from '../Interfaces/IPracticalQuestion';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(private formBuilder:FormBuilder,private route:Router, private reqConn:ReqConnService,private auth:AuthService) { }

  theoryQuestions:ITheeoryQuestions[]=null;
  practicalQuestions:IPracticalQuestions[]= null;
  candidateList:ICandidateList[] = null;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({});
    this.auth.requestData(this.auth.rId);
    this.candidateList = this.auth.candidateList;
  }
  onSubmit(id:string){  
    this.auth.dashboard(id);
    this.route.navigate(['dashboard']);
  }

}
