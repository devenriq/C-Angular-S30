import {Component} from '@angular/core';
import { Products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  data:Products[]=[
    {
      id:'1',
      nombre:"guantes",
      descripcion:'esta es una descripcion',
      precio: "40",
      foto: "hola"
    },

  ]

  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'precio', 'foto', 'borrar'];
  dataSource = this.data;
}
