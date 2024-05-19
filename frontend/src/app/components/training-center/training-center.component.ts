import { Component } from '@angular/core';
import {CarouselComponent} from "../shared/carousel/carousel.component";

@Component({
  selector: 'app-training-center',
  standalone: true,
    imports: [
        CarouselComponent
    ],
  templateUrl: './training-center.component.html',
  styleUrl: './training-center.component.scss'
})
export class TrainingCenterComponent {
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
    { src: './assets/images/gym/silownia1.jpg', alt: 'Siłownia' },
    { src: './assets/images/gym/silownia2.jpg', alt: 'Siłownia' },
    { src: './assets/images/gym/silownia3.jpg', alt: 'Siłownia' },
    { src: './assets/images/gym/silownia4.jpg', alt: 'Siłownia' },
  ];
}
