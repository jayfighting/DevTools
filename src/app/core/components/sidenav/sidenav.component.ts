import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'core-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(
    zone: NgZone,
    private router: Router) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.isScreenSmall())
        this.sidenav.close();
    })
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
