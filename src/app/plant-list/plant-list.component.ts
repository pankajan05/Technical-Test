import { Component } from '@angular/core';
import { PlantCardComponent } from './plant-card/plant-card.component';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [PlantCardComponent],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css',
})
export class PlantListComponent {}
