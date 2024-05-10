import {AfterViewInit, Component, Input} from '@angular/core';
import {SlickCarouselModule} from "ngx-slick-carousel";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    SlickCarouselModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit {
  @Input() public slideConfig: any = null;
  @Input() public slides: {"src": string, "alt": string}[] | null = null;

  ngAfterViewInit() {
    this.slideConfig = this.slideConfig || {};
  }
}
