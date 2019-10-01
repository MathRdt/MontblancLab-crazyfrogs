import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationWaterComponent } from './observation-water.component';

describe('ObservationWaterComponent', () => {
  let component: ObservationWaterComponent;
  let fixture: ComponentFixture<ObservationWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObservationWaterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
