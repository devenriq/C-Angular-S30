import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component'
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    ListComponent,
    RegisterComponent
  ],
  exports:[
    ListComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule
  ],
})
export class PagesModule { }
