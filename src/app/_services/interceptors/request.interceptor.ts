import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

import { PendingService } from '@services/request/pending.service';
import { environment } from 'environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(
    public router: Router,
    private pendingService: PendingService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const newRequest = request.clone({
      url: `${environment.apiUrl}${request.url}`,
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });

    this.pendingService.startPending();

    return next.handle(newRequest).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.pendingService.stopPending();
        }
      }),
      catchError((err) => {
        this.pendingService.stopPending();

        return throwError(err);
      })
    );
  }
}
