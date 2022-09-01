import { Component, OnInit } from '@angular/core';
import { Service } from '@features/portfolio/models/service.model';
import { ServiceTitle } from '@shared/enums/service-title.enum';

@Component({
  selector: 'portfolio-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent implements OnInit {
  // An additional meaning has to be added for the translator. Otherwise for whatever reason the translator can't
  // differentiate the different strings and generates only one trans-unit
  readonly services: Service[] = [
    {
      iconUrl: '/assets/icons/photography-videography-icon.svg',
      title: $localize`:Photography and videography|:${ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY}`,
      description: $localize`Von individuellen Katalogbildern bis hin zum umfangreichen Imagefilm: Ich übernehm's!`,
    },
    {
      iconUrl: '/assets/icons/social-media-management-icon.svg',
      title: $localize`:Social media management|:${ServiceTitle.SOCIAL_MEDIA_MANAGEMENT}`,
      description: $localize`Durch mein strategisches Know-how biete ich das gesamte Spektrum für einen erfolgreichen Social Media Auftritt.`,
    },
    {
      iconUrl: '/assets/icons/cooperations-icon.svg',
      title: $localize`:Cooperations|:${ServiceTitle.COOPERATIONS}`,
      description: $localize`Mehr Reichweite erzielen, Produkte oder Dienstleistungen via Social Media bewerben? - Durch eine Kooperation mit mir können sie hunderttausende Menschen erreichen.`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
