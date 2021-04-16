import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { ComponentsModule } from '../components/components.module';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';



@NgModule({
  declarations: [
    RegistroComponent,
    EstudiantesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
