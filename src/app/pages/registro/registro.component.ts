import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrarService } from 'src/app/services/registrar.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario: Observable<any>
  constructor(private validar: RegistrarService) { }

  ngOnInit(): void {
    this.usuario = this.validar.getUsuario();  
  }

  

}
