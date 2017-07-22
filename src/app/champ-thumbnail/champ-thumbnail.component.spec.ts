import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampThumbnailComponent } from './champ-thumbnail.component';

describe('ChampThumbnailComponent', () => {
  let component: ChampThumbnailComponent;
  let fixture: ComponentFixture<ChampThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
