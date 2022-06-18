import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbizaComponent } from './ibiza.component';

describe('IbizaComponent', () => {
  let component: IbizaComponent;
  let fixture: ComponentFixture<IbizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
