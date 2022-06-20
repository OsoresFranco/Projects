import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/core/services/alerts.service';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.scss'],
})
export class CreationFormComponent implements OnInit {
  creationForm: FormGroup;

  types: string[] = [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
  ];

  constructor(
    private fb: FormBuilder,
    private alert: AlertsService
  ) {
    this.creationForm = this.fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      type: ['', [Validators.required]],
      evolutionId: [0],
      lvl: [1],
      abilities: [{
        name:"",
        description:""
      },
      {
        name:"",
        description:""
      }
    ],
      id: [Math.floor(Math.random() * 1000) + 1],
    });
  }

  submit() {
    console.log(this.creationForm.value)
  }

  ngOnInit(): void {}
}
