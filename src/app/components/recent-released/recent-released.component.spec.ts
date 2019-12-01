import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentReleasedComponent } from './recent-released.component';

describe('RecentReleasedComponent', () => {
  let component: RecentReleasedComponent;
  let fixture: ComponentFixture<RecentReleasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentReleasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentReleasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
