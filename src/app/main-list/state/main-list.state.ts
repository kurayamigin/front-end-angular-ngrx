import {ICategory} from "../../models/category/category.model";
import {DtoBook} from "../../models/book/book.model";

export interface MainListState {
  loading: any;
  categories: ICategory[];
  books: DtoBook[];

}

export const initialState: MainListState = {
  categories: [],
  books: [],
  loading: {categories: false, books:false}
};

