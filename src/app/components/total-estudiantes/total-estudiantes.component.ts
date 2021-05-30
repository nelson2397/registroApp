import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { RegistrarService } from 'src/app/services/registrar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-total-estudiantes',
  templateUrl: './total-estudiantes.component.html',
  styleUrls: ['./total-estudiantes.component.scss']
})
export class TotalEstudiantesComponent implements OnInit {

  correos: Observable<any>;
  usuario: Observable<any>
  estudiantesTabla: MatTableDataSource<any>;
  booksTabla : MatTableDataSource<any>;
  estudiantesColumns: string[] = ['nombre_completo', 'email'];
  booksColumns: string[] = ['books'];
  booksArr: any[] = [];
  constructor(private validar: RegistrarService) { }

  ngOnInit(): void {
    this.usuario = this.validar.getUsuario();  
    // this.correos = this.validar.getEstudiantes();
    this.validar.getEstudiantes().subscribe(resp => {
      this.estudiantesTabla = new MatTableDataSource<any>(resp);
      console.log(this.estudiantesTabla.data);
    }); 
}
traerData(email: string, nombre: string, apellido: string, id: string){
  this.validar.getTraerData(email).subscribe(resp => {
    
    this.booksArr[0] = {
      data: resp.data(),
      nombre,
      apellido,
      id
    };
    this.booksTabla = new MatTableDataSource<any>(this.booksArr);
  })
}

restablecer(email: string){
  Swal.fire({
    title: '¿Está seguro que desea restablecer contraseña?',
    showConfirmButton: true,
    showCancelButton: true,
    icon: 'info',
    confirmButtonText: `Aceptar`,
    cancelButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      this.validar.restablecerContraseña(email).then(resp => {
        Swal.fire('Se ha enviado un link al correo', '', 'success')
      })
    }
  })
}

enviarData(books: any, nombre: string, apellido: string){
  console.log(this.booksArr);
  const data = {
    nombre,
    apellido,
    email: books.email
  }
  Swal.fire('Actualizando', 'Espere un momento', 'info');
  Swal.showLoading();
  this.validar.guardarDatosPersonales(data, books.id);
  this.validar.enviarData(books).then(resp => {
    Swal.fire('Actualizado correctamente', '', 'success');
  })
}

}
