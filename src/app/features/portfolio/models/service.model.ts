import { ServiceTitle } from '../../../shared/enums/service-title.enum';

export interface Service {
  iconUrl: string;
  title: ServiceTitle;
  description: string;
}
