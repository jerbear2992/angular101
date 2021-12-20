import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CharacterCardComponent],
  imports: [CommonModule, MatIconModule],
  exports: [CharacterCardComponent],
})
export class CharacterCardModule {}
