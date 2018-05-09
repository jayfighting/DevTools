import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthenticationGuard } from './guards/authentication/authentication.guard';
import { UserService } from './services/user/user.service';
import { AuthenticationInterceptor } from './interceptors/authentication/authentication.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    CoreRoutingModule
  ],
  exports: [
    SidenavComponent
  ],
  declarations: [
    NotFoundPageComponent,
    HeaderComponent,
    SidenavComponent,
    MainComponent,
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}