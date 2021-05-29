import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RegistrarService } from 'src/app/services/registrar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-component',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;
  constructor(private validar: RegistrarService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telefono: ['', [Validators.required, Validators.minLength(6)]],
      book1: [false],
      book2: [false],
      book3: [false]
    })
  }

  crearUsuario(){
    if(this.formulario.invalid){
      Swal.fire('Complete todos los campos', '', 'error');
      return;
    }
    let email: string = this.formulario.get('email').value.toLowerCase();
    this.formulario.controls['email'].setValue(email)
    this.validar.crearUsuario(this.formulario.value);
    this.formulario.reset();
  }



}
