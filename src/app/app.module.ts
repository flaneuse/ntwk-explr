import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Helpers
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './material.module';

// Modules written by other people
import { FlexLayoutModule } from "@angular/flex-layout";


// Custom components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
    declarations: [
    AppComponent,
    PageNotFoundComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
