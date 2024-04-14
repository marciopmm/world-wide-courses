import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbeiroInicianteComponent } from './barbeiro-iniciante.component';

describe('BarbeiroInicianteComponent', () => {
  let component: BarbeiroInicianteComponent;
  let fixture: ComponentFixture<BarbeiroInicianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarbeiroInicianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarbeiroInicianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
