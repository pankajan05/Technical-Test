import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { PlantDetailComponent } from './plant-detail.component';
import { PlantService } from '../Services/plant.service';
import { Plant } from '../model/plant.model';

describe('PlantDetailComponent', () => {
  let component: PlantDetailComponent;
  let fixture: ComponentFixture<PlantDetailComponent>;
  let plantService: PlantService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, PlantDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '1' }),
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDetailComponent);
    component = fixture.componentInstance;
    plantService = TestBed.inject(PlantService);
    spyOn(plantService, 'getPlantDetail').and.returnValue(of({} as Plant));
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch plant detail on initialization', () => {
    expect(plantService.getPlantDetail).toHaveBeenCalledWith('1');
    expect(component.plant).toEqual({} as Plant);
  });

  it('should display the plant name', () => {
    const plantName = 'Test Plant';
    component.plant = { name: plantName } as Plant;
    fixture.detectChanges();
    const plantNameElement = fixture.nativeElement.querySelector('.title');
    expect(plantNameElement.textContent).toContain(plantName);
  });

  it('should display the plant description', () => {
    const plantDescription = 'This is a test plant description';
    component.plant = { description: plantDescription } as Plant;
    fixture.detectChanges();
    const plantDescriptionElement =
      fixture.nativeElement.querySelector('.plant-description');
    expect(plantDescriptionElement.textContent).toContain(plantDescription);
  });
});
