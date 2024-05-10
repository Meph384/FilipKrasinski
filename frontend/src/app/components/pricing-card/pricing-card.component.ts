import { Component } from '@angular/core';
import {PricingCard} from '../../interfaces/pricing-card.interface';
@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss'
})
export class PricingCardComponent {
  cards: PricingCard[] = [
    {
      backgroundImage: 'url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victorfreitas-841130.jpg&fm=jpg")',
      title: 'Treningi personalne',
      shortDescription: 'Ideal for beginners and advanced.',
      longDescription: 'This plan includes 5 sessions per month, nutrition guidance, and 24/7 gym access.',
      price: 'Umów się na bezpłatną konsultację'
    },
    {
      backgroundImage: 'url("https://cdn.create.vista.com/api/media/small/239945694/stock-photo-athletic-young-couple-doing-abs-exercise-yoga-mats-gym")',
      title: 'Treningi w parach',
      shortDescription: 'Ideal for couples.',
      longDescription: 'This plan includes 5 sessions per month, nutrition guidance, and 24/7 gym access.',
      price: 'Umów się na bezpłatną konsultację'
    },
    {
      backgroundImage: 'url("https://st2.depositphotos.com/1637787/8805/i/450/depositphotos_88059202-stock-photo-man-flipping-a-tire-at.jpg")',
      title: 'Indywidualny Plan Treningowy',
      shortDescription: 'Ideal for couples.',
      longDescription: 'This plan includes 7 sessions per month, nutrition guidance, and 24/7 gym access.',
      price: '200zł'
    },
    {
      backgroundImage: 'url("https://media.istockphoto.com/id/1365886686/photo/shot-of-a-woman-working-out-with-a-kettle-bell.jpg?s=612x612&w=0&k=20&c=dP49_35EQgBeERghq_xnYEAvDLBXn2Vt0Xhx9rdWLl0=")',
      title: 'Prowadzenie online #Team Krasinski',
      shortDescription: 'Ideal for couples.',
      longDescription: 'This plan includes 5 sessions per month, nutrition guidance, and 24/7 gym access.',
      price: '300zł/msc'
    },
  ];
}
