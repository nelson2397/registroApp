import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'registro'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
