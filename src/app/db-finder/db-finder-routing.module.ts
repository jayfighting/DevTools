import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbFinderPageComponent } from './containers/db-finder-page/db-finder-page.component';

const routes: Routes = [
  {
    path: '',
    component: DbFinderPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DbFinderRoutingModule { }
