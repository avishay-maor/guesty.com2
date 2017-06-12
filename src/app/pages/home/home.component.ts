import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToLocation() {
    this.router.navigate(['city/', this.location])
  }
}
