import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import{Quote} from '../quote';
@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.component.html',
  styleUrls: ['./quotedetail.component.css']
})
export class QuotedetailComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() isComplete =new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
this.isComplete.emit(complete);
console.log('hshsh')
  }



  constructor() { }

  ngOnInit(): void {
  }

}
