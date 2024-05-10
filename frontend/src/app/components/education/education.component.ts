import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        paddingTop: '0',
        paddingBottom: '0',
        opacity: '0'
      })),
      state('expanded', style({
        height: '*', // Allows the content to expand to its natural height
        opacity: '1'
      })),
      transition('expanded <=> collapsed', animate('300ms ease-out'))
    ])
  ]
})
export class EducationComponent {
  items = [
    {
      name: 'Certified Angular Developer',
      description: 'Certification demonstrating advanced Angular skills.',
      imageUrl: 'https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg',
      state: 'expanded'
    },
    {
      name: 'Frontend Development with Angular',
      description: 'Learn to build dynamic and responsive web applications using Angular.',
      imageUrl: '',
      state: 'collapsed'
    },
    {
      name: 'Advanced Angular Techniques',
      description: 'Dive deeper into Angular with advanced components and directives.',
      imageUrl: '',
      state: 'collapsed'
    }
  ];

  toggle(item: any): void {
    item.state = item.state === 'expanded' ? 'collapsed' : 'expanded';
  }
}
