import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ReqConnService } from '../req-conn.service';
import { AuthService } from '../auth.service';
import { strictEqual } from 'assert';
import { IInformation } from '../Interfaces/IInformation';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.css']
})
export class LanguageSelectionComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  batchInfo:IInformation={
    asId :null,
     asContactPerson:null, 
     asSdmsbatchName:null, 
     centerName :null,
     asQuestionBankID:null,
     asQuestionVersion:null,
     qvHindi:null,
     qvBangla:null,
     qvTamil:null

  }
  constructor(private route: Router,private formBuilder: FormBuilder,private reqData:ReqConnService,private auth:AuthService) { }

  ngOnInit() {
    debugger
    this.loginForm = this.formBuilder.group({});
    this.batchInfo = this.auth.batch;
    console.log(this.batchInfo);
  }

  

  hindi(){
    
    this.auth.language('Hindi');
    this.route.navigate(['batch-info']);
  }
  english(){
    this.auth.language('English');
    this.route.navigate(['batch-info']);
  }
  tamil(){
    this.auth.language('Tamil');
    this.route.navigate(['batch-info']);
  }
  bangla(){
    this.auth.language('Bangla');
    this.route.navigate(['batch-info']);
  }

}
