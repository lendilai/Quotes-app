export class Quotes {
  showQuote: boolean;
  constructor(public author:string, public description:string, public newDate:Date){
    this.showQuote=false;
  }
}
