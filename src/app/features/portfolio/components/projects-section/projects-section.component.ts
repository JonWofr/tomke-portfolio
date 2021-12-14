import { Component, OnInit } from '@angular/core';
import { ServiceTitle } from '@features/portfolio/enums/service-title.enum';
import { Project } from '@features/portfolio/models/project.model';

@Component({
  selector: 'portfolio-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Brabus',
      thumbnailImageUrl: '/assets/images/1.jpeg',
      services: [ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY],
      description:
        'Exercitation officia elit culpa excepteur eiusmod aute ut eiusmod. Enim excepteur exercitation est veniam ex dolore voluptate nulla dolore irure cupidatat incididunt sit. Ea excepteur sit sint nisi consequat. Consequat aliquip id qui elit. Eu ut est nulla proident.',
      slideshowImagesUrls: ['/assets/images/1.jpeg'],
    },
    {
      title: 'Brabus II',
      thumbnailImageUrl: '/assets/images/2.jpeg',
      services: [ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY],
      description:
        'Ea nulla laboris fugiat do sit ipsum consequat magna aute duis excepteur irure velit irure. Quis mollit reprehenderit id pariatur sint nulla. Duis mollit eu et Lorem dolor minim excepteur. Consectetur cillum excepteur nostrud enim proident consequat qui velit. Ad minim dolor ea ea esse fugiat.',
      slideshowImagesUrls: ['/assets/images/2.jpeg'],
    },
    {
      title: 'Porsche I',
      thumbnailImageUrl: '/assets/images/3.jpg',
      services: [ServiceTitle.SOCIAL_MEDIA_MANAGEMENT],
      description:
        'Fugiat quis nulla velit aliquip magna est nisi aute deserunt. Laborum do officia eu incididunt anim dolor esse elit. Nostrud sunt et consectetur aute tempor reprehenderit dolore reprehenderit nulla. Consectetur sunt id reprehenderit eu esse in do in elit mollit incididunt sunt sint voluptate. Sunt sit aute cillum nulla pariatur proident consectetur eu ea.',
      slideshowImagesUrls: ['/assets/images/3.jpeg'],
    },
    {
      title: 'Porsche II',
      thumbnailImageUrl: '/assets/images/4.jpeg',
      services: [
        ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY,
        ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
      ],
      description:
        'Fugiat do veniam qui eiusmod eiusmod Lorem duis nulla. Reprehenderit occaecat Lorem do Lorem ad. Elit eiusmod qui in eiusmod. Aliquip veniam ex labore aliquip excepteur consequat dolore nisi. Veniam sunt laborum aliqua velit cupidatat commodo voluptate commodo anim aliquip quis fugiat Lorem. Ipsum amet anim culpa culpa.',
      slideshowImagesUrls: ['/assets/images/4.jpeg'],
    },
    {
      title: 'Mercedes-Benz',
      thumbnailImageUrl: '/assets/images/5.jpeg',
      services: [
        ServiceTitle.COOPERATIONS,
        ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
      ],
      description:
        'Laborum aliqua sunt duis adipisicing dolor. Ex et amet magna ipsum tempor commodo minim aliqua. Aute laborum ipsum nisi duis pariatur est officia ut ipsum. Voluptate aliqua enim velit commodo nulla laboris excepteur irure officia non in laborum ex magna.',
      slideshowImagesUrls: ['/assets/images/5.jpeg'],
    },
    {
      title: 'Mercedes-Benz II',
      thumbnailImageUrl: '/assets/images/6.jpeg',
      services: [
        ServiceTitle.COOPERATIONS,
        ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
        ServiceTitle.COOPERATIONS,
      ],
      description:
        'Aute dolor dolor id tempor non excepteur ullamco ea ipsum consequat irure laboris eu. Tempor veniam veniam sint sunt adipisicing elit deserunt aute consequat exercitation veniam proident tempor. Aliquip officia amet ullamco adipisicing aliquip elit consequat velit labore. Dolor consequat nulla sit qui amet et irure mollit ea nisi voluptate est duis. Aliqua Lorem nulla ad exercitation. Sint ea sunt excepteur minim commodo anim sit.',
      slideshowImagesUrls: ['/assets/images/6.jpeg'],
    },
    {
      title: 'G-Klasse',
      thumbnailImageUrl: '/assets/images/7.jpeg',
      services: [ServiceTitle.COOPERATIONS],
      description:
        'Incididunt in consectetur consequat nulla duis Lorem elit ad dolore aliquip duis aute quis tempor. In veniam ea amet exercitation occaecat aliquip sunt irure aliquip ut exercitation excepteur id ex. Sit exercitation excepteur incididunt laborum. Id ea id veniam exercitation ad qui amet in. Elit non aute minim dolor adipisicing ullamco cillum ad ad exercitation magna consequat. Proident consectetur ut id aliqua qui Lorem anim id aliquip irure nostrud consequat. In elit dolore nostrud enim proident irure id nulla reprehenderit consequat eiusmod proident esse enim.',
      slideshowImagesUrls: ['/assets/images/7.jpeg'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
