import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['spiderman', 'ironman', 'hulk', 'thor'];
  public removedHero: string | undefined;
  removeLastHero(): void {
    this.removedHero = this.heroNames.pop();
  }
}
