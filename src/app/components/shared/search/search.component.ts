import { Component, OnInit } from '@angular/core';
import {FilterComponent} from "../filter/filter.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openFilter() {
    this.dialog.open(FilterComponent, {
      panelClass: 'fullscreen-dialog'
    });
  }

}
