import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-dashboard-project-card-context-menu',
  templateUrl: './project-card-context-menu.component.html',
  styleUrls: ['./project-card-context-menu.component.scss'],
})
export class ProjectCardContextMenuComponent implements OnInit {
  @Output() clickEditButton = new EventEmitter<void>();
  @Output() clickDeleteButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
