import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {LoginState} from "./state/login.state";
import {Store} from "@ngrx/store";
import {CredentialsBean} from "./state/credentials.bean";
import {selectCodeMessage, selectShowToast} from "./state/login.selector";
import {MatSnackBar} from "@angular/material/snack-bar";
import {authLogin, authLoginExit, hideLoginToast} from "./state/login.action";
import {ResponseCodes} from "../../shared/enums/responses-code.enum";
import {showToast} from "../../global-store/global.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Initialize data
  public codeMessage: any;
  form = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  })

  //Observables
  codeMessage$: Observable<any> = this.store.select(selectCodeMessage);
  constructor(private router: Router, private store: Store<LoginState>, private fb: FormBuilder, private _snackBar:MatSnackBar,) {
  }

  //Init functions
  ngOnInit(): void {
    this.initSubscribers();
  }
  initSubscribers() {
    this.codeMessage$.subscribe(({code, message})=> {
      this.codeMessage = {code: code, message: message};
      if (message)
        this.store.dispatch(showToast({message: message}));
      if (code == ResponseCodes.SUCCESS) {
        this.exit()
      }
    })
  }

  //Feature functions
  toastSnackBar(message: string){
    this._snackBar.open(message, 'Close').afterDismissed().subscribe(()=> this.store.dispatch(hideLoginToast()));
  }
  login() {
    if (!this.form.valid) return
    const form : CredentialsBean = {
      username: this.form.get('username')!.value,
      password: this.form.get('password')!.value
    }
    this.store.dispatch(authLogin({data: form}));
  }
  exit() {
    this.router.navigate(['']);
    this.store.dispatch(authLoginExit());
  }
}
