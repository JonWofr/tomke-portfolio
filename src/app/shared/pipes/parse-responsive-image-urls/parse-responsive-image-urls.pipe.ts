import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseResponsiveImageURLs',
})
export class ParseResponsiveImageURLs implements PipeTransform {
  transform(imageURL: string): string {
    const imageURLParts = imageURL.split('?');

    const sizes = [500, 1000, 2000];
    const imageURLs: string[] = [];

    sizes.forEach((size) => {
      const parsedImageURL = [
        `${imageURLParts[0]}_${size}`,
        ...imageURLParts.slice(1),
      ].join('?');
      imageURLs.push(`${parsedImageURL} ${size}w`);
    });

    return imageURLs.join(',');
  }
}
