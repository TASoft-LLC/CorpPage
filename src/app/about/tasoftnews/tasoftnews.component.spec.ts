import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasoftnewsComponent } from './tasoftnews.component';

describe('TasoftnewsComponent', () => {
  let component: TasoftnewsComponent;
  let fixture: ComponentFixture<TasoftnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasoftnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasoftnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
