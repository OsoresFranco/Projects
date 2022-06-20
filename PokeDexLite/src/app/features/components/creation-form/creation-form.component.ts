import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';

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
    private alert: AlertsService,
    private postPokemon: PokemonService
  ) {
    this.creationForm = this.fb.group({
      'userId': '2',
      'pokemon': {
        'id': 4561,
        'name': 'Novato',
        'image':
          'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
        'type': ['grass'],
        'evolutionId': 1,
        'lvl': 1,
        'abilities': [
          [
            {
              'name': 'Hojas',
              'description': 'Muchas Hojas',
            },
          ],
        ],
      },
    });
  }

  submit() {
    let pokemon = this.creationForm.value;
    console.log(pokemon);
    this.postPokemon.postPokemon(pokemon).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}
}
