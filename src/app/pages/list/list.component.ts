import {Component, Inject} from '@angular/core';
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
  dialogData:Products[] = []

  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'precio', 'foto', 'borrar'];

  productsList:Products[]=[
    {
      id:'1',
      nombre:"guantes",
      descripcion:'esta es una descripcion',
      precio: "40",
      foto: "hola"
    },

  ]

  dataSource = this.productsList;

  constructor(
    public dialogRef: MatDialogRef<Products>,
    @Inject(MAT_DIALOG_DATA)
    public data: any){

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
