import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import other components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// define routes
const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
     { enableTracing: false } // <-- true = debugging purposes
   )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
