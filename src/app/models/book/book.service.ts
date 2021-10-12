import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoBook, IBook} from "./book.model";
import {Injectable} from "@angular/core";
import {DetailBookDto} from "./detail-book/detail-book.dto";
import {BorrowBookBean} from "../../borrow-book/borrow-book.bean";
import {CustomResponse} from "../../shared/response.model";

@Injectable({providedIn: 'root'})
export class BookService {
  private resourceUrl ='api/books';

  constructor(protected http: HttpClient) {
  }

  query(req?: any): Observable<IBook[]> {
    let options: HttpParams = new HttpParams();
    Object.keys(req).forEach(key => {
        options = options.set(key, req[key])
    });
    return this.http.get<IBook[]>(this.resourceUrl, {params: options, observe: 'body'});
  }

  loadByCategoriesId(categoriesId: number[]): Observable<DtoBook[]> {

    let endpoint = this.resourceUrl + "/byCategories/";
    return this.http.get<DtoBook[]>(endpoint, {params: {categoriesId: categoriesId}, observe: 'body' })
  }

  getDetails(id : number) {
    let endpoint = this.resourceUrl + "/details/" + id;
    return this.http.get<DetailBookDto>(endpoint, {params: {}, observe: 'body'});
  }

  borrow(borrowForm: BorrowBookBean) {
    let endpoint = this.resourceUrl + "/borrow";
    return this.http.post<CustomResponse>(endpoint, {data: borrowForm});
  }
}
