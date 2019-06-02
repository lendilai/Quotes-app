import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quotes("", "", new Date());
  @Output() addQuote= new EventEmitter<Quotes>();
  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.addQuote.emit(this.newQuote);
  }
}
