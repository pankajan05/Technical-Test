import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;

  constructor(private location: Location) {}

  navigate() {
    this.location.back();
  }
}
