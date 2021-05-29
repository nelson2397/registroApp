import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RegistrarService } from 'src/app/services/registrar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  formulario: FormGroup;
  usuario: Observable<any>;
  email: string;
  constructor(private fb: FormBuilder, private registrar: RegistrarService) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.recargarData();
  }
  
  crearFormulario(){
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  recargarData(){
    this.usuario = this.registrar.getUsuario();
    this.registrar.getUsuario().subscribe(resp => {
      this.email = resp.email;
    });
  }

  enviarData(){
    if(this.formulario.invalid){
      Swal.fire('Complete todos los campos', '', 'error');
      return;
    }

    if(this.formulario.get('email').value !== "claudia.benavidesvargas@gmail.com" && this.formulario.get('password').value !== "1107522606"){
      Swal.fire('Usuario o contraseña no permitidos', '', 'error');
      return;
    }

    this.registrar.velidarlogin(this.formulario.value).then(() => {
      this.recargarData();
      this.formulario.reset();
    }).catch((error) => {
      console.log(error.code);
      if(error.code == "auth/too-many-requests"){
        Swal.fire('Su cuenta ha sido bloqueada', 'Ponte en contacto con soporte técnico', 'warning');
        return;
      }
      Swal.fire('Usuario o contraseña incorrectos', '', 'error');
      this.formulario.get('password').setValue('');
    })
  }
  
  logout(){
    this.registrar.logOut().then(() => {
      this.usuario = null;
    })
  }
}
