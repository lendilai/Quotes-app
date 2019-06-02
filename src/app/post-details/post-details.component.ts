import { Component, OnInit, Input } from '@angular/core';
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

  quoteDelete(complete:boolean){
    this.deleteIt.emit(complete);
  }
}
