import { Component } from '@angular/core';
import {SlickCarouselModule} from "ngx-slick-carousel";

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [
    SlickCarouselModule
  ],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  testimonials = [
    {
      avatar: './assets/images/references/Agataw.jpg',
      name: 'Agata',
      description: 'Z całego serca mogę polecić współpracę treningową z Filipem. Jego profesjonalizm widoczny jest w doskonałym dopasowaniu planu treningowego do moich celów, przynosząc mi tym samym korzyści zdrowotne. Oprócz indywidualnego podejścia do każdego z podopiecznych, Filipa wyróżnia jego pogoda ducha i pozytywna energia, co sprawia, że treningi są nie tylko wyzwaniem, ale także przyjemnością. Filip zawsze służy radą i wsparciem, a także motywuje do spełniania swoich sportowych marzeń.'
    },
    {
      avatar: './assets/images/references/Aleksandrai.jpg',
      name: 'Aleksandra',
      description: 'Filip to pasjonat zdrowego stylu życia i tą pasją zaraża od pierwszego treningu :) Treningi są zróżnicowane, a Filip jest zaangażowany i komunikatywny oraz posiada ogromną wiedzę, którą chętnie się dzieli, dzięki czemu nie sposób się nudzić :) Polecam każdemu bez względu na stopień wtajemniczenia w sporcie ;)'
    },
    {
      avatar: './assets/images/references/Annad.jpg',
      name: 'Anna',
      description: 'Od wielu lat jestem związana ze sportem, ale siłownia zawsze wydawała mi się nudna i monotonna. To się zmieniło kiedy we wrzesniu trafiłam do Filipa. Precyzyjnie dobrał ćwiczenia do moich potrzeb, a przy tym dba o ich różnorodność. Dzięki treningom z Filipem widzę u siebie ogromny progress, zarówno jeśli chodzi o siłę, jak i o wygląd. Polecam Filipa, bo mimo młodego wieku ma ogromną wiedzę, znakomite podejście do klienta a przy tym jest świetnym gościem! Dzięki Filip,od dawna nie czułam się tak sprawna jak teraz!'
    },
    {
      avatar: './assets/images/references/Olgao.jpg',
      name: 'Olga',
      description: 'Polecam! Filip ma świetne podejście i dostosowuje treningi indywidualnie pod każdego. Poza tym bierze pod uwagę nawet twoje zwykłe zmęczenie czy zły humor. Ja po treningu zawsze wychodzę pełna sił, a najważniejsze że widzę efekty 💪🏻 uwielbiam! I serdecznie polecam '
    },
    {
      avatar: './assets/images/references/Bartekg.jpg',
      name: 'Bartek',
      description: 'Każdemu mogę szczerze polecić współpracę z Filipem. Od początku idealnie dobierał mi plany treningowe, dzięki czemu po dwóch miesiącach treningu widzę już ogromną zmianę na czym bardzo mi zależało. Kontakt z nim jest znakomity, na wszelkie pytania czy wątpliwości od razu odpowie, ale przede wszystkim jest bardzo wyrozumiały w kwestiach treningu, gorszego samopoczucia etc. Nie mogłem lepiej trafić! :)'
    },
    {
      avatar: './assets/images/references/Beatkaw.jpg',
      name: 'Beata',
      description: 'Właściwy człowiek na właściwym miejscu🦾 Ogromna wiedza, świetne podejście i cierpliwość. Serdecznie polecam..'
    },
    {
      avatar: './assets/images/references/Daniels.jpg',
      name: 'Daniel',
      description: 'Mam tę przyjemność trenować z Filipem od 3 miesięcy. Pełen profesjonalizm! Zawsze można na niego liczyć ! Motywuje, doradza i w pozytywnym znaczeniu tego słowa „gani”:) Nigdy nie odmawia pomocy. Jest bardzo elastyczny w ustaleniu terminu zajęć. Rosnę jak na drożdżach z tym chłopakiem 💪🏼 Jak na treningi to tylko do Filipa . Polecam z czystym sumieniem. Nie zawiedzie Was.'
    },
    {
      avatar: './assets/images/references/Gracjanas.jpg',
      name: 'Gracjana',
      description: 'Trening z Filipem to nie tylko efektywne ćwiczenia fizyczne, ale także wsparcie merytoryczne i emocjonalne, które pomaga Mi osiągnąć najlepsze rezultaty. Polecam'
    },
    {
      avatar: './assets/images/references/Justynal.jpg',
      name: 'Justyna',
      description: 'Od roku, stale, kilka godzin tygodniowo trenuje Pole Dance.\n' +
        'Postanowiłam polepszyć swoją kondycję fizyczną, aby moje treningi były efektywniejsze. W zaledwie 3 miesiące udało nam się z Filip Krasiński wzmocnić chwyt i nabrać więcej siły do podciągania się na rurce. A to dopiero początek 😊\n' +
        'Treningi z nim są dla mnie dużą przyjemnością. Ćwiczenia są zróżnicowane , ale bazujemy na podstawach, ćwiczeniach złożonych. Jest cierpliwy i elastyczny, co powoduje, że trening jest zawsze dobrze dostosowany do moich aktualnych możliwości.\n' +
        '\n' +
        'Nieprzypadkowo został mi polecany ten trener 💪🏼\n' +
        'Polecam i ja!!! 👌🏼'
    },
    {
      avatar: './assets/images/references/Konradb.jpg',
      name: 'Kondrad',
      description: 'Rok 2022- spadek nastroju, apatyczność, deprecha a co za tym idzie spadek formy, sylwetki i zdrowia… od 2023 roku zacząłem współpracę z TYM Chłopem i mogę powiedzieć jedno: dziś żałuje że nie trafiłem na Filipa rok wcześniej! Polecam każdemu!'
    },
    {
      avatar: './assets/images/references/Magdalenag.jpg',
      name: 'Magdalena',
      description: 'Zgłosiłam się do Filipa, ponieważ zmagałam się z bólami pleców i kolan. W ciągu pół roku udało nam się wzmocnić ciało ćwiczeniami, które nie sprawiały mi dyskomfortu. Trening zawsze był dopasowany do moich potrzeb i możliwości.Od czasu rozpoczęcia treningów czuje, że wróciłam do formy i zrobienie 20km spaceru przestało być problemem. Polecam serdecznie jeśli chcecie z powrotem cieszyć się życiem!'
    },
    {
      avatar: './assets/images/references/Marcinb.jpg',
      name: 'Marcin',
      description: 'Jestem bardzo zadowolony z progresu treningów personalnych u Filipa. Dobrane odpowiednie ćwiczenia oraz dobre podejście motywacyjne pozwala mi na osiągniecie lepszej sylwetki oraz wyników w podnoszonych ciężarach. Jest to najlepszy trener we Wrocławiu z którym nie tylko zrobisz fantastyczny progres w sferze fizycznej ale  podbudujesz swoja motywacje. Cenie Filipa za profeesionalne podejscie w doborze ćwiczen .Zajęciach indywidualne przebiegają,  jak najlepszy wypad z przyjacielem na siłowni. polecam :)'
    },
    {
      avatar: './assets/images/references/Mariuszg.jpg',
      name: 'Mariusz',
      description: 'Z człowieka z mottem "Sport to totalnie nie zdrowie" w 3 miesiące zrobil coś dziwnego - polubiłem siłownię, nie czuję się już tam obco, a ćwiczenia włączyłem w stały plan tygodnia. Dodatkowo, czuję się o wiele lepiej niż wcześniej (stałe problemy z bólem pleców). Filip jest bezpośredni, dokładnie tłumaczy i koryguje postawę, dzięki czemu trening ma sens i nie powoduje urazów czy kontuzji. Z czystym sumieniem polecam tego allegrowicza.'
    },
    {
      avatar: './assets/images/references/Mateuszba.jpg',
      name: 'Mateusz',
      description: 'I was a bit apprehensive to find a personal trainer but one session with Filip, I knew I had nothing to worry about. He knows his stuff and is patient and non judgemental. His encouragement has helped me achieve my goals. I wouldn’t hesitate to recommend him. Big plus he’s +LGBTQIA friendly which has made all the difference'
    },
    {
      avatar: './assets/images/references/Mateuszz.jpg',
      name: 'Mateusz',
      description: 'Filip to prawdziwy profesjonalista. Podczas rocznej współpracy z Jego pomocą udało mi się zrzucić zbędne kilogramy ( ze 105 na 83), poprawić sylwetkę i wyrobić zdrowe nawyki dietetyczne. Dodatkowo atmosfera jaką Filip tworzy na treningach sprawia, że po prostu chce się trenować.'
    },
    {
      avatar: './assets/images/references/Michalf.jpg',
      name: 'Michał',
      description: 'Treningi z Filipem to czysta przyjemność, dba o progress na każdym treningu, zapewnia swobodną i miłą atmosferę, a co najważniejsze monitoruje postępy i na bieżąco doradza w kwestiach związanych z dietą i pozostałymi aktywnościami, aby realizować wyznaczone wspólnie cele. Serdecznie polecam. :)'
    },
    {
      avatar: './assets/images/references/Nataliaa.jpg',
      name: 'Natalia',
      description: 'Właściwy człowiek na właściwym miejscu.\n' +
        'Polecam przede wszystkim ze względu na indywidualne podejście, profesjonalizm i wsparcie ! Czuwa nad poprawną techniką wykonywania ćwiczeń, monitoruje zmiany wagi i wymiarów. Treningi są urozmaicone, prowadzone w super atmosferze\n' +
        'Jeśli myślisz, że coś jest niemożliwe i nie dasz rady czegoś zrobić – idź do Filipa! On Ci pokaże, że się da, a następnie będziesz pamiętać o tym kilka kolejnych dni po treningu! 😉 z czystym sercem polecam !'
    },
    {
      avatar: './assets/images/references/Oksanat.jpg',
      name: 'Oksana',
      description: 'Od wielu lat trenowałam na siłowni na własną rękę i choć często myślałam o współpracy z trenerem personalnym nigdy wcześniej się na nią nie zdecydowałam. Współpracę z Filipem podjęłam, bo jest on dokładny, zwraca uwagę na szczegóły i pracuje z pasją. Z całego serca polecam współpracę z Filipem, również tym, którym trening siłowy nie jest obcy.'
    },
    {
      avatar: './assets/images/references/Paulinab.jpg',
      name: 'Paulina',
      description: 'Zaczęłam trenować z Filipem ze względu na uporczywy ból kolan i problemy z kręgosłupem, nieco sceptycznie nastawiona, ponieważ szerokopojęte zajęcia fitnesowe nie przynosiły efektu.\n' +
        'I faktycznie, po kilku tygodniach widać już znaczącą różnicę, poprawę mobilności, sprawności i siły! Filip modyfikuje ćwiczenia tak, aby były dopasowane do twoich możliwości, poziomu zaawansowania i potrzeb i motywuje do pracy. Jest otwartą i kontaktową osobą, zawsze stara się pomóc. Zróbcie coś dobrego dla swojego ciała i głowy i wpadajcie na trening ;)'
    },
    {
      avatar: './assets/images/references/Sergiin.jpg',
      name: 'Sergii',
      description: 'Polecam - profesjonalizm, wiedza oraz otwartość w komunikacji z klientem.'
    },
    {
      avatar: './assets/images/references/Vadyms.jpg',
      name: 'Vadym',
      description: 'Polecam Filipa jako trenera personalnego. Oprócz poprawy sprawności fizycznej Filip pomaga mi również w rehabilitacji po rekonstrukcji zerwanych więzadeł kolana. Przyjazna atmosfera i odpowiedzialne podejście do szkoleń.'
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

}
