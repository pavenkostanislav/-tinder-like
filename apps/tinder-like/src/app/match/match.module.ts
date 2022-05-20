import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
  exports: [MatGridListModule, MatCardModule, MatButtonModule, MatDialogModule],
  imports: [MatGridListModule, MatCardModule, MatButtonModule, MatDialogModule],
})
export class MatMatchModule {}

@NgModule({
  declarations: [MatchComponent],
  exports: [MatchComponent],
  imports: [CommonModule, TranslocoRootModule, MatMatchModule],
})
export class MatchModule {}
