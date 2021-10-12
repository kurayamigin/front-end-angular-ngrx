import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {DtoUser} from "../models/user/user.model";
import {CredentialsBean} from "./login/state/credentials.bean";
import {AuthCredentials} from "./state/auth.credentials";
import {CustomResponse} from "../shared/response.model";
import {ResponseCodes} from "../shared/enums/responses-code.enum";


@Injectable({ providedIn: 'root' })
export class AuthService {
  private resourceUrl ='api/auth';

  constructor(protected http: HttpClient) {
  }

  signup(userForm: DtoUser): Observable<CustomResponse> {
    let endpoint = this.resourceUrl + "/signup";
    return this.http.post<CustomResponse>(endpoint, {data:userForm})
  }

  login(loginForm: CredentialsBean): Observable<CustomResponse> {
    let endpoint = this.resourceUrl + "/login";
    return this.http.post<CustomResponse>(endpoint, {data:loginForm})
  }

  logout(username: string) {
    let endpoint = this.resourceUrl + "/logout";
    return this.http.post<CustomResponse>(endpoint, {data:username})
  }

  async authenticateCredentials(credentials: AuthCredentials) : Promise<any>{
    console.log(credentials);
    if (!credentials.username) return new CustomResponse(credentials, ResponseCodes.INVALID_DATA, "Unrecognized error");
    let endpoint = this.resourceUrl + "/authenticate";
    const response = await this.http.post<CustomResponse>(endpoint, {data: credentials}).toPromise();
    return response;
  }


}
