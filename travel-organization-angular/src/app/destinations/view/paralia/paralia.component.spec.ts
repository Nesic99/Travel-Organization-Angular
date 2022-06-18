import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaliaComponent } from './paralia.component';

describe('ParaliaComponent', () => {
  let component: ParaliaComponent;
  let fixture: ComponentFixture<ParaliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
