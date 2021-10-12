export interface IUser {
  id?: number;
  username: string;
}


export class DtoUser implements IUser{
  constructor(
    public username: string,
  public email: string,
  public password: string,
  public firstname: string,
  public lastname: string,
  public phone: string,
  public id?: number) {
  }
}
export class DtoProfile implements IUser{
  constructor(
    public username: string,
  public email: string,
  public firstname: string,
  public lastname: string,
  public phone: string,
  public id?: number) {
  }
}

