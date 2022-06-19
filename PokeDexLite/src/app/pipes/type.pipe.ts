import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
})
export class TypePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'normal':
        return '../../assets/types/normal.png';
      case 'fighting':
        return '../../assets/types/fighting.png';
      case 'flying':
        return '../../assets/types/flying.png';
      case 'poison':
        return '../../assets/types/poison.png';
      case 'ground':
        return '../../assets/types/ground.png';
      case 'rock':
        return '../../assets/types/rock.png';
      case 'bug':
        return '../../assets/types/bug.png';
      case 'ghost':
        return '../../assets/types/ghost.png';
      case 'steel':
        return '../../assets/types/steel.png';
      case 'fire':
        return '../../assets/types/fire.png';
      case 'water':
        return '../../assets/types/water.png';
      case 'grass':
        return '../../assets/types/grass.png';
      case 'electric':
        return '../../assets/types/electric.png';
      case 'psychic':
        return '../../assets/types/psychic.png';
      case 'ice':
        return '../../assets/types/ice.png';
      case 'dragon':
        return '../../assets/types/dragon.png';
      case 'dark':
        return '../../assets/types/dark.png';
      case 'fairy':
        return '../../assets/types/fairy.png';
      case 'unknown':
        return '../../assets/types/unknown.png';
      case 'shadow':
        return '../../assets/types/shadow.png';
    }
    return '../../assets/types/unknown.png';
  }
}
