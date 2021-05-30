import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Login } from '../interfaces/form-login';
import Swal from 'sweetalert2';
import { CrearUsuario } from '../interfaces/form-crear-usuario';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  bandera: boolean;
  estudiantes: Observable<any>;
  data;
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

  restablecerContraseña(email: string){
    return this.auth.sendPasswordResetEmail(email);
  }

  guardarDatosPersonales(data: any, id: string){
    const fullName ={
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email
    };
    console.log(fullName);
    return this.firestore.doc(`correos/${id}`).set(fullName);
  }

  crearUsuario(data: CrearUsuario, id: string){
    this.auth.createUserWithEmailAndPassword(data.email, data.password).then(resp => {
      
      Swal.fire('Usuario creado correctamente', '', 'success');
      console.log(id);
      this.guardarDatosPersonales(data, id);
      delete data.nombre;
      delete data.apellido;
      setTimeout(() => {
        this.enviarData(data).catch(() => {
          Swal.fire('El registro de libros falló', '', 'error');
        });
      }, 1500);
    }).catch(() => {
      Swal.fire('Error al crear el usuario', '', 'error') 
    });
  }
  getEstudiantes(){
    this.estudiantes = this.firestore.collection('correos').snapshotChanges().pipe(map (action => {
      return action.map(a => {
        this.data = a.payload.doc.data();
        this.data.id = a.payload.doc.id;
        return this.data;
      })
    }))
    return this.estudiantes;
  }
  getTraerData(email: string){
    return this.firestore.doc(`${email}/books`).get();
  }
  enviarData(books: any){
    return this.firestore.doc(`${books.email}/books`).set(books);
  }
}
