import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlantListComponent } from './plant-list.component';
import { PlantService } from '../Services/plant.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let plantService: PlantService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        PlantListComponent,
      ],
      providers: [PlantService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    plantService = TestBed.inject(PlantService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch plant details on initialization', () => {
    const mockPlantDetails = {
      results: [
        { id: 1, name: 'Plant 1' },
        { id: 2, name: 'Plant 2' },
      ],
    };
    spyOn(plantService, 'getPlantDetails').and.returnValue(
      of(mockPlantDetails)
    );

    component.ngOnInit();

    expect(component.plants).toEqual(mockPlantDetails.results);
  });

  it('should load more plants', () => {
    const mockExistingPlants = [{ id: 1, name: 'Plant 1' }];
    const mockNewPlants = {
      results: [
        { id: 2, name: 'Plant 2' },
        { id: 3, name: 'Plant 3' },
      ],
    };
    spyOn(plantService, 'loadMore').and.returnValue(of(mockNewPlants));

    component.plants = mockExistingPlants;
    component.loadMore();

    expect(component.plants).toEqual([
      ...mockExistingPlants,
      ...mockNewPlants.results,
    ]);
  });

  it('should navigate to plant details', () => {
    const plantId = 1;
    const routerSpy = spyOn(component.router, 'navigate');

    component.navigate(plantId);

    expect(routerSpy).toHaveBeenCalledWith(['/plants/' + plantId]);
  });
});
