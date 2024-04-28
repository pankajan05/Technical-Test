import { Component, OnInit } from '@angular/core';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantService } from '../Services/plant.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [PlantCardComponent, CommonModule, HeaderComponent],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css',
})
export class PlantListComponent implements OnInit {
  plants: any;

  constructor(private plantService: PlantService, private router: Router) {}

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

  navigate(plantId: number) {
    this.router.navigate(['/plants/' + plantId]);
  }
}
