import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcommunityComponent } from './aboutcommunity.component';

describe('AboutcommunityComponent', () => {
  let component: AboutcommunityComponent;
  let fixture: ComponentFixture<AboutcommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutcommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
