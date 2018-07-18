import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TWknowledgeComponent } from './twknowledge.component';

describe('TWknowledgeComponent', () => {
  let component: TWknowledgeComponent;
  let fixture: ComponentFixture<TWknowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TWknowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TWknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
