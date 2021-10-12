import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AuthCredentials} from "./auth/state/auth.credentials";
import {Store} from "@ngrx/store";
import {AuthService} from "./auth/auth.service";
import {authenticate, isAuthenticated} from "./auth/state/auth.actions";
import {AuthState} from "./auth/state/auth.state";
import {GlobalState} from "./global-store/global.state";
import {selectToast} from "./global-store/global.selector";
import {hideLoginToast} from "./auth/login/state/login.action";
import {MatSnackBar} from "@angular/material/snack-bar";
import {hideToast} from "./global-store/global.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front';

  //Observables

  //Initial Variables

  constructor(translate: TranslateService, private store: Store<AuthState>, private globalStore: Store<GlobalState>,
              private credentials: AuthCredentials, private _snackBar:MatSnackBar) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.subscribeToast();
    this.credentials = {
      username: localStorage.getItem('username'),
      token: ''
    };
    this.store.dispatch(authenticate({ credentials: this.credentials}))
  }

  subscribeToast() {
    this.globalStore.select(selectToast).subscribe(toast => {
      if (toast.show) this.toastSnackBar(toast.message)
    })
  }

  toastSnackBar(message: string){
    this._snackBar.open(message, 'Close').afterDismissed().subscribe(()=> this.globalStore.dispatch(hideToast()));
  }



}
