import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropText',
})
export class CropTextPipe implements PipeTransform {
  transform(text: string, wordCount = 10): string {
    const words = text.split(' ');
    const croppedText = words.slice(0, wordCount).join(' ');
    return `${croppedText}...`;
  }
}
