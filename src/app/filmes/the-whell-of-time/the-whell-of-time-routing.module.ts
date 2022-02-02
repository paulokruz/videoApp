import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheWhellOfTimePage } from './the-whell-of-time.page';

const routes: Routes = [
  {
    path: '',
    component: TheWhellOfTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheWhellOfTimePageRoutingModule {}
