import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreationFormComponent } from '../creation-form/creation-form.component';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss'],
})
export class AddPokemonComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openModal() {
    this.dialog.open(CreationFormComponent);
  }

  ngOnInit(): void {}
}
