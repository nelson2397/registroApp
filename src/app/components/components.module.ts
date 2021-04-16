import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    RegistroComponent,
    JumbotronComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    RegistroComponent,
    JumbotronComponent,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
