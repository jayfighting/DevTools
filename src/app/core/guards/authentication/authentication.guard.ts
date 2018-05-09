import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from '@angular/router';
import { Observable } from 'rxjs';

// import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanLoad {
  public constructor(
    // private authenticationService: AuthenticationService,
    private router: Router) { }

  public canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivate');
    return true; // TODO(collin): fix once authentication service is added

    // return this.authenticationService.LoggedInUser
    //   .take(1)
    //   .map(loggedInUser => {
    //     if (loggedInUser !== null) {
    //       return true;
    //     }

    //     this.router.navigate(['login']);

    //     return false;
    //   });
  }

  public canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return true; // TODO(collin): fix once authentication service is added
    // console.log('canLoad');
    // return this.authenticationService.LoggedInUser
    //   .take(1)
    //   .map(loggedInUser => {
    //     if (loggedInUser !== null) {
    //       return true;
    //     }

    //     return false;
    //   });
  }
}
