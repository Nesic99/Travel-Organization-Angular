import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SicilyComponent } from './sicily.component';

describe('SicilyComponent', () => {
  let component: SicilyComponent;
  let fixture: ComponentFixture<SicilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SicilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SicilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
