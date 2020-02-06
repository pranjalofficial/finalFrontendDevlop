import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
  constructor(private formBuilder: FormBuilder, private auth:AuthService,private route:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      requestID: ['', Validators.required],
  });
  }
  
  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.auth.requestId(this.f.requestID.value);
        this.route.navigate(['batch-info']);
        //this.auth.initialLogin(this.f.username.value);
  }

}
