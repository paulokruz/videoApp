import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiverdancePageRoutingModule } from './riverdance-routing.module';

import { RiverdancePage } from './riverdance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiverdancePageRoutingModule
  ],
  declarations: [RiverdancePage]
})
export class RiverdancePageModule {}
