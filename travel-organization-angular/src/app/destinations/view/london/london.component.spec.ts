import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonComponent } from './london.component';

describe('LondonComponent', () => {
  let component: LondonComponent;
  let fixture: ComponentFixture<LondonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LondonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LondonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
