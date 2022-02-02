import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotherAndroidPageRoutingModule } from './mother-android-routing.module';

import { MotherAndroidPage } from './mother-android.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotherAndroidPageRoutingModule
  ],
  declarations: [MotherAndroidPage]
})
export class MotherAndroidPageModule {}
