import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMTComponent } from './smt.component';

describe('SMTComponent', () => {
  let component: SMTComponent;
  let fixture: ComponentFixture<SMTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
