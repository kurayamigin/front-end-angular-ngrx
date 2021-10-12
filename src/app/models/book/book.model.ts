import {ICategory} from "../category/category.model";

export interface IBook {
  id?: number;
  title?: string;
  coverUrl?: string | null;
  publishedYear?: number | null;
  synopsis?: string;
}

export class Book implements IBook {

  constructor(public categories: ICategory[], public title: string, public id?: number, public coverUrl?: string | null, public publishedYear?: number | null ) {}
}

export class DtoBook implements IBook {
  constructor(public categoriesIds: number[], public title: string, public id?: number, public coverUrl?: string | null, public publishedYear?: number | null ) {}
}





