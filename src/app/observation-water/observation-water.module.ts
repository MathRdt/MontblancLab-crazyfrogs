import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { ObservationWaterRoutingModule } from './observation-water-routing.module';
import { ObservationWaterComponent } from './observation-water.component';

import { FormsModule, FormControl } from '@angular/forms';

@NgModule({
  declarations: [ObservationWaterComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ObservationWaterRoutingModule]
})
export class ObservationWaterModule {}
