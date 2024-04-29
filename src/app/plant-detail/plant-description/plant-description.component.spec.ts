import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDescriptionComponent } from './plant-description.component';

describe('PlantDescriptionComponent', () => {
  let component: PlantDescriptionComponent;
  let fixture: ComponentFixture<PlantDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantDescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the plant description', () => {
    const plantDescription = 'This is a test plant description';
    component.description = plantDescription;
    fixture.detectChanges();
    const plantDescriptionElement =
      fixture.nativeElement.querySelector('.plant-description');
    expect(plantDescriptionElement.textContent).toContain(plantDescription);
  });

  it('should display a default message if plant description is not provided', () => {
    component.description = null;
    fixture.detectChanges();
    const defaultDescription = 'No description available';
    const plantDescriptionElement =
      fixture.nativeElement.querySelector('.plant-description');
    expect(plantDescriptionElement.textContent).toContain(defaultDescription);
  });
});
