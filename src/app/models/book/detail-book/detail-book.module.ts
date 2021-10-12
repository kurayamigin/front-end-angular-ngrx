import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {DetailBookEffects} from "./state/detail-book.effects";
import {detailBookReducer} from "./state/detail-book.reducer";
import {SharedModule} from "../../../shared/shared.module";
import {DetailBookComponent} from "./detail-book.component";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forFeature('detailBook', detailBookReducer),
    EffectsModule.forFeature([DetailBookEffects]),
    SharedModule
  ],
  exports: [
    DetailBookComponent
  ],
  declarations: [DetailBookComponent]
})
export class DetailBookModule {}
