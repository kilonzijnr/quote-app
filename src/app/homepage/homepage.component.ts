import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  // ngOnInit(): void {
    // throw new Error('Method not implemented.');
  // }
  quotes: Quote[] = [
    new Quote(
      1,
      'Intoxicated people,children and leggings always tell the truth!😂',
      'Derick Monu',
      'Victor Kilonzi',
      new Date(2021, 2, 17),
      0,
      0
    ),
    new Quote(
      2,
      'You are always responsible of how you act no matter how you feel!✊',
      'James Ngangi',
      'Jabali Lionel',
      new Date(2020, 3, 1),
      0,
      0
    ),
    new Quote(
      3,
      'Leaardership is Gold.!✅🤌',
      'Mary Ngao',
      'Danson Mumo',
      new Date(2021, 2, 17),
      0,
      0
    ),
    new Quote(
      4,
      'Your intentions and goals determine your growth🤞👌',
      'Benson Kilonzi',
      'Mercy Clara',
      new Date(2021, 2, 17),
      0,
      0
    ),
    new Quote(
      5,
      'Your beauty is in your brains.Your looks are just a great bonus!❤️🤏',
      'Elizabeth Mugoya',
      'Faraja Bigman',
      new Date(2021, 2, 17),
      0,
      0
    ),
    new Quote(
      6,
      'You can nevr buy love.Show it trough theefforts you put toward your actions!😊🧡',
      'Peninah Martha',
      'Titus Mutinda',
      new Date(2021, 2, 17),
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
  upvote(index: any) {
    this.quotes[index].upvote++;
  }
  downvote(index: any) {
    this.quotes[index].downvote++;
  }

  constructor() { }

  ngOnInit(): void { }
}
