import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndingRoutingModule } from './ending-routing.module';
import { EndingComponent } from './ending.component';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [EndingComponent],
  imports: [CommonModule, CoreModule, SharedModule, MaterialModule, EndingRoutingModule]
})
export class EndingModule {}
