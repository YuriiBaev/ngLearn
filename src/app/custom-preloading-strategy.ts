import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { get } from 'lodash';

const shouldPreload = (): boolean => {
  // @ts-ignore
  const conn = navigator.connection;

  if (conn) {
    if (conn.saveData) {
      return false;
    }

    const effectiveType = conn.effectiveType || '';

    if (effectiveType.includes('2g')) {
      return false;
    }
  }

  return true;
};

@Injectable({ providedIn: 'root' })
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const preload = get(route, 'data.preload');

    if (shouldPreload() || preload) {
      return load();
    } else {
      return EMPTY;
    }
  }
}
