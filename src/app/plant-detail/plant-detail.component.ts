import { Component, OnInit } from '@angular/core';
import { PlantDescriptionComponent } from './plant-description/plant-description.component';
import { PlantContactComponent } from './plant-contact/plant-contact.component';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../Services/plant.service';

@Component({
  selector: 'app-plant-detail',
  standalone: true,
  imports: [PlantDescriptionComponent, PlantContactComponent],
  templateUrl: './plant-detail.component.html',
  styleUrl: './plant-detail.component.css',
})
export class PlantDetailComponent implements OnInit {
  private id: any;
  public plant: any;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.plantService.getPlantDetail(this.id).subscribe((data: any) => {
      this.plant = data;
    });
  }
}
