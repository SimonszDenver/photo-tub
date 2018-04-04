export class Url{
  id: number;
  path: string;
  className: string;

  constructor(private urlId: number,private urlPath: string,private urlClassName: string){
    this.id = urlId;
    this.path = urlPath;
    this.className = urlClassName;
  }
}
