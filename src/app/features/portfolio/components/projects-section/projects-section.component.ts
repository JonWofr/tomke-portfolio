import { Component, OnInit } from '@angular/core';
import { ServiceTitle } from '@features/portfolio/enums/service-title.enum';
import { Project } from '@features/portfolio/models/project.model';

export const projects = [
  {
    id: 'b83e94b2-f74b-4eb3-9d8e-5ed1e2166cd7',
    title: 'Brabus',
    thumbnailImageUrl: '/assets/images/1.jpeg',
    services: [
      ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY,
      ServiceTitle.COOPERATIONS,
      ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
    ],
    description:
      'Exercitation officia elit culpa excepteur eiusmod aute ut eiusmod. Enim excepteur exercitation est veniam ex dolore voluptate nulla dolore irure cupidatat incididunt sit. Ea excepteur sit sint nisi consequat. Consequat aliquip id qui elit. Eu ut est nulla proident.',
    slideshowImageUrls: [
      '/assets/images/1.jpeg',
      '/assets/images/1.jpeg',
      '/assets/images/1.jpeg',
      '/assets/images/1.jpeg',
    ],
    websiteUrl: '/',
    instagramUrl: '/',
    tikTokUrl: '/',
    linkedInUrl: '/',
  },
  {
    id: 'eb981e3c-2e8e-4066-aa64-687a8183e05d',
    title: 'Brabus II',
    thumbnailImageUrl: '/assets/images/2.jpeg',
    services: [ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY],
    description:
      'Ea nulla laboris fugiat do sit ipsum consequat magna aute duis excepteur irure velit irure. Quis mollit reprehenderit id pariatur sint nulla. Duis mollit eu et Lorem dolor minim excepteur. Consectetur cillum excepteur nostrud enim proident consequat qui velit. Ad minim dolor ea ea esse fugiat.',
    slideshowImageUrls: ['/assets/images/2.jpeg'],
  },
  {
    id: '5d149dd3-4200-4795-99ee-d5bf09e9c211',
    title: 'Porsche I',
    thumbnailImageUrl: '/assets/images/3.jpg',
    services: [ServiceTitle.SOCIAL_MEDIA_MANAGEMENT],
    description:
      'Fugiat quis nulla velit aliquip magna est nisi aute deserunt. Laborum do officia eu incididunt anim dolor esse elit. Nostrud sunt et consectetur aute tempor reprehenderit dolore reprehenderit nulla. Consectetur sunt id reprehenderit eu esse in do in elit mollit incididunt sunt sint voluptate. Sunt sit aute cillum nulla pariatur proident consectetur eu ea.',
    slideshowImageUrls: ['/assets/images/3.jpeg'],
  },
  {
    id: '1abb6399-8e50-4bdd-9c3a-d220b230f73b',
    title: 'Porsche II',
    thumbnailImageUrl: '/assets/images/4.jpeg',
    services: [
      ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY,
      ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
    ],
    description:
      'Fugiat do veniam qui eiusmod eiusmod Lorem duis nulla. Reprehenderit occaecat Lorem do Lorem ad. Elit eiusmod qui in eiusmod. Aliquip veniam ex labore aliquip excepteur consequat dolore nisi. Veniam sunt laborum aliqua velit cupidatat commodo voluptate commodo anim aliquip quis fugiat Lorem. Ipsum amet anim culpa culpa.',
    slideshowImageUrls: ['/assets/images/4.jpeg'],
  },
  {
    id: '20d203d0-ef1b-42ad-b545-c6db8838e712',
    title: 'Mercedes-Benz',
    thumbnailImageUrl: '/assets/images/5.jpeg',
    services: [ServiceTitle.COOPERATIONS, ServiceTitle.SOCIAL_MEDIA_MANAGEMENT],
    description:
      'Laborum aliqua sunt duis adipisicing dolor. Ex et amet magna ipsum tempor commodo minim aliqua. Aute laborum ipsum nisi duis pariatur est officia ut ipsum. Voluptate aliqua enim velit commodo nulla laboris excepteur irure officia non in laborum ex magna.',
    slideshowImageUrls: ['/assets/images/5.jpeg'],
  },
  {
    id: 'a2f355b1-4d47-41d8-8b70-bb080253a7da',
    title: 'Mercedes-Benz II',
    thumbnailImageUrl: '/assets/images/6.jpeg',
    services: [
      ServiceTitle.COOPERATIONS,
      ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
      ServiceTitle.COOPERATIONS,
    ],
    description:
      'Aute dolor dolor id tempor non excepteur ullamco ea ipsum consequat irure laboris eu. Tempor veniam veniam sint sunt adipisicing elit deserunt aute consequat exercitation veniam proident tempor. Aliquip officia amet ullamco adipisicing aliquip elit consequat velit labore. Dolor consequat nulla sit qui amet et irure mollit ea nisi voluptate est duis. Aliqua Lorem nulla ad exercitation. Sint ea sunt excepteur minim commodo anim sit.',
    slideshowImageUrls: ['/assets/images/6.jpeg'],
  },
  {
    id: '618c0faf-6f61-4264-b92c-20606290d690',
    title: 'G-Klasse',
    thumbnailImageUrl: '/assets/images/7.jpeg',
    services: [ServiceTitle.COOPERATIONS],
    description:
      'Incididunt in consectetur consequat nulla duis Lorem elit ad dolore aliquip duis aute quis tempor. In veniam ea amet exercitation occaecat aliquip sunt irure aliquip ut exercitation excepteur id ex. Sit exercitation excepteur incididunt laborum. Id ea id veniam exercitation ad qui amet in. Elit non aute minim dolor adipisicing ullamco cillum ad ad exercitation magna consequat. Proident consectetur ut id aliqua qui Lorem anim id aliquip irure nostrud consequat. In elit dolore nostrud enim proident irure id nulla reprehenderit consequat eiusmod proident esse enim.',
    slideshowImageUrls: ['/assets/images/7.jpeg'],
  },
];

@Component({
  selector: 'portfolio-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent implements OnInit {
  projects: Project[] = [];

  constructor() {}

  ngOnInit(): void {
    // Fetch projects from database
    this.projects = projects;
  }
}
