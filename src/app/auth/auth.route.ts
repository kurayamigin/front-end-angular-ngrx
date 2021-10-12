import {Route} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

export const LOGIN_ROUTE: Route = {
  path: 'login',
  component: LoginComponent,
};

export const SIGNUP_ROUTE: Route = {
  path: 'signup',
  component: SignupComponent,
};
