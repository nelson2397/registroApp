import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEstudianteComponent } from './components/add-estudiante/add-estudiante.component';
import { MostrarEstudianteComponent } from './pages/mostrar-estudiante/mostrar-estudiante.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'estudiantes', component: MostrarEstudianteComponent
  },
  // {
  //   path: 'add-estudiante', component: AddEstudianteComponent
  // },
  {
    path: '**', pathMatch: 'full', redirectTo: 'registro'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
