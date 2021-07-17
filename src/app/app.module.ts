import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuggedComponent } from './myComponents/rugged/rugged.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
// import { ItemsTableComponent } from './myComponents/items-table/items-table.component';
// import { HomePageComponent } from './myComponents/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RuggedComponent,
    HeaderComponent,
    NavbarComponent,
    routingComponents
    // ItemsTableComponent,
    // HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
