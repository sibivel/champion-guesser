import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeChampImageComponent } from './large-champ-image.component';

describe('LargeChampImageComponent', () => {
  let component: LargeChampImageComponent;
  let fixture: ComponentFixture<LargeChampImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeChampImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeChampImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
