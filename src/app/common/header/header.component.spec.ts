import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('.title');
    expect(titleElement.textContent).toContain('Test Title');
  });

  it('should display the subtitle', () => {
    component.subtitle = 'Test Subtitle';
    fixture.detectChanges();
    const subtitleElement = fixture.nativeElement.querySelector('.subtitle');
    expect(subtitleElement.textContent).toContain('Test Subtitle');
  });

  it('should display back button', () => {
    component.subtitle = 'Test Subtitle';
    fixture.detectChanges();
    const backButton = fixture.nativeElement.querySelector('.back-button');
    expect(backButton).toBeTruthy();
  });
});
