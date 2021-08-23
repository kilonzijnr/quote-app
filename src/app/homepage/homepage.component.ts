
import { Component ,OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  quotes:Quote[] = [
  new Quote(1, 'Success is a do it yourself project', 'Derick Monu', 'Victor Kilonzi', new Date(2021,2,17) ,0 ,0),
  new Quote(2, 'Dont loose track over a passing storm', 'Alex Karumbi', 'James Ngangi', new Date(2020,3,1) ,0 ,0),
  ];
  toggleDetails(index:any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
