import { Component, Inject, Input, OnInit } from '@angular/core';
import { Project } from '@shared/models/project.model';
import { LOCALE_ID } from '@angular/core';
import { ServiceTitle } from '@shared/enums/service-title.enum';

@Component({
  selector: 'portfolio-project-gallery-item',
  templateUrl: './project-gallery-item.component.html',
  styleUrls: ['./project-gallery-item.component.scss'],
})
export class ProjectGalleryItemComponent implements OnInit {
  @Input() project?: Project;

  constructor(@Inject(LOCALE_ID) public localeId: string) {}

  ngOnInit(): void {}
}
