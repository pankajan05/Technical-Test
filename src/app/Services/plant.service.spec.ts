import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlantService } from './plant.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

const mockPlants = [
  {
    address: '3563 Brenda Burgs',
    country: 'KI',
    division: 'Tires',
    id: 2,
    name: 'Espinoza Group',
  },
  {
    address: '060 Donna Walks',
    country: 'GN',
    division: 'Automotive',
    id: 5,
    name: 'Thornton and Sons',
  },
  // ... more plants
];

const mockHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
mockHttpClient.get.and.returnValue(of(mockPlants));
TestBed.configureTestingModule({
  providers: [
    PlantService,
    { provide: HttpClient, useValue: mockHttpClient }, // Replace the real HttpClient
  ],
});

describe('PlantService', () => {
  let service: PlantService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantService],
    });
    service = TestBed.inject(PlantService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected plant details (async)', (done) => {
    const expectedUrl =
      'https://sg666zbdmf.execute-api.us-east-1.amazonaws.com/dev';
    spyOn(httpClient, 'get').and.returnValue(
      of([
        {
          address: '3563 Brenda Burgs',
          country: 'KI',
          division: 'Tires',
          id: 2,
          name: 'Espinoza Group',
        },
        {
          address: '060 Donna Walks',
          country: 'GN',
          division: 'Automotive',
          id: 5,
          name: 'Thornton and Sons',
        },
      ])
    );

    service.getPlantDetails().subscribe((plants) => {
      expect(plants.length).toBe(2);
      expect(httpClient.get).toHaveBeenCalledWith(expectedUrl);
      done();
    });
  });

  it('should handle errors (async)', (done) => {
    const expectedError = new HttpErrorResponse({
      error: 'Something went wrong',
      status: 500,
    });
    spyOn(httpClient, 'get').and.returnValue(throwError(expectedError));

    service.getPlantDetails().subscribe(
      (plants) => fail('should not reach here'),
      (error) => {
        expect(error).toEqual(expectedError);
        done();
      }
    );
  });
});
