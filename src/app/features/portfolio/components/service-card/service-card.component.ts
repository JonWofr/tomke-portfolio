import { Component, Input, OnInit } from '@angular/core';
import { Service } from '@features/portfolio/models/service.model';

@Component({
  selector: 'portfolio-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent implements OnInit {
  @Input() service?: Service;

  constructor() {}

  ngOnInit(): void {}
}
