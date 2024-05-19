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
      beforeImage1: './assets/images/Metamorph/Mateusz_Zygmunt_Before_Front.jpg',
      afterImage1: './assets/images/Metamorph/Mateusz_Zygmunt_After_Front.jpg',
      beforeImage2: './assets/images/Metamorph/Mateusz_Zygmunt_Before_Side.jpg',
      afterImage2: './assets/images/Metamorph/Mateusz_Zygmunt_After_Side.jpg',
      description: 'Description of transformation 1'
    },
    {
      beforeImage1: './assets/images/Metamorph/Mariusz_Gilewicz_Before_Front.jpg',
      afterImage1: './assets/images/Metamorph/Mariusz_Gilewicz_After_Front.jpg',
      beforeImage2: './assets/images/Metamorph/Mariusz_Gilewicz_Before_Side.jpg',
      afterImage2: './assets/images/Metamorph/Mariusz_Gilewicz_After_Side.jpg',
      description: 'Description of transformation 2'
    },
  ];
}
