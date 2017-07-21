import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDataViewComponent } from './match-data-view.component';

describe('MatchDataViewComponent', () => {
  let component: MatchDataViewComponent;
  let fixture: ComponentFixture<MatchDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
