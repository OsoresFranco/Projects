import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatBottomSheetModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatBottomSheetModule
  ]
})
export class MaterialModule { }
