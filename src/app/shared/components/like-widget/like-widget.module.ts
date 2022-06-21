
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';



@NgModule({

  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    LikeWidgetComponent
  ],
  exports: [
    LikeWidgetComponent
  ],
  providers: [
    UniqueIdService
  ]
})
export class LikeWidgetModule { }
