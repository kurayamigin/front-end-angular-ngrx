import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {SignupState} from "./state/signup.state";
import {authSignUp, authSignUpExit} from "./state/signin.action";
import {validateAndRewriteCoreSymbol} from "@angular/compiler-cli/src/ngtsc/imports";
import {DtoUser} from "../../models/user/user.model";
import {selectCode, selectCodeMessage, selectUser} from "./state/signup.selector";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {hideLoginToast} from "../login/state/login.action";
import {ResponseCodes} from "../../shared/enums/responses-code.enum";
import {showToast} from "../../global-store/global.actions";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  codeMessage$: Observable<any> = this.store.select(selectCodeMessage);
  form = this.fb.group({
    username: [null, Validators.required],
    email: [null, [Validators.email, Validators.required]],
    password: [null, Validators.required],
    firstname: [null, Validators.required],
    lastname: [null, Validators.required],
    phone: [null, [Validators.required, Validators.pattern('[- +()0-9]+')]],
  })

  constructor(private store: Store<SignupState>, private router: Router, private fb: FormBuilder, private _snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.codeMessage$.subscribe((action)=>{
      if (action.code == ResponseCodes.INVALID_DATA) {
        this.store.dispatch(showToast(action.message));
      } else if (action.code == ResponseCodes.SUCCESS) {
        this.store.dispatch(showToast({message:action.message}));
        this.exit()
      }
    })
  }

  exit() {
    this.router.navigate(['']);
    this.store.dispatch(authSignUpExit());
  }

  submit() {
    if (!this.form.valid) return
    const form : DtoUser = {
      username: this.form.get('username')!.value,
      email: this.form.get('email')!.value,
    password: this.form.get('password')!.value,
      firstname: this.form.get('firstname')!.value,
        lastname: this.form.get('lastname')!.value,
          phone: this.form.get('phone')!.value,
    }
    this.store.dispatch(authSignUp({data: form}));
  }

  toastSnackBar(message: string){
    this._snackBar.open(message, 'Close')
  }
}
