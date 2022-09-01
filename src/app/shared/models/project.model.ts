import { ServiceTitle } from '../enums/service-title.enum';
import { Timestamp } from '@angular/fire/firestore';

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  thumbnailImageUrl: string;
  services: ServiceTitle[];
  description: string;
  descriptionEn: string;
  slideshowImageUrls: string[];
  websiteUrl?: string;
  linkedInUrl?: string;
  instagramUrl?: string;
  tikTokUrl?: string;
  createdAt: Timestamp;
  modifiedAt: Timestamp;
}
