import { ServiceTitle } from '../enums/service-title.enum';

export interface Project {
  title: string;
  thumbnailImageUrl: string;
  services: ServiceTitle[];
  description: string;
  slideshowImagesUrls: string[];
  websiteUrl?: string;
  linkedInUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
}
