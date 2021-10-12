import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {DtoUser} from "./user.model";
@Injectable({providedIn: 'root'})
export class UserService {
  private resourceUrl ='api/auth';

  constructor(protected http: HttpClient) {
  }

  query(req?: any): Observable<DtoUser[]> {
    let options: HttpParams = new HttpParams();
    Object.keys(req).forEach(key => {
      options = options.set(key, req[key])
    });
    return this.http.get<DtoUser[]>(this.resourceUrl, {params: options, observe: 'body'});
  }

  getUser(username: string): Observable<DtoUser> {
    let endpoint = this.resourceUrl + "/profile/" + username;
    return this.http.post<DtoUser>(endpoint, {observe: 'body'});
  }

}
