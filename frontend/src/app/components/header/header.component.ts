import {Component, EventEmitter, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        MatIcon,
        MatIconButton
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() sideNavToggle = new EventEmitter<unknown>();

}
