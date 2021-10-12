import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AuthModule} from "../auth/auth.module";
import {ProfileModule} from "../models/user/profile/profile.module";
import {ProfileComponent} from "../models/user/profile/profile.component";

export const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: 'profile/:username',
    component: ProfileComponent
  },
]
