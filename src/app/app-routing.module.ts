import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from './core/guards/authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loan-copy',
    pathMatch: 'full'
  },
  {
    path: 'loan-copy',
    loadChildren: './loan-copy/loan-copy.module#LoanCopyModule',
    // canActivate: [AuthenticationGuard]
    // NOTE(collin): don't protect with a canLoad so that we will get redirected to /login when canActivate fails
  },
  {
    path: 'db-finder',
    loadChildren: './db-finder/db-finder.module#DbFinderModule',
    // canActivate: [AuthenticationGuard],
    // canLoad: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
