import { Component } from '@angular/core';
import {CarouselComponent} from "../shared/carousel/carousel.component";

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust timing as necessary
    infinite: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  };

  logos = [
    { src: './assets/images/partners/ntfy.jpg', alt: 'Nice To Fit You' },
    { src: './assets/images/partners/hsc.png', alt: 'Holistic Sport Center' },
    { src: './assets/images/partners/Fizjoterapia Łukasz Szefner.jpg', alt: 'Fizjoterapia Łukasz Szefner' }
  ];
}
