import { ServiceTitle } from '../enums/service-title.enum';

export interface Service {
  iconUrl: string;
  title: ServiceTitle;
  description: string;
}
