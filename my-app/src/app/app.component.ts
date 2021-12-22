import { Component } from '@angular/core';
import { Nation_Name } from '../models/nations';
import { Character, characters } from '../models/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  Nationality = Nation_Name;
  currentCharacters: Character[];

  constructor() {
    this.currentCharacters = characters;
  }

  getNationClass(c: Character) {
    return `${c.nationality.nationClassName} nation-icon-container`;
  }
}
