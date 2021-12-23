import { Component, OnInit } from '@angular/core';
import { ServiceTitle } from '@shared/enums/service-title.enum';
import { Service } from '@features/portfolio/models/service.model';

@Component({
  selector: 'portfolio-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent implements OnInit {
  readonly services: Service[] = [
    {
      iconUrl: '/assets/icons/photography-videography-icon.svg',
      title: ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY,
      description:
        'Esse excepteur elit amet in aliqua ut anim. 1Incididunt elit quis anim sunt aliquip tempor.',
    },
    {
      iconUrl: '/assets/icons/social-media-management-icon.svg',
      title: ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
      description:
        'Qui quis pariatur qui aliquip eiusmod reprehenderit ut id nostrud aliquip sunt. Minim ut consectetur exercitation in do irure duis ex laboris id incididunt pariatur occaecat.',
    },
    {
      iconUrl: '/assets/icons/cooperations-icon.svg',
      title: ServiceTitle.COOPERATIONS,
      description:
        'Pariatur proident enim minim excepteur consectetur Lorem nisi consectetur nisi. Ipsum Lorem ullamco sint eiusmod officia in tempor ut nulla est.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
