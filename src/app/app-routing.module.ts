import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnderConstructionComponent} from "./pages/under-construction/under-construction.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "under-construction",
    component: UnderConstructionComponent
  },
  {
    path: "**",
    redirectTo: "/under-construction"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
