import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-dashboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  shouldShowModal = true;

  constructor() {}

  ngOnInit(): void {}
}
