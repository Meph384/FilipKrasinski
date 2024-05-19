import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCenterLocationComponent } from './training-center-location.component';

describe('TrainingCenterLocationComponent', () => {
  let component: TrainingCenterLocationComponent;
  let fixture: ComponentFixture<TrainingCenterLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingCenterLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingCenterLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
