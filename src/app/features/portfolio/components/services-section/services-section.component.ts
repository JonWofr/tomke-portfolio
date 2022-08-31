import { Component, OnInit } from '@angular/core';
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
      title: $localize`Fotografie & Videografie`,
      description: $localize`Von individuellen Katalogbildern bis hin zum umfangreichen Imagefilm: Ich übernehm's!`,
    },
    {
      iconUrl: '/assets/icons/social-media-management-icon.svg',
      title: $localize`Social Media Management`,
      description: $localize`Durch mein strategisches Know-how biete ich das gesamte Spektrum für einen erfolgreichen Social Media Auftritt.`,
    },
    {
      iconUrl: '/assets/icons/cooperations-icon.svg',
      title: $localize`Kooperationen`,
      description: $localize`Mehr Reichweite erzielen, Produkte oder Dienstleistungen via Social Media bewerben? - Durch eine Kooperation mit mir können sie hunderttausende Menschen erreichen.`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
