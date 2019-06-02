import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  @Input() quote:Quotes;
  @Output() deleteIt = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  quoteDelete(remove:boolean){
    this.deleteIt.emit(remove);
  }
}
