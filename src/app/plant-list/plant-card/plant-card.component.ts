import { Component, Input } from '@angular/core';
import { Plant } from '../../model/plant.model';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-plant-card',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './plant-card.component.html',
  styleUrl: './plant-card.component.css',
})
export class PlantCardComponent {
  @Input() plant: any;
}
