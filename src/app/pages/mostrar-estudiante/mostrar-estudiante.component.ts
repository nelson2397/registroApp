import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrarService } from 'src/app/services/registrar.service';

@Component({
  selector: 'app-mostrar-estudiante',
  templateUrl: './mostrar-estudiante.component.html',
  styles: [
  ]
})
export class MostrarEstudianteComponent implements OnInit {

  usuario: Observable<any>
  constructor(private validar: RegistrarService) { }

  ngOnInit(){
    this.usuario = this.validar.getUsuario();  
  }

}
