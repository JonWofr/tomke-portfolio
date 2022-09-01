import { Pipe, PipeTransform } from '@angular/core';
import { ServiceTitle } from '@shared/enums/service-title.enum';

@Pipe({
  name: 'localizeServices',
})
export class LocalizeServicesPipe implements PipeTransform {
  localizedService = {
    [ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY]: $localize`:Photography and videography|:${ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY}`,
    [ServiceTitle.COOPERATIONS]: $localize`:Social media management|:${ServiceTitle.COOPERATIONS}`,
    [ServiceTitle.SOCIAL_MEDIA_MANAGEMENT]: $localize`:Cooperations|:${ServiceTitle.SOCIAL_MEDIA_MANAGEMENT}`,
  };

  transform(services: ServiceTitle[]): string[] {
    return services.map((service) => this.localizedService[service]);
  }
}
