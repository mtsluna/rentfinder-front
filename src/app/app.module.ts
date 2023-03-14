import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {MatIconModule} from "@angular/material/icon";
import { SearchComponent } from './components/shared/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/shared/card/card.component';
import { CardContentComponent } from './components/shared/card/card-content/card-content.component';
import { FilterComponent } from './components/shared/filter/filter.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatExpansionModule} from "@angular/material/expansion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    CardComponent,
    CardContentComponent,
    FilterComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
