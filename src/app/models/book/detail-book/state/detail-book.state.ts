import {DetailBookDto} from "../detail-book.dto";

export interface DetailBookState {
  loading: boolean;
  book: DetailBookDto;

}

export const initialState: DetailBookState = {
  book: {
    id: undefined,
    title: '',
    coverUrl: '',
    publishedYear: undefined,
    categoriesNames: [],
    synopsis: '',
  },
  loading: false
};

