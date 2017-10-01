export class User {
  public id: string;
  public userName: string;
  public state: string;
  constructor(data: any){
    this.id = data.id;
    this.userName = data.userName;
    this.state = data.state;
  }
}
