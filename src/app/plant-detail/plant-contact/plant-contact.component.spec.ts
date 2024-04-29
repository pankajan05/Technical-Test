import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantContactComponent } from './plant-contact.component';

describe('PlantContactComponent', () => {
  let component: PlantContactComponent;
  let fixture: ComponentFixture<PlantContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty address by default', () => {
    expect(component.address).toEqual('');
  });

  it('should have undefined manager by default', () => {
    expect(component.manager).toEqual('');
  });

  it('should update address when input changes', () => {
    const newAddress = '123 Main St';
    component.address = newAddress;
    expect(component.address).toEqual(newAddress);
  });

  it('should update manager when input changes', () => {
    const newManager = 'John Doe';
    component.manager = newManager;
    expect(component.manager).toEqual(newManager);
  });
});
