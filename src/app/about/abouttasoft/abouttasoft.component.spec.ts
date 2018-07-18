import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouttasoftComponent } from './abouttasoft.component';

describe('AbouttasoftComponent', () => {
  let component: AbouttasoftComponent;
  let fixture: ComponentFixture<AbouttasoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouttasoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouttasoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
