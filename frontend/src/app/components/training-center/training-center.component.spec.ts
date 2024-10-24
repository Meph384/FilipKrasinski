import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCenterComponent } from './training-center.component';

describe('TrainingCenterComponent', () => {
  let component: TrainingCenterComponent;
  let fixture: ComponentFixture<TrainingCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingCenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
