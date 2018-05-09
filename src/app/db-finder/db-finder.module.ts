import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbFinderRoutingModule } from './db-finder-routing.module';
import { DbFinderPageComponent } from './containers/db-finder-page/db-finder-page.component';

@NgModule({
  imports: [
    CommonModule,
    DbFinderRoutingModule
  ],
  declarations: [
    DbFinderPageComponent
  ]
})
export class DbFinderModule { }
