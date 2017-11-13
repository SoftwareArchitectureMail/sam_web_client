import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentDetailsComponent } from './sent-details.component';

describe('SentDetailsComponent', () => {
  let component: SentDetailsComponent;
  let fixture: ComponentFixture<SentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
