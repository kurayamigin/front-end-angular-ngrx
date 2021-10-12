import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategory} from "./category.model";
import { Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class CategoryService {
  private resourceUrl = environment.serverUrl + "/api/categories";

  constructor(protected http: HttpClient) {}

  query(req?: any): Observable<ICategory[]> {
    console.log(this.resourceUrl)
    let options: HttpParams = new HttpParams();
    if (req)
    Object.keys(req).forEach(key => {
      options = options.set(key, req[key])
    });
    return this.http.get<ICategory[]>(this.resourceUrl, {params: options, observe:'body'});
  }
}
