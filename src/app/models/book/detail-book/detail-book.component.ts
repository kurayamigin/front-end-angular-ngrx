import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Observable} from "rxjs";
import {DtoBook} from "../book.model";
import {selectBookDetails} from "./state/detail-book.selector";
import {Store} from "@ngrx/store";
import {DetailBookState} from "./state/detail-book.state";
import {loadBookDetails} from "./state/detail-book.actions";
import {DetailBookDto} from "./detail-book.dto";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: "detail-book",
  templateUrl: "detail-book.component.html",
  styleUrls: ['detail-book.style.scss']
})
export class DetailBookComponent implements OnInit{
  @Input('id') id!: number
  @Input() title!: string
  @Output() titleChange = new EventEmitter<string>();
  book!: DetailBookDto;
  book$: Observable<DetailBookDto> = this.store.select(selectBookDetails);

  constructor(public store: Store<DetailBookState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadBookDetails({id:this.id}));
    this.book$.subscribe((book) => {
      this.book = book;
      this.titleChange.emit(book.title);
    })
  }

}
