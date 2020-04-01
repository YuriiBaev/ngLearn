import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PendingService {

  private pending$: BehaviorSubject<boolean>;

  constructor() {
    this.pending$ = new BehaviorSubject<boolean>(false);
  }

  get pending() {
    return this.pending$.value;
  }

  startPending() {
    this.pending$.next(true);
  }

  stopPending() {
    this.pending$.next(false);
  }
}
