import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TotalEstudiantesComponent } from './total-estudiantes/total-estudiantes.component';
import { MaterialsModule } from '../materials/materials/materials.module';



@NgModule({
  declarations: [
    NavbarComponent,
    RegistroComponent,
    JumbotronComponent,
    TotalEstudiantesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
