import { Component, Input, OnInit } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.component.html',
  styleUrls: ['./quotedetail.component.css']
})
export class QuotedetailComponent implements OnInit {
  @Input()
  quote!: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
