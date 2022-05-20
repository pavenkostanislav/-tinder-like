import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Match, Matches } from './match.inerface';
import { ShuffleService } from './shuffle.service';

@Component({
  selector: 'tinder-like-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchComponent implements OnInit {
  items: Match[] = [];

  constructor(
    private translocoService: TranslocoService,
    private shuffle: ShuffleService
  ) {}

  ngOnInit() {
    this.translocoService
      .selectTranslateObject<Matches>('matches')
      .subscribe((result) => {
        this.loadItems(result);
      });
  }

  loadItems(result: Matches) {
    this.shuffle.create(result);
    this.items.push(this.shuffle.next());
    this.items.push(this.shuffle.next());
  }

  like(match: Match) {
    match.like = true;
  }

  swiping(index: number) {
    this.items[index] = this.shuffle.next();
  }
}
