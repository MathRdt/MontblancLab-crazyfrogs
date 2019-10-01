import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StartRoutingModule
  ]
})
export class StartModule {}
