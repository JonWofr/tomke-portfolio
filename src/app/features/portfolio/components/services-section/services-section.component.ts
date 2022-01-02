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
        'Durch meine jahrelange Erfahrung in den Bereichen Foto- und Videographie, kann ich von individuellen Katalogbildern bis hin zum umfangreichen Imagefilm alles bieten. ',
    },
    {
      iconUrl: '/assets/icons/social-media-management-icon.svg',
      title: ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
      description:
        'Durch mein strategisches Know-how biete ich das gesamte Spektrum für einen erfolgreichen Social Media Auftritt aus einer Hand. Vom Konzept bis hin zum finalen Content und Management.',
    },
    {
      iconUrl: '/assets/icons/cooperations-icon.svg',
      title: ServiceTitle.COOPERATIONS,
      description:
        'Sie wollen mit Ihrem Unternehmen mehr Reichweite erzielen und Produkte oder Dienstleistungen via Social Media bewerben? Durch eine Kooperation mit mir können sie Hunderttausende Menschen erreichen. Ich freue mich auf gemeinsame Zusammenarbeit.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
