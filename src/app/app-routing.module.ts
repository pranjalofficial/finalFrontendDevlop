import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BatchInfoComponent } from './batch-info/batch-info.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TheoryExamComponent } from './theory-exam/theory-exam.component';
import { PracticalExamComponent } from './practical-exam/practical-exam.component';


const routes: Routes = [
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'batch-info',
    component:BatchInfoComponent
  },
  {
    path:'candidate-List',
    component:CandidateListComponent
  },
  {
    path:'dashboard',
    component:DashBoardComponent
  },
  {
    path:'theory',
    component:TheoryExamComponent
  },
  {
    path:'practical',
    component:PracticalExamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
