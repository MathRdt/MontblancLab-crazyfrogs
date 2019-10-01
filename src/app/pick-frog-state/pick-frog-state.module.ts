import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';

import { PickFrogStateRoutingModule } from './pick-frog-state-routing.module';
import { PickFrogStateComponent } from './pick-frog-state.component';

@NgModule({
  declarations: [PickFrogStateComponent],
  imports: [CommonModule, CoreModule, SharedModule, MaterialModule, PickFrogStateRoutingModule]
})
export class PickFrogStateModule {}
