import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReqConnService } from '../req-conn.service';
import { AuthService } from '../auth.service';
import { IInformation } from '../Interfaces/IInformation';

@Component({
  selector: 'app-batch-info',
  templateUrl: './batch-info.component.html',
  styleUrls: ['./batch-info.component.css']
})
export class BatchInfoComponent implements OnInit {
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
    this.loginForm = this.formBuilder.group({});
    this.batchInfo = this.auth.batch;
   this.auth.requestData(this.auth.rId);
  }
  onSubmit(){
    this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
    this.route.navigate(['candidate-List']);
  }

}
