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
      title: 'Trening personalny',
      shortDescription: '',
      longDescription: 'Chcesz zrzucić zbędne kilogramy, zbudować masę mięśniową, zadbać o swoje zdrowie, a może wzmocnić swoje ciało? Nauczyć się poprawnie wykonywać ćwiczenia. Ta oferta jest skierowana właśnie dla Ciebie! Moja stała obecność podczas wykonywania ćwiczeń, odpowiedni ich dobór, nauka świadomości naszego ciała oraz ruchu pomoże Tobie osiągnąć zamierzone cele.',
      price: 'Umów się na konsultację'
    },
    {
      backgroundImage: 'url("./assets/images/offer/wspolpraca online.jpg")',
      title: 'Współpraca Online #TeamKrasiński',
      shortDescription: '',
      longDescription: 'W ramach opieki trenerskiej zapewnię Ci zindywidualizowany oraz spersonalizowany plan treningowy, szczegółowy rozkład kalorii i makroskładników oraz suplementację, dostosowaną do Twoich unikalnych potrzeb i celów treningowych. \n' +
        'Proces ten będzie oparty na regularnych raportach oraz stałym kontakcie, abyśmy mogli monitorować postępy.',
      price: '350 zł'
    },
    {
      backgroundImage: 'url("./assets/images/offer/Indywidualny plan treningowy.jpg")',
      title: 'Indywidualny Plan Treningowy',
      shortDescription: '',
      longDescription: 'Po dokładnej analizie kwestionariusza osobowego, opracuje dla Ciebie spersonalizowany plan treningowy, który jest idealnie dostosowany do Twoich celów i potrzeb. W planie zawarty zostanie odpowiedni dobór ćwiczeń oraz parametrów takich jak ilość serii, powtórzeń, skala RiR, tempo pracy oraz ilość przerw między seriami.',
      price: '200 zł'
    },
    {
      backgroundImage: 'url("./assets/images/offer/plan zywieniowy.jpg")',
      title: 'Plan Żywieniowy',
      shortDescription: '',
      longDescription: 'Jeśli pragniesz osiągnąć swoje cele zdrowotne poprzez właściwe odżywianie, skorzystaj z naszej oferty współpracy z doświadczonym dietetykiem, który zapewni Ci spersonalizowaną i profesjonalną pomoc.',
      price: '200 zł'
    },
  ];
}
