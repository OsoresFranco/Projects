import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  pokemon: any = {
    id: 7,
    name: 'Charmander',
    lvl: 4,
    type: ['fire'],
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    evolutionId: 8,
    abilities: [
      {
        name: 'Ascuas',
        description: 'Ascuas causa daño.',
      },
      {
        name: 'Garra metal',
        description:
          'Garra metal causa daño y tiene una probabilidad del 10% aumentar el ataque.',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
