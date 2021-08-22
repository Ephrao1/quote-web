import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/quotes';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes('Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma - which is living with the results of other peoples thinking.', 'Steve Jobs','Ephraim Bundi', new Date(2021,1,13)),
    new Quotes('If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough.','Oprah Winfrey','Raphael Kigotho',new Date(2021,2,28)),
    new Quotes('If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.', 'James Cameron', 'Moses Kingori',new Date(2021,5,3)),
    new Quotes('Life is what happens when youre busy making other plans.', 'John LennonIf', 'Isaac Museu',new Date(2020,4,10)),
    new Quotes('When you reach the end of your rope, tie a knot in it and hang on.' , 'Franklin D. Roosevelt','Mungai Eve',new Date(2020,5,9)),
  ]

  
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)  
    this.quotes.push(quote)
  }
  
  deleteQuote(index){
    
            this.quotes.splice(index,1)
        }


upVoteQuote(index){
  this.quotes[index].upVote++
}

downVoteQuote(index){
  this.quotes[index].downVote++
}

highlightHighest() {
        
  let quotesUpvote = []
  let highestUpVote: number
  for (let j = 0; j < this.quotes.length; j++) {
    quotesUpvote.push(this.quotes[j].upVote)
  }
  
      

  quotesUpvote.sort(function (a, b) {
    return b - a
  })
  highestUpVote = quotesUpvote[0]
  return highestUpVote;
}
    
  constructor() { }

  ngOnInit(): void {
  }

}


  