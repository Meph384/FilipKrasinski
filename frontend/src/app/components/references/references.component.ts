import { Component } from '@angular/core';
import {SlickCarouselModule} from "ngx-slick-carousel";

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [
    SlickCarouselModule
  ],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  testimonials = [
    {
      avatar: './assets/images/Filip_avatar.png',
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      avatar: './assets/images/Filip_avatar.png',
      name: 'Jane Smith',
      description: 'Pellentesque ac nibh vitae urna vehicula posuere.'
    },
    {
      avatar: './assets/images/Filip_avatar.png',
      name: 'Alice Johnson',
      description: 'Aenean imperdiet, est sed dapibus varius, nunc augue gravida purus.'
    },
    {
      avatar: './assets/images/Filip_avatar.png',
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      avatar: './assets/images/Filip_avatar.png',
      name: 'Jane Smith',
      description: 'Pellentesque xdddd xddddx dd ac nibh vitae urna vehicula posuere.'
    },
    {
      avatar: './assets/images/Filip_avatar.png',
      name: 'Alice Johnson',
      description: 'Aenean imperdiet, est sed dapibus varius, nunc augue gravida purus. Aenean imperdiet, est sed dapibus' +
        ' varius, nunc augue gravida purus. Aenean imperdiet, est sed dapibus varius, nunc augue gravida purus.'
    }
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
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

}
