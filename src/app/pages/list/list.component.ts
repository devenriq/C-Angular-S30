import {Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  data:string[]=[]

  displayedColumns: string[] = ['description', 'name', 'weight', 'symbol'];
  dataSource = this.data;
}
