import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheWhellOfTimePageRoutingModule } from './the-whell-of-time-routing.module';

import { TheWhellOfTimePage } from './the-whell-of-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheWhellOfTimePageRoutingModule
  ],
  declarations: [TheWhellOfTimePage]
})
export class TheWhellOfTimePageModule {}
