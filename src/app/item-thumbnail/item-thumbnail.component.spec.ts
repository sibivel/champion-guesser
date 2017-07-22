import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemThumbnailComponent } from './item-thumbnail.component';

describe('ItemThumbnailComponent', () => {
  let component: ItemThumbnailComponent;
  let fixture: ComponentFixture<ItemThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
