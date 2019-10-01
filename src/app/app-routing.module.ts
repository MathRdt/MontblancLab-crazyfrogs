import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { extract } from '@app/core';

import { ObservationWaterComponent } from './observation-water/observation-water.component';
import { TakePictureComponent } from './take-picture/take-picture.component';
import { PickFrogStateComponent } from './pick-frog-state/pick-frog-state.component';
import { EndingComponent } from './ending/ending.component';
import { StartComponent } from './start/start.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  Shell.childRoutes([{ path: 'start', component: StartComponent, data: { title: extract('Bienvenue') } }]),
  Shell.childRoutes([{ path: 'ending', component: EndingComponent, data: { title: extract('On recommence ?') } }]),
  Shell.childRoutes([{ path: 'thanks', component: ThanksComponent, data: { title: extract('Merci !') } }]),
  Shell.childRoutes([
    { path: 'pick-frog-state', component: PickFrogStateComponent, data: { title: extract('Choix') } }
  ]),
  Shell.childRoutes([
    { path: 'observation-water', component: ObservationWaterComponent, data: { title: extract('Observation') } }
  ]),
  Shell.childRoutes([{ path: 'take-picture', component: TakePictureComponent, data: { title: extract('Photo') } }]),
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
