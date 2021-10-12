import {NgModule} from "@angular/core";
import {MainListComponent} from "./main-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {StoreModule} from "@ngrx/store";
import * as fromMainList from './state/main-list.reducer';
import {EffectsModule} from "@ngrx/effects";
import {MainListEffects} from "./state/main-list.effects";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";
import {borrowBookReducer} from "../borrow-book/state/borrow-book.reducer";
import {BorrowBookEffects} from "../borrow-book/state/borrow-book.effects";
@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forFeature('mainList', fromMainList.mainListReducer),
    StoreModule.forFeature('borrowBook', borrowBookReducer),
    EffectsModule.forFeature([MainListEffects, BorrowBookEffects]),
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    MainListComponent
  ],
  declarations: [MainListComponent]
})
export class MainListModule {}
