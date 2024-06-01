import {AfterViewInit, Component, Input} from '@angular/core';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    SlickCarouselModule,
    NgClass
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit {
  @Input() public slideConfig: any = null;
  @Input() public slides: {"src": string, "alt": string}[] | null = null;

  public isModalOpen: boolean = false;
  public selectedSlide: {"src": string, "alt": string} | null = null;

  ngAfterViewInit() {
    this.slideConfig = this.slideConfig || {};
  }

  openModal(slide: {"src": string, "alt": string}) {
    this.selectedSlide = slide;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedSlide = null;
  }

  trackByFn(index: number, slide: {"src": string, "alt": string}) {
    return slide.src;
  }
}
