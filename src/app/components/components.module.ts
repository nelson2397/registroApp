import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TotalEstudiantesComponent } from './total-estudiantes/total-estudiantes.component';
import { MaterialsModule } from '../materials/materials/materials.module';
import { AddEstudianteComponent } from './add-estudiante/add-estudiante.component';



@NgModule({
  declarations: [
    NavbarComponent,
    RegistroComponent,
    JumbotronComponent,
    TotalEstudiantesComponent,
    AddEstudianteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialsModule
  ],
  exports: [
    NavbarComponent,
    RegistroComponent,
    JumbotronComponent,
    TotalEstudiantesComponent,
  ]
})
export class ComponentsModule { }
