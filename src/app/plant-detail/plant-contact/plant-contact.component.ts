import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plant-contact',
  standalone: true,
  imports: [],
  templateUrl: './plant-contact.component.html',
  styleUrl: './plant-contact.component.css',
})
export class PlantContactComponent {
  @Input() address: string = '';
  @Input() manager: string = '';
}
