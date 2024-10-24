import { Component } from '@angular/core';
import {Transformation} from "../../interfaces/transformation.interface";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-metamorph-gallery',
  standalone: true,
  imports: [
    MatButton,
    NgIf
  ],
  templateUrl: './metamorph-gallery.component.html',
  styleUrl: './metamorph-gallery.component.scss'
})
export class MetamorphGalleryComponent {
  transformations: Transformation[] = [
    {
      beforeImage1: './assets/images/Metamorph/MateuszZPrzed_Przod.jpg',
      afterImage1: './assets/images/Metamorph/MateuszZPo_Przod.JPG',
      beforeImage2: './assets/images/Metamorph/MateuszZPrzed_Bok.jpg',
      afterImage2: './assets/images/Metamorph/MateuszZPo_Bok.JPG',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/MichalFPrzed_Przod.JPG',
      afterImage1: './assets/images/Metamorph/MichalFPo_Przod.JPG',
      beforeImage2: './assets/images/Metamorph/MichalFPrzed_Bok.JPG',
      afterImage2: './assets/images/Metamorph/MichalFPo_Bok.JPG',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/MariuszGPrzed_Przod.jpg',
      afterImage1: './assets/images/Metamorph/MariuszGPo_Przod.jpg',
      beforeImage2: './assets/images/Metamorph/MariuszGPrzed_Bok.jpg',
      afterImage2: './assets/images/Metamorph/MariuszGPo_Bok.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/BlazejPrzed_Przod.JPG',
      afterImage1: './assets/images/Metamorph/BlazejPo_Przod.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/MateuszBPrzed_Przod.jpg',
      afterImage1: './assets/images/Metamorph/MateuszBPo_Przod.jpg',
      beforeImage2: './assets/images/Metamorph/MateuszBPrzed_Bok.jpg',
      afterImage2: './assets/images/Metamorph/MateuszBPo_Bok.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/MikolajKPrzed_Przod.JPG',
      afterImage1: './assets/images/Metamorph/MikolajKPo_Przod.JPG',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/BartekPrzed_Przod.jpg',
      afterImage1: './assets/images/Metamorph/BartekPo_Przod.jpg',
      beforeImage2: './assets/images/Metamorph/BartekPrzed_TYl.jpg',
      afterImage2: './assets/images/Metamorph/BartekPo_TYl.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/BartekLPrzed_przod.JPG',
      afterImage1: './assets/images/Metamorph/BartekLPo_Przod.jpg',
      beforeImage2: './assets/images/Metamorph/BartekLPrzed_bok.JPG',
      afterImage2: './assets/images/Metamorph/BartekLPo_bok.jpg',
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
      beforeImage1: './assets/images/Metamorph/Artur_przed.jpg',
      afterImage1: './assets/images/Metamorph/Artur_po.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/KarolinaPrzed_Przod.JPG',
      afterImage1: './assets/images/Metamorph/KarolinaPo_Przod.JPG',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/KonradBPrzed_Przod.JPG',
      afterImage1: './assets/images/Metamorph/KonradBPo_Przod.JPG',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/MarcelMPrzed_Przod.jpg',
      afterImage1: './assets/images/Metamorph/MarcelMPo_Przod.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/JakubGPrzed_Przod.jpg',
      afterImage1: './assets/images/Metamorph/JakubGPo_Przod.jpg',
      beforeImage2: './assets/images/Metamorph/JakubGPrzed_Bok.jpg',
      afterImage2: './assets/images/Metamorph/JakubGPo_Bok.jpg',
      description: ''
    },
    {
      beforeImage1: './assets/images/Metamorph/Jakub_Go_Przod__Przed.jpg',
      afterImage1: './assets/images/Metamorph/JakubGo_przod_po.jpg',
      beforeImage2: './assets/images/Metamorph/Jakub_Go_Bok_przed.jpg',
      afterImage2: './assets/images/Metamorph/JakubGo_bok_po.jpg',
      description: ''
    }
  ];

  initialDisplayCount = 6;
  itemsIncrement = 6;

  visibleItems = this.transformations.slice(0, this.initialDisplayCount);
  get showMoreButtonVisible(): boolean {
    return this.visibleItems.length < this.transformations.length;
  }

  showMore(): void {
    const newCount = this.visibleItems.length + this.itemsIncrement;
    this.visibleItems = this.transformations.slice(0, newCount);
  }

  trackByFn(index: number): number {
    return index;
  }
}
