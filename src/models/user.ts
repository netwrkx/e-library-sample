export class User{
  public userName: string;
  public email: string;
  public state: string;
  public id: string;

  constructor(data: any){
    this.userName = data.userName;
    this.email = data.email;
    this.state = data.state;
    this.id = data.id;
  }
}
