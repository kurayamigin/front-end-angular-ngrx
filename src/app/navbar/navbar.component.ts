import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthCredentials} from "../auth/state/auth.credentials";
import {selectCredentials, selectIsAuthenticate, selectLoading} from "../auth/state/auth.selector";
import {Observable} from "rxjs";
import {AuthService} from "../auth/auth.service";
import * as authActions from "../auth/state/auth.actions";
import {AuthState} from "../auth/state/auth.state";
import {Router} from "@angular/router";




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticate$ = this.authStore.select(selectIsAuthenticate);

  constructor(private router: Router, private authStore: Store<AuthState>, public credentials: AuthCredentials) { }

  ngOnInit(): void {
    this.authStore.select(selectCredentials).subscribe((credentials) => {
      this.credentials = credentials;
    })
  }

  profile() {
    if (!this.credentials.username) return;
    this.router.navigate(['/profile/' + this.credentials.username]);
  }
}
