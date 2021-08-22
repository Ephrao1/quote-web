import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/quotes';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuotes = new Quotes ("","","",new Date(),0,0);
    @Output() add = new EventEmitter<Quotes>();

    submittingQuote(){

        this.add.emit(this.newQuotes);
        // */this.newQuotes = new Quotes("","","",new Date(),0,0)
    }
    
  constructor() { }

  ngOnInit(): void {
  }

}
