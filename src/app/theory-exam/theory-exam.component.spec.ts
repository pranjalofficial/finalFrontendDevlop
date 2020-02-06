import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryExamComponent } from './theory-exam.component';

describe('TheoryExamComponent', () => {
  let component: TheoryExamComponent;
  let fixture: ComponentFixture<TheoryExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoryExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
