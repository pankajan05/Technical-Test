import { Component } from '@angular/core';
import { PlantDescriptionComponent } from './plant-description/plant-description.component';
import { PlantContactComponent } from './plant-contact/plant-contact.component';

@Component({
  selector: 'app-plant-detail',
  standalone: true,
  imports: [PlantDescriptionComponent, PlantContactComponent],
  templateUrl: './plant-detail.component.html',
  styleUrl: './plant-detail.component.css',
})
export class PlantDetailComponent {}
