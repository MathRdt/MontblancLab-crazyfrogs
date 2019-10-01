import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakePictureRoutingModule } from './take-picture-routing.module';
import { TakePictureComponent } from './take-picture.component';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [TakePictureComponent],
  imports: [CommonModule, CoreModule, SharedModule, MaterialModule, WebcamModule, TakePictureRoutingModule]
})
export class TakePictureModule {}
