import { Component } from '@angular/core';
import {Transformation} from "../../interfaces/transformation.interface";

@Component({
  selector: 'app-metamorph-gallery',
  standalone: true,
  imports: [],
  templateUrl: './metamorph-gallery.component.html',
  styleUrl: './metamorph-gallery.component.scss'
})
export class MetamorphGalleryComponent {
  transformations: Transformation[] = [
    {
      beforeImage1: './assets/images/Metamorph/Mateusz BPrzed_ Przód.jpg',
      afterImage1: './assets/images/Metamorph/Mateusz BPo_ Przód.jpg',
      beforeImage2: './assets/images/Metamorph/Mateusz BPrzed_Bok.jpg',
      afterImage2: './assets/images/Metamorph/Mateusz BPo_ Bok.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/Mateusz ZPrzed_ Przód.jpg',
      afterImage1: './assets/images/Metamorph/Mateusz ZPo_ Przód.JPG',
      beforeImage2: './assets/images/Metamorph/Mateusz ZPrzed_ Bok .jpg',
      afterImage2: './assets/images/Metamorph/Mateusz ZPo_ Bok.JPG',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/Michał FPrzed_ Przód.JPG',
      afterImage1: './assets/images/Metamorph/Michał FPo_ Przód.JPG',
      beforeImage2: './assets/images/Metamorph/Michał FPrzed_ Bok.JPG',
      afterImage2: './assets/images/Metamorph/Michał FPo_ Bok.JPG',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/Bartek Przed_ Przód.jpg',
      afterImage1: './assets/images/Metamorph/Bartek Po_ Przód.jpg',
      beforeImage2: './assets/images/Metamorph/Bartek Przed_ TYŁ.jpg',
      afterImage2: './assets/images/Metamorph/Bartek Po_ TYŁ.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/BartekL Przed_ przód.JPG',
      afterImage1: './assets/images/Metamorph/BartekL Po_ Przód.jpg',
      beforeImage2: './assets/images/Metamorph/BartekL Przed_ bok.JPG',
      afterImage2: './assets/images/Metamorph/BartekL Po_ bok.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/Alxe_przed.JPG',
      afterImage1: './assets/images/Metamorph/Alex_po.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/Arleta_przed.jpg',
      afterImage1: './assets/images/Metamorph/Arleta_po.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/Mariusz GPrzed_Przód.jpg',
      afterImage1: './assets/images/Metamorph/Mariusz GPo_ Przód.jpg',
      beforeImage2: './assets/images/Metamorph/Mariusz GPrzed_Bok.jpg',
      afterImage2: './assets/images/Metamorph/Mariusz GPo_ Bok.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/Artur_przed.jpg',
      afterImage1: './assets/images/Metamorph/Artur_po.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/Błażej Przed_ Przód.JPG',
      afterImage1: './assets/images/Metamorph/Błażej Po_ Przód.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/Karolina Przed_ Przód.JPG',
      afterImage1: './assets/images/Metamorph/Karolina Po_ Przód.JPG',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/Konrad B Przed_Przód .JPG',
      afterImage1: './assets/images/Metamorph/Konrad B Po_Przód.JPG',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/Marcel M Przed_ Przód.jpg',
      afterImage1: './assets/images/Metamorph/Marcel M Po_ Przód.jpg',
      description: ''
    },

    {
      beforeImage1: './assets/images/Metamorph/Mikołaj KPrzed_ Przód.JPG',
      afterImage1: './assets/images/Metamorph/Mikołaj KPo_ Przód.JPG',
      description: ''
    }

  ];
}
