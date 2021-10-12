import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {CustomSerializer} from "./shared/utils";
import {MainListModule} from "./main-list/main-list.module";
import {NavbarModule} from "./navbar/navbar.module";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {HomeModule} from "./home/home.module";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthCredentials} from "./auth/state/auth.credentials";
import {authReducer} from "./auth/state/auth.reducer";
import {AuthModule} from "./auth/auth.module";
import {DialogControlComponent} from "./main-list/details-dialog/dialog-control.component";
import {DetailsDialogComponent} from "./main-list/details-dialog/details-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {DetailBookModule} from "./models/book/detail-book/detail-book.module";
import {SharedModule} from "./shared/shared.module";
import {globalReducer} from "./global-store/global.reducer";
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    DialogControlComponent,
    DetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      // routes
    ]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    TranslateModule.forRoot({defaultLanguage: 'en'}),
    StoreModule.forRoot({global: globalReducer}),
    StoreModule.forFeature('auth', authReducer),
    AuthModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
    NavbarModule,
    HomeModule,
    MainListModule,
    MatDialogModule,
    DetailBookModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [MatSnackBar, AuthCredentials],
  bootstrap: [AppComponent]
})
export class AppModule { }
