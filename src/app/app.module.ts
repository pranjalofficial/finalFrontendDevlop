import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BatchInfoComponent } from './batch-info/batch-info.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TheoryExamComponent } from './theory-exam/theory-exam.component';
import { PracticalExamComponent } from './practical-exam/practical-exam.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BatchInfoComponent,
    CandidateListComponent,
    DashBoardComponent,
    TheoryExamComponent,
    PracticalExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
