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
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telefono: ['', [Validators.required, Validators.minLength(6)]],
      book1: [false],
      book2: [false],
      book3: [false],
      bookA1: [false],
      book4: [false],
      book5: [false],
      book6: [false],
      bookA2: [false],
      book7: [false],
      book8: [false],
      book9: [false],
      bookB1: [false]
    })
  }

  crearUsuario(){
    if(this.formulario.get('password').value.length < 6){
      Swal.fire('Contraseña muy corta', 'Necesita por lo mínimo 6 caracteres', 'error');
    }
    if(this.formulario.invalid){
      Swal.fire('Complete todos los campos', '', 'error');
      return;
    }
    let email: string = this.formulario.get('email').value.toLowerCase();
    if(!this.formulario.get('book1').value){
      this.formulario.controls['book1'].setValue(false);
    }
    if(!this.formulario.get('book2').value){
      this.formulario.controls['book2'].setValue(false);
    }
    if(!this.formulario.get('book3').value){
      this.formulario.controls['book3'].setValue(false);
    }
    if(!this.formulario.get('bookA1').value){
      this.formulario.controls['bookA1'].setValue(false);
    }
    if(!this.formulario.get('book4').value){
      this.formulario.controls['book4'].setValue(false);
    }
    if(!this.formulario.get('book5').value){
      this.formulario.controls['book5'].setValue(false);
    }
    if(!this.formulario.get('book6').value){
      this.formulario.controls['book6'].setValue(false);
    }
    if(!this.formulario.get('bookA2').value){
      this.formulario.controls['bookA2'].setValue(false);
    }
    if(!this.formulario.get('book7').value){
      this.formulario.controls['book7'].setValue(false);
    }
    if(!this.formulario.get('book8').value){
      this.formulario.controls['book8'].setValue(false);
    }
    if(!this.formulario.get('book9').value){
      this.formulario.controls['book9'].setValue(false);
    }
    if(!this.formulario.get('bookB1').value){
      this.formulario.controls['bookB1'].setValue(false);
    }
    this.formulario.controls['email'].setValue(email)
    const id = Math.random().toString(36).substring(2);
    this.validar.crearUsuario(this.formulario.value, id);
    this.formulario.reset();
  }
}
