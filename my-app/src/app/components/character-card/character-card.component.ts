import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../../models/character';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character!: Character;
  @Input() isSelected = false;

  constructor() {}

  ngOnInit(): void {}
  getNationClass() {
    return `${this.character.nationality.nationClassName} nation-icon-container `;
  }
  onCardClick() {
    this.isSelected = !this.isSelected;
  }
}
