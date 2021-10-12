import {ElementRef, NgModule, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {SharedModule} from "../../shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {signupReducer} from "../signup/state/signup.reducer";
import {EffectsModule} from "@ngrx/effects";
import {SignupEffect} from "../signup/state/signup.effect";
import {loginReducer} from "./state/login.reducer";
import {LoginEffects} from "./state/login.effects";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature([LoginEffects]),
  ]
})
export class LoginModule {}
