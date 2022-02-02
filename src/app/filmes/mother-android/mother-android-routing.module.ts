import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotherAndroidPage } from './mother-android.page';

const routes: Routes = [
  {
    path: '',
    component: MotherAndroidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotherAndroidPageRoutingModule {}
