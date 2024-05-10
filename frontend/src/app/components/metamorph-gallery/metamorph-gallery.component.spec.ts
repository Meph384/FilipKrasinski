import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamorphGalleryComponent } from './metamorph-gallery.component';

describe('MetamorphGalleryComponent', () => {
  let component: MetamorphGalleryComponent;
  let fixture: ComponentFixture<MetamorphGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetamorphGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetamorphGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
