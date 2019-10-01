import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThanksRoutingModule } from './thanks-routing.module';
import { ThanksComponent } from './thanks.component';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [ThanksComponent],
  imports: [CommonModule, ThanksRoutingModule, CoreModule, SharedModule, MaterialModule]
})
export class ThanksModule {}
