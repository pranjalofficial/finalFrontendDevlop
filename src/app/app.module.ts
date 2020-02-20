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
import { LanguageSelectionComponent } from './language-selection/language-selection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { ModalModule } from './_modal';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BatchInfoComponent,
    CandidateListComponent,
    DashBoardComponent,
    TheoryExamComponent,
    PracticalExamComponent,
    LanguageSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ModalModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
