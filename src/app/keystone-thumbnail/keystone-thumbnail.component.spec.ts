import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeystoneThumbnailComponent } from './keystone-thumbnail.component';

describe('KeystoneThumbnailComponent', () => {
  let component: KeystoneThumbnailComponent;
  let fixture: ComponentFixture<KeystoneThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeystoneThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeystoneThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
