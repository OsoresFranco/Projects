import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
