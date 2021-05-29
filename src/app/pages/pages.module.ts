import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { ComponentsModule } from '../components/components.module';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { MostrarEstudianteComponent } from './mostrar-estudiante/mostrar-estudiante.component';



@NgModule({
  declarations: [
    RegistroComponent,
    EstudiantesComponent,
    MostrarEstudianteComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
