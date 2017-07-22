import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellThumbnailComponent } from './spell-thumbnail.component';

describe('SpellThumbnailComponent', () => {
  let component: SpellThumbnailComponent;
  let fixture: ComponentFixture<SpellThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
