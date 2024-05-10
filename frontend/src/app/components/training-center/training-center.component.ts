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
    { src: 'https://treningpersonalny.eu/wp-content/uploads/2020/03/ctp_11.jpg', alt: 'Partner 1' },
    { src: 'https://treningpersonalny.eu/wp-content/uploads/2020/03/ctp_12.jpg', alt: 'Partner 2' },
    { src: 'https://treningpersonalny.eu/wp-content/uploads/2020/03/ctp_10.jpg', alt: 'Partner 3' },
    { src: 'https://treningpersonalny.eu/wp-content/uploads/2020/03/ctp_7-scaled.jpg', alt: 'Partner 4' },
  ];
}
