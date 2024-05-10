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
    { src: 'https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg', alt: 'Partner 1' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png', alt: 'Partner 2' },
    { src: 'https://www.ventrilo.com/images/WebBanner.png', alt: 'Partner 5' }
  ];
}
