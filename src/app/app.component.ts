import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rentfinder-front';

  router: string = "";

  constructor(private _router: Router) {
    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd
    )).subscribe({
      next: (value) => {
        console.log(value)
        this.router = (value as NavigationEnd).urlAfterRedirects
      }
    })
  }

}
