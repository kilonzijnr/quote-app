import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
newQuote = new Quote(0,"","","", new Date(),0,0);
name:any;
@Output() addQuote = new EventEmitter<Quote>();
submitQuote(){
  this.addQuote.emit(this.newQuote);
    }
  constructor() { 
  }

  ngOnInit(): void {
  }

}
