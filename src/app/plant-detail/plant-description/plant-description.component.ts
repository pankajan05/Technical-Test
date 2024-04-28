import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plant-description',
  standalone: true,
  imports: [],
  templateUrl: './plant-description.component.html',
  styleUrl: './plant-description.component.css',
})
export class PlantDescriptionComponent {
  @Input() description: any;
}
