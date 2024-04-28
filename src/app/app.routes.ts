import { Routes } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: PlantListComponent,
    title: 'Home page',
  },
  {
    path: 'plants/:id',
    component: PlantDetailComponent,
    title: 'Plant details',
  },
];
