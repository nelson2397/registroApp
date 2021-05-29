import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEstudiantesComponent } from './total-estudiantes.component';

describe('TotalEstudiantesComponent', () => {
  let component: TotalEstudiantesComponent;
  let fixture: ComponentFixture<TotalEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
