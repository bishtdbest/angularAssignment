import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './myComponents/home-page/home-page.component';
import { ItemsTableComponent } from './myComponents/items-table/items-table.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full' },
  {path: 'homepage', redirectTo: '/' },
  {path: 'alarms', component: ItemsTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomePageComponent, ItemsTableComponent ]