import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { get } from 'lodash';

import { PendingService } from '@services/request/pending.service';
import { RouterOutlet } from '@angular/router';
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
  ) {}

  ngOnInit(): void {
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
