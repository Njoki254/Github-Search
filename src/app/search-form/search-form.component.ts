import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchedUser: String;

  //Below is the function that emits the new User searched
  //Need to add function that suggests users for when searcher is typing

  @Output () searchOutcome = new EventEmitter<any>();

  constructor() { }

  emitSearch(){
    this.searchOutcome.emit(this.searchedUser);
    this.searchedUser = "";
  }

  

  ngOnInit() {

    
  }
}
