import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchedUser: String;

  @Output () searchOutput = new EventEmitter<any>();

  constructor() { }

  emitSearch(){
    this.searchOutput.emit(this.searchedUser);
    this.searchedUser = "";
  }

  

  ngOnInit() {

    
  }
}
