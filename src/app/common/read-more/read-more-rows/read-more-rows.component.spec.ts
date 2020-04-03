import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreRowsComponent } from './read-more-rows.component';

describe('ReadMoreRowsComponent', () => {
  let component: ReadMoreRowsComponent;
  let fixture: ComponentFixture<ReadMoreRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMoreRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
