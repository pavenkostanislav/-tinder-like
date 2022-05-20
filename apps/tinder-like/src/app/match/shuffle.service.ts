import { Injectable } from '@angular/core';
import { shuffle } from './shuffle.helper';
import { Match } from './match.inerface';

@Injectable({
  providedIn: 'root',
})
export class ShuffleService {
  private _ranShuffle: Generator<Match, void, unknown> | undefined;

  create(matches?: Match[]) {
    if (!matches || matches.length === 0) {
      console.warn('Empty array', matches);
      return;
    }

    this._ranShuffle = shuffle<Match>(matches);
  }

  next(): Match {
    if (!this._ranShuffle) {
      throw new Error('Need create shuffle array before using');
    }

    return this._ranShuffle.next().value as Match;
  }
}
