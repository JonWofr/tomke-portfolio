import { ServiceTitle } from '../enums/service-title.enum';

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
}
