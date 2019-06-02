import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  quotes = [
    new Quotes("Benjamin Franklin", "Tell me and I forget. Teach me and I remember. Involve me and I learn.", new Date(1782, 3, 24)),
    new Quotes("Bob Marley", "One good thing about music, when it hits you, you feel no pain.", new Date(1963, 7, 2)),
    new Quotes("Abraham Lincoln", "In the end, it's not the years in your life that count. It's the life in your years.", new Date(1860, 5, 13)),
    new Quotes("The Notorius B.I.G", "Mo money mo problems.", new Date(1997, 1, 7)),
    new Quotes("Marshall Mathers", "I’d shoot for the moon but I’m too busy gazing at stars.", new Date(2010, 3, 29)),
  ];

  showDescription(index){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  removeIt(deleteIt, index){
    if(deleteIt){
      this.quotes.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
