import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    MatButton
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  paragraphs: string[] = [
    'Ta strona jest o tym, jak mogę Ci pomóc. Współpracując ze mną pomogę Ci osiągnąć twój cel treningowy, bez względu na to czy chcesz zredukować wagę, wymodelować sylwetkę, zbudować masę mięśniową, poprawić swoją kondycję i samopoczucie, czy wrócić do sprawności po przebytej kontuzji. Jednak zanim weźmiemy się do roboty, napisze trochę o sobie żebyśmy mogli się lepiej poznać.',
    'Ze względu na moja pasję do sportu od najmłodszych lat, zdecydowałem się rozpocząć naukę w Szkole Mistrzostwa Sportowego “SMS Junior” we Wrocławiu. Już w szkole średniej postawiłem na rozwój w kierunku treningu personalnego. Ukończyłem dziesiątki szkoleń z zakresu programowania treningowego, dietetyki oraz doboru suplementacji. ' +
    'Ciągła chęć rozwoju swoich umiejętności, jako trenera personalnego oraz tytaniczna praca, jaką wykonywałem każdego dnia, pozwoliła mi zrzeszyć coraz większego grono ludzi, którzy wraz ze mną osiągnęli swój wymarzony cel treningowy.',
    '3 lata później oto jestem! Trener premium, wykształcony z dużą dawką nie tylko wiedzy, ale przede wszystkim doświadczenia! Współzałożyciel “Holistic Sport Center”- centrum fitness, które jest TOP miejscem na sportowej mapie Wrocławia. Jednak to wszystko nie udałoby mi się bez Ciebie i Ciebie i Ciebie, bez Was wszystkich! Wszystkich, tych, którzy zaufali, że swoją wiedzą, charyzmą oraz zaangażowaniem pomoże im osiągnąć sukces. ',
    'Możecie być pewni, że moja praca opiera się na solidnej wiedzy z zakresu treningu funkcjonalnego. Potrafię łączyć różnorodne techniki i metody dostosowane do potrzeb konkretnej osoby. Nieustannie dbam o to, aby treningi były nie tylko skuteczne, ale także bezpieczne i motywujące, jednak niełatwe, idąc na łatwiznę nie byłbym tu, gdzie teraz jestem. Moim celem jest nie tylko pomoc w transformacji fizycznej, ale także wsparcie w budowaniu zdrowych nawyków i pozytywnego podejścia do aktywności fizycznej, które przynosi długotrwałe korzyści dla zdrowia i samopoczucia. '
  ];

  showMore: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleReadMore(): void {
    this.showMore = !this.showMore;
  }
}
