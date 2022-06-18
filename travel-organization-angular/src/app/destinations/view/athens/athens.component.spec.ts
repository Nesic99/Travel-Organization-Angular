import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthensComponent } from './athens.component';

describe('AthensComponent', () => {
  let component: AthensComponent;
  let fixture: ComponentFixture<AthensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
