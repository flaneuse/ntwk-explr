import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Helpers
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './material.module';

// Modules written by other people
import { FlexLayoutModule } from "@angular/flex-layout";


import { D3Service } from './circle-packing/behaviors/';


// Custom components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CirclePackingComponent } from './circle-packing/circle-packing.component';
import { ForceGraphComponent } from './circle-packing/marks/force-graph/force-graph.component';
// import { NodesComponent } from './circle-packing/marks/nodes/nodes.component';
// import { LinksComponent } from './circle-packing/marks/links/links.component';

import { SHARED_VISUALS } from './circle-packing/marks';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
    declarations: [
    AppComponent,
    PageNotFoundComponent,
    CirclePackingComponent,
    ForceGraphComponent,
    // NodesComponent,
    // LinksComponent,
    ...SHARED_VISUALS
  ],

  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
