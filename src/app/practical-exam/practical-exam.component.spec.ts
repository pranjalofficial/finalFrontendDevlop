import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalExamComponent } from './practical-exam.component';

describe('PracticalExamComponent', () => {
  let component: PracticalExamComponent;
  let fixture: ComponentFixture<PracticalExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticalExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
