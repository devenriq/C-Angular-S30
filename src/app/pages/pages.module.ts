import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    ListComponent
  ],
  exports:[
    ListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSlideToggleModule,
  ]
})
export class PagesModule { }
