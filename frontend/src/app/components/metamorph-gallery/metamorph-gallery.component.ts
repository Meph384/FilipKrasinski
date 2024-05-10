import { Component } from '@angular/core';

@Component({
  selector: 'app-metamorph-gallery',
  standalone: true,
  imports: [],
  templateUrl: './metamorph-gallery.component.html',
  styleUrl: './metamorph-gallery.component.scss'
})
export class MetamorphGalleryComponent {
  transformations = [
    {
      beforeImage: './assets/images/Filip.png',
      afterImage: './assets/images/Filip.png',
      description: "John Doe's journey results in significant muscle gain."
    },
    {
      beforeImage: './assets/images/Filip.png',
      afterImage: './assets/images/Filip.png',
      description: 'Jane Smith after a 3-month dedicated fitness regimen.'
    },
    {
      beforeImage: './assets/images/Filip.png',
      afterImage: './assets/images/Filip.png',
      description: 'Jane Smith after a 3-month dedicated fitness regimen.'
    },
    {
      beforeImage: './assets/images/Filip.png',
      afterImage: './assets/images/Filip.png',
      description: 'Jane Smith after a 3-month dedicated fitness regimen.'
    },
    {
      beforeImage: './assets/images/Filip.png',
      afterImage: './assets/images/Filip.png',
      description: 'Jane Smith after a 3-month dedicated fitness regimen.'
    },
    {
      beforeImage: './assets/images/Filip.png',
      afterImage: './assets/images/Filip.png',
      description: 'Jane Smith after a 3-month dedicated fitness regimen.'
    },
    {
      beforeImage: './assets/images/Filip.png',
      afterImage: './assets/images/Filip.png',
      description: 'Jane Smith after a 3-month dedicated fitness regimen.'
    },
  ];
}
