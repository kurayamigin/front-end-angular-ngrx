import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import {SharedModule} from "../../shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {signupReducer} from "./state/signup.reducer";
import {SignupEffect} from "./state/signup.effect";
@NgModule({
  declarations: [
    SignupComponent,
  ],
    imports: [
      CommonModule,
      SharedModule,
      StoreModule.forFeature('signup', signupReducer),
      EffectsModule.forFeature([SignupEffect]),
    ]
})
export class SignupModule { }
