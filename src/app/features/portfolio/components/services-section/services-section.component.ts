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
        'Von individuellen Katalogbildern bis hin zum umfangreichen Imagefilm: Ich übernehm’s!',
    },
    {
      iconUrl: '/assets/icons/social-media-management-icon.svg',
      title: ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
      description:
        'Durch mein strategisches Know-how biete ich das gesamte Spektrum für einen erfolgreichen Social Media Auftritt.',
    },
    {
      iconUrl: '/assets/icons/cooperations-icon.svg',
      title: ServiceTitle.COOPERATIONS,
      description:
        'Mehr Reichweite erzielen, Produkte oder Dienstleistungen via Social Media bewerben? - Durch eine Kooperation mit mir können sie hunderttausende Menschen erreichen.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
