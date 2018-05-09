import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

// import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(/*public authService: AuthenticationService*/) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request); // TODO(collin): fix once authentication service is added
    // return Observable.from(this.authService.getAuthenticationToken())
    //   .mergeMap((token, index) => {
    //     request = request.clone({
    //       setHeaders: {
    //         Authorization: `Bearer ${token}`
    //       }
    //     });

    //     return next.handle(request);
    //   });
  }
}
