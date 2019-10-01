import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickFrogStateComponent } from './pick-frog-state.component';

describe('PickFrogStateComponent', () => {
  let component: PickFrogStateComponent;
  let fixture: ComponentFixture<PickFrogStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PickFrogStateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickFrogStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
