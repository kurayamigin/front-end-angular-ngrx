import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {NavbarComponent} from "./navbar.component";
import {SharedModule} from "../shared/shared.module";
import { navbarRoutes } from './navbar.route';
@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(navbarRoutes),
    SharedModule,
  ]
})
export class NavbarModule { }
