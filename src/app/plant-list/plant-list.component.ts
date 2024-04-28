import { Component, OnInit } from '@angular/core';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantService } from '../Services/plant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [PlantCardComponent, CommonModule],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css',
})
export class PlantListComponent implements OnInit {
  plants: any;

  constructor(private plantService: PlantService) {}

  ngOnInit() {
    this.plantService.getPlantDetails().subscribe((data: any) => {
      this.plants = data.results;
    });
  }

  loadMore() {
    this.plantService.loadMore().subscribe((data: any) => {
      this.plants = this.plants.concat(data.results);
    });
  }
}
