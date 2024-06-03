import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIcon } from '@angular/material/icon';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    NgOptimizedImage,
    MatButton
  ],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        paddingTop: '0',
        paddingBottom: '0',
        opacity: '0'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1'
      })),
      transition('expanded <=> collapsed', animate('300ms ease-out'))
    ])
  ]
})
export class EducationComponent {
  items = [
    {
      name: 'Certyfikat IPSS',
      description: '',
      imageUrl: './assets/images/certificates/Certifikat IPSS.png',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Programowanie treningu siłowego 2023"',
      description: '',
      imageUrl: './assets/images/certificates/Programowanie Treningu silowego.jpg',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Tworzenie planu treningowego od podstaw"',
      description: '',
      imageUrl: './assets/images/certificates/Tworzenie planu treningowe od podstaw.png',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Vademecum Pośladków część 3"',
      description: '',
      imageUrl: './assets/images/certificates/Certifikat-vademecum-posladkow-czesc-3.png',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Strategie doboru ćwiczeń"',
      description: '',
      imageUrl: './assets/images/certificates/Certifikat-strategie-doboru-cwiczen.jpg',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Vademecum Pośladków część 2"',
      description: '',
      imageUrl: './assets/images/certificates/Certifikat-vademecum-posladkow-czesc-2.jpg',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Testy funkcjonalne"',
      description: '',
      imageUrl: './assets/images/certificates/certificate Testy funkcjonalne.jpg',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Vademecum Pośladków część 1"',
      description: '',
      imageUrl: './assets/images/certificates/Certifikat-vademecum-posladkow-czesc-1.jpg',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Historia niejednego pośladka"',
      description: '',
      imageUrl: './assets/images/certificates/Historia Niejednego posladka.jpg',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Programowanie treningowe w praktyce"',
      description: '',
      imageUrl: './assets/images/certificates/certificate programowanie treningowe w praktyce.jpg',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Analiza i interpretacja planów treningowych - lower body"',
      description: '',
      imageUrl: './assets/images/certificates/certificate analiza i interpretacja planow treningowy - lower body.jpg',
      state: 'expanded'
    },
    {
      name: 'Certyfikat "Analiza i interpretacja planów treningowych - upper body"',
      description: '',
      imageUrl: './assets/images/certificates/certificate analiza i interpretacja planow treningowych - upper body.jpg',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Prowadzenie dietetyczne krok po kroku"',
      description: '',
      imageUrl: './assets/images/certificates/certificate prowadzenie dietetyczne krok po kroku.jpg',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Dietetyka sportowa"',
      description: '',
      imageUrl: './assets/images/certificates/certificate dietetyka sportowa.jpg',
      state: 'collapsed'
    },
    {
      name: 'Certyfikat "Programowanie treningu siłowego 2020"',
      description: '',
      imageUrl: './assets/images/certificates/certificate programowanie treningu silowego.jpg',
      state: 'collapsed'
    },
  ];

  initialDisplayCount = 5;
  itemsIncrement = 5;

  visibleItems = this.items.slice(0, this.initialDisplayCount);

  get showMoreButtonVisible(): boolean {
    return this.visibleItems.length < this.items.length;
  }

  toggle(item: any): void {
    item.state = item.state === 'expanded' ? 'collapsed' : 'expanded';
  }

  showMore(): void {
    const newCount = this.visibleItems.length + this.itemsIncrement;
    this.visibleItems = this.items.slice(0, newCount);
  }

  trackByFn(index: number): number {
    return index;
  }
}
