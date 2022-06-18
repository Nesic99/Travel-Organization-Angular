import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './profile/view/view.component';
import { EditComponent } from './profile/edit/edit.component';
import { ParaliaComponent } from './destinations/view/paralia/paralia.component';
import { ReserveComponent } from './destinations/view/paralia/reserve/reserve.component';
import { SplitComponent } from './destinations/view/split/split.component';
import { IbizaComponent } from './destinations/view/ibiza/ibiza.component';
import { LondonComponent } from './destinations/view/london/london.component';
import { AthensComponent } from './destinations/view/athens/athens.component';
import { RomeComponent } from './destinations/view/rome/rome.component';
import { ParisComponent } from './destinations/view/paris/paris.component';
import { BarcelonaComponent } from './destinations/view/barcelona/barcelona.component';
import { AmsterdamComponent } from './destinations/view/amsterdam/amsterdam.component';
import { SicilyComponent } from './destinations/view/sicily/sicily.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    EditComponent,
    ParaliaComponent,
    ReserveComponent,
    SplitComponent,
    IbizaComponent,
    LondonComponent,
    AthensComponent,
    RomeComponent,
    ParisComponent,
    BarcelonaComponent,
    AmsterdamComponent,
    SicilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
     NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
