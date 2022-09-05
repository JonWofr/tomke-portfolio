import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseResponsiveImageURLs',
})
export class ParseResponsiveImageURLs implements PipeTransform {
  transform(imageURL: string): string {
    const imageURLParts = imageURL.split('?');
    const filePath = imageURLParts[0];
    const filePathParts = filePath.split('.');
    const extension =
      filePathParts.length > 0 ? filePathParts[filePathParts.length - 1] : '';
    const filePathWithoutExtension =
      filePathParts.length > 0
        ? filePathParts.slice(0, -1).join('.')
        : filePath;

    const sizes = [500, 1000, 2000];
    const responsiveImageURLs: string[] = [];

    sizes.forEach((size) => {
      const sizedFilePath = `${filePathWithoutExtension}-${size}.${extension}`;
      const parsedImageURL =
        imageURLParts.length > 0
          ? [sizedFilePath, ...imageURLParts.slice(1)].join('?')
          : sizedFilePath;
      responsiveImageURLs.push(`${parsedImageURL} ${size}w`);
    });

    return responsiveImageURLs.join(',');
  }
}
