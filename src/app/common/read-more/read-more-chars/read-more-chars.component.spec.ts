import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreCharsComponent } from './read-more-chars.component';

describe('ReadMoreCharsComponent', () => {
  let component: ReadMoreCharsComponent;
  let fixture: ComponentFixture<ReadMoreCharsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMoreCharsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreCharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
