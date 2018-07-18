import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablogsComponent } from './tablogs.component';

describe('TablogsComponent', () => {
  let component: TablogsComponent;
  let fixture: ComponentFixture<TablogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
