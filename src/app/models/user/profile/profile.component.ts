import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {DtoProfile} from "../user.model";
import {selectProfile} from "./state/profile.reducer";
import {ProfileState} from "./state/profile.state";
import {loadProfile} from "./state/profile.actions";
import {authLoginExit} from "../../../auth/login/state/login.action";
import * as authActions from "../../../auth/state/auth.actions";
import {AuthState} from "../../../auth/state/auth.state";
import {selectCredentials} from "../../../auth/state/auth.selector";
import {AuthCredentials} from "../../../auth/state/auth.credentials";
import {showToast} from "../../../global-store/global.actions";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile$ = this.store.select(selectProfile);
  profile!: DtoProfile;
  constructor(public route: ActivatedRoute, public router: Router, public store:  Store<ProfileState>,
              public authStore: Store<AuthState>, public credentials: AuthCredentials) { }

  ngOnInit() {
    this.authStore.select(selectCredentials).subscribe((credentials) => {
      this.credentials = credentials;
    })
    const username = this.route.snapshot.paramMap.get('username');
    this.profile$.subscribe((profile) => {
      this.profile = profile
    })
    if (username) this.store.dispatch(loadProfile({username: username}));
  }

  exit() {
    this.router.navigate(['']);
  }

  logout() {
    if (!this.credentials.username) return
    this.authStore.dispatch(showToast({ message: "Logged out" }));
    this.authStore.dispatch(authActions.logout({username: this.credentials.username}));
    this.router.navigate(['']);
  }
}
