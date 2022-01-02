import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@shared/models/project.model';

@Component({
  selector: 'portfolio-project-gallery-item',
  templateUrl: './project-gallery-item.component.html',
  styleUrls: ['./project-gallery-item.component.scss'],
})
export class ProjectGalleryItemComponent implements OnInit {
  @Input() project?: Project;

  constructor() {}

  ngOnInit(): void {}
}
