import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ICandidateList } from '../Interfaces/ICandidateList';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  num:number;
  str:string;
  constructor(private formBuilder:FormBuilder,private route:Router,public auth:AuthService) { }
  
  candidateID:string;
  candidateTable:ICandidateList=null;

  ngOnInit() {
    debugger
    this.loginForm = this.formBuilder.group({});
    this.candidateID = this.auth.candidateID;
    this.candidateTable = this.auth.candidateList[this.auth.candidateID.indexOf(this.auth.candidateID)];
  }

  onSubmit(){
    this.route.navigate(['theory']);
  }

  onPractical(){
    this.route.navigate(['practical']);
  }

}
