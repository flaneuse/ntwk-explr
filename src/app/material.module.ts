import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  MatTabsModule
  // MatAutocompleteModule, MatFormFieldModule, MatInputModule,
  // MatChipsModule, , MatTableModule, MatSelectModule,
  // MatCheckboxModule, MatIconModule, MatSortModule, MatButtonModule,
  // MatSnackBarModule, MatPaginatorModule, MatExpansionModule,
  // MatDatepickerModule, MatNativeDateModule, MatDividerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule
    // MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    // MatChipsModule, , MatTableModule, MatSelectModule,
    // MatCheckboxModule, MatIconModule, MatSortModule, MatButtonModule,
    // MatSnackBarModule, MatPaginatorModule, MatExpansionModule,
    // MatDatepickerModule, MatNativeDateModule, MatDividerModule
  ],
  exports: [
    MatTabsModule
    // MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    // MatChipsModule,  MatTableModule, MatSelectModule,
    // MatCheckboxModule, MatIconModule, MatSortModule, MatButtonModule,
    // MatSnackBarModule, MatPaginatorModule, MatExpansionModule,
    // MatDatepickerModule, MatNativeDateModule, MatDividerModule
  ],
})
export class MaterialModule { }
