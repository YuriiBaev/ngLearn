import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { get } from 'lodash';

import { PendingService } from '@services/request/pending.service';
import { NavigationStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './app.router-animations';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private pendingService: PendingService,
    private spinner: NgxSpinnerService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.spinnerHandler();
    this.routerPendingHandler();
  }

  routerPendingHandler() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.pendingService.startPending();
      } else {
        this.pendingService.stopPending();
      }
    });
  }

  spinnerHandler() {
    this.pendingService.pending$.subscribe(value => {
      if (value) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return get(outlet, 'activatedRouteData.animation');
  }
}
