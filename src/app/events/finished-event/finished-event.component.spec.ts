import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedEventComponent } from './finished-event.component';

describe('FinishedEventComponent', () => {
  let component: FinishedEventComponent;
  let fixture: ComponentFixture<FinishedEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
