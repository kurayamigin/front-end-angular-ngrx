import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {MainListModule} from "../main-list/main-list.module";
import {ProfileComponent} from "../models/user/profile/profile.component";
import {ProfileModule} from "../models/user/profile/profile.module";
import {HomeComponent} from "./home.component";



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainListModule,
    ProfileModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
