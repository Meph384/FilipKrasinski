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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
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
    { src: './assets/images/partners/ntfy.png', alt: 'Nice To Fit You' },
    { src: './assets/images/partners/hsc.png', alt: 'Holistic Sport Center' },
    { src: './assets/images/partners/Fizjoterapia_Lukasz_Szefner.png', alt: 'Fizjoterapia Łukasz Szefner' },
    { src: './assets/images/partners/aarkada.jpg', alt: 'Aarkada' },

  ];
}
