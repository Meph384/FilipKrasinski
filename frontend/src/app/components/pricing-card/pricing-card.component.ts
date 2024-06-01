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
      backgroundImage: 'url("./assets/images/offer/Trening personalny.jpg")',
      title: 'Treningi personalne',
      shortDescription: 'krótki opis od razu widoczny',
      longDescription: 'dłuższy tekst po najechaniu',
      price: 'Umów się na bezpłatną konsultację'
    },
    {
      backgroundImage: 'url("./assets/images/offer/Trening w parach.jpg")',
      title: 'Treningi w parach',
      shortDescription: 'krótki opis od razu widoczny',
      longDescription: 'dłuższy tekst po najechaniu.',
      price: 'Umów się na bezpłatną konsultację'
    },
    {
      backgroundImage: 'url("./assets/images/offer/Indywidualny plan treningowy.jpg")',
      title: 'Indywidualny Plan Treningowy',
      shortDescription: 'Spersonalizowny plan treningowy',
      longDescription: 'Przygotuję dla Ciebie plan dostosowany do Twoich potrzeb z uwzględnieniem Twojego stylu życia, nawyków żywieniowych i czasu który jesteś w stanie poświęcić na zmianę!',
      price: '200zł'
    },
    {
      backgroundImage: 'url("https://media.istockphoto.com/id/1365886686/photo/shot-of-a-woman-working-out-with-a-kettle-bell.jpg?s=612x612&w=0&k=20&c=dP49_35EQgBeERghq_xnYEAvDLBXn2Vt0Xhx9rdWLl0=")',
      title: 'Współpraca online #TeamKrasiński',
      shortDescription: 'opis krótki',
      longDescription: 'opis długi',
      price: '300zł/msc'
    },
  ];
}
