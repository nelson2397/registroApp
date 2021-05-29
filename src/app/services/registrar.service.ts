import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Login } from '../interfaces/form-login';
import Swal from 'sweetalert2';
import { CrearUsuario } from '../interfaces/form-crear-usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  bandera: boolean;
  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  velidarlogin(data: Login){
          return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  logOut(){
    return this.auth.signOut();
  }

  getUsuario(){
    return this.auth.user;
  }

  crearUsuario(data: CrearUsuario){
    this.auth.createUserWithEmailAndPassword(data.email, data.password).then(resp => {
      
      Swal.fire('Usuario creado correctamente', '', 'success');
    
      this.firestore.doc(`${data.email}/books`).set(data).catch(() => {
        Swal.fire('El registro de libros falló', '', 'error');
      });
    }).catch(() => {
      Swal.fire('Error al crear el usuario', '', 'error') 
    });
  }
}
