import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroComponent} from "./components/hero/hero.component";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {AboutComponent} from "./components/about/about.component";
import {PricingCardComponent} from "./components/pricing-card/pricing-card.component";
import {EducationComponent} from "./components/education/education.component";
import {MetamorphGalleryComponent} from "./components/metamorph-gallery/metamorph-gallery.component";
import {PartnersComponent} from "./components/partners/partners.component";
import {TrainingCenterComponent} from "./components/training-center/training-center.component";
import {SocialMediaSidebarComponent} from "./components/social-media-sidebar/social-media-sidebar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TrainingCenterLocationComponent} from "./components/training-center-location/training-center-location.component";
import {ReferencesComponent} from "./components/references/references.component";
import {ContactComponent} from "./components/contact/contact.component";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, MatIcon, MatIconButton, MatSidenav, MatSidenavContainer, MatSidenavContent, MatListItem, MatNavList, AboutComponent, PricingCardComponent, EducationComponent, MetamorphGalleryComponent, PartnersComponent, TrainingCenterComponent, TrainingCenterLocationComponent, SocialMediaSidebarComponent, FooterComponent, ReferencesComponent, ContactComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  navigateToSection(sectionId: string, sidenav: MatSidenav): void {
    sidenav.close().then(() => {
      const selectionElement: HTMLElement = document.getElementById(sectionId)!;
      if (selectionElement) {
        selectionElement.scrollIntoView({behavior: "smooth"});
      }
    });
  }
}
