import { Component, OnInit } from '@angular/core';
import { PlantDescriptionComponent } from './plant-description/plant-description.component';
import { PlantContactComponent } from './plant-contact/plant-contact.component';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../Services/plant.service';
import { Plant } from '../model/plant.model';
import { HeaderComponent } from '../common/header/header.component';

@Component({
  selector: 'app-plant-detail',
  standalone: true,
  imports: [PlantDescriptionComponent, PlantContactComponent, HeaderComponent],
  templateUrl: './plant-detail.component.html',
  styleUrl: './plant-detail.component.css',
})
export class PlantDetailComponent implements OnInit {
  private id: any;
  public plant: Plant = {} as Plant;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.plantService.getPlantDetail(this.id).subscribe((data: any) => {
        this.plant = data;
      });
    }
  }
}
