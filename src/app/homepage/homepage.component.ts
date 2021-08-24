import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  quotes: Quote[] = [
    new Quote(
      1,
      'Success is a do it yourself project',
      'Derick Monu',
      'Victor Kilonzi',
      new Date(2021, 2, 17),
      0,
      0
    ),
    new Quote(
      2,
      'Dont loose track over a passing storm',
      'Alex Karumbi',
      'James Ngangi',
      new Date(2020, 3, 1),
      0,
      0
    ),
  ];
  toggleDetails(index: any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.Date = new Date(quote.Date);
    console.log('hgvgvhv');
    this.quotes.push(quote);
  }

  deleteQuote(isComplete: any, index: any) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
