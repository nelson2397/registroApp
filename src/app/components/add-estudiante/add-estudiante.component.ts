import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrarService } from 'src/app/services/registrar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-estudiante',
  templateUrl: './add-estudiante.component.html',
  styleUrls: ['./add-estudiante.component.scss']
})
export class AddEstudianteComponent implements OnInit {
  formulario: FormGroup;
  constructor(private fb: FormBuilder, private enviarData: RegistrarService) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  guardaDatos(){
    if(this.formulario.invalid){
      return;
    }
    const id = Math.random().toString(36).substring(2);
    this.enviarData.guardarDatosPersonales(this.formulario.value, id).then(resp => {
      this.formulario.reset();
    })
  }

}
