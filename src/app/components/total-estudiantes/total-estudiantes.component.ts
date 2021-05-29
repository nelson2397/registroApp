import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { RegistrarService } from 'src/app/services/registrar.service';

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
  booksColumns: string[] = ['book1', 'book2', 'book3', 'bookA1'];
  constructor(private validar: RegistrarService) { }

  ngOnInit(): void {
    this.usuario = this.validar.getUsuario();  
    // this.correos = this.validar.getEstudiantes();
    this.validar.getEstudiantes().subscribe(resp => {
      this.estudiantesTabla = new MatTableDataSource<any>(resp);
      console.log(this.estudiantesTabla.data);
    }); 
}
traerData(email: string){
  this.validar.getTraerData(email).subscribe(resp => {
    const arr = [];
    arr.push(resp.data());
    this.booksTabla = new MatTableDataSource<any>(arr);
    console.log(resp.data());
  })
}
}
