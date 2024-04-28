import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantContactComponent } from './plant-contact.component';

describe('PlantContactComponent', () => {
  let component: PlantContactComponent;
  let fixture: ComponentFixture<PlantContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
