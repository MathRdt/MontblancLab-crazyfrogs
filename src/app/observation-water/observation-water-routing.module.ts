import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ObservationWaterComponent } from './observation-water.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'observation-water', component: ObservationWaterComponent, data: { title: extract('Observation') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservationWaterRoutingModule {}
