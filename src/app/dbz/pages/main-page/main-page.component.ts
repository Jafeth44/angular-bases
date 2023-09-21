import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public title: string = 'DBZ Main Page';
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 500,
    },
    {
      name: 'Goku',
      power: 9001,
    },
    {
      name: 'Vegeta',
      power: 7000
    }
  ];
}
