import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasofteventsComponent } from './tasoftevents.component';

describe('TasofteventsComponent', () => {
  let component: TasofteventsComponent;
  let fixture: ComponentFixture<TasofteventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasofteventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasofteventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
