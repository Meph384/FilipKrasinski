import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HeroComponent {
  navigateToContact(): void {
    const selectionElement: HTMLElement = document.getElementById("contact")!;
    if (selectionElement) {
      selectionElement.scrollIntoView({behavior: "smooth"});
    }
  }
}
