import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {StoreModule} from "@ngrx/store";
import {detailBookReducer} from "../../book/detail-book/state/detail-book.reducer";
import {EffectsModule} from "@ngrx/effects";
import {SharedModule} from "../../../shared/shared.module";
import {ProfileComponent} from "./profile.component";
import {profileReducer} from "./state/profile.reducer";
import {ProfileEffect} from "./state/profile.effect";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forFeature('profile', profileReducer),
    EffectsModule.forFeature([ProfileEffect]),
    SharedModule
  ],
  exports: [
    ProfileComponent
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule {}
