import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchType = 1;

  constructor() { }

  ngOnInit(): void {
  }

  setSearchType(num: number): void {
    this.searchType = num;
  }
  
}
