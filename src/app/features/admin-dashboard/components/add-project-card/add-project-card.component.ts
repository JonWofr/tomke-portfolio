import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-dashboard-add-project-card',
  templateUrl: './add-project-card.component.html',
  styleUrls: ['./add-project-card.component.scss'],
})
export class AddProjectCardComponent implements OnInit {
  @Output() clickAddProjectCard = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
