import { ServiceTitle } from '../../features/portfolio/enums/service-title.enum';
import { Timestamp } from '@angular/fire/firestore';

export interface Project {
  id: string;
  title: string;
  thumbnailImageUrl: string;
  services: ServiceTitle[];
  description: string;
  slideshowImageUrls: string[];
  websiteUrl?: string;
  linkedInUrl?: string;
  instagramUrl?: string;
  tikTokUrl?: string;
  createdAt: Timestamp;
  modifiedAt: Timestamp;
}
