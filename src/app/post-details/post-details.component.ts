import { Component, HostBinding, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  @Input() quote:Quotes;
  @Output() deleteIt = new EventEmitter<boolean>();
  @HostBinding('attr.class') cssClass='row';
  votes: number;

  constructor() {
    this.votes= 0;
    this.votesDown= 0;
   }

  voteUp(){
    this.votes += 1;
  }

  voteDown(){
    this.votesDown -= 1;
  }
  ngOnInit() {
  }

  quoteDelete(remove:boolean){
    this.deleteIt.emit(remove);
  }
}
