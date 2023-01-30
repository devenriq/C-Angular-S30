import {Component, Inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  title: string='titulo';
  message: string='mensaje';

  productsList:Products[]=[
    {
      id:'1',
      nombre:"guantes",
      descripcion:'esta es una descripcion',
      precio: "40",
      foto: "hola"
    },

  ]

  constructor(
    public dialogRef: MatDialogRef<Products>,
    @Inject(MAT_DIALOG_DATA)
    public data: any){
      this.title = data.title;
      this.message = data.message;
    }

  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'precio', 'foto', 'borrar'];
  dataSource = this.data;

  onNoClick(): void {
    this.dialogRef.close();
  }

}
