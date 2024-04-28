import { Component, Input, InputDecorator } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() title: string = 'Plants';
  @Input() subtitle: string | undefined;

  constructor() {}

  ngOnInit() {}
}
