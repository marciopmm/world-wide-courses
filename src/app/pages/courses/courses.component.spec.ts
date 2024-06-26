import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesPageComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
