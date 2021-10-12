import { NgModule,} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LOGIN_ROUTE, SIGNUP_ROUTE} from "./auth.route";
import {LoginModule} from "./login/login.module";
import {SignupModule} from "./signup/signup.module";
import {StoreModule} from "@ngrx/store";
import {authReducer} from "./state/auth.reducer";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./state/auth.effects";


@NgModule({
  imports: [
    CommonModule,
    SignupModule,
    LoginModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
    RouterModule.forChild([LOGIN_ROUTE, SIGNUP_ROUTE]),
  ],
  declarations: [
  ],
})
export class AuthModule {}
