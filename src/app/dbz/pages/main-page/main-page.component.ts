import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public title: string = 'DBZ Main Page';
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteListCharacter(id);
  }

  onNewCharacter(character: Character) {
    this.dbzService.addNewCharacter(character);
  }
}
