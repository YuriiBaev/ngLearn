import { Component, OnInit } from '@angular/core';
import { PendingService } from '@services/request/pending.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
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
}
