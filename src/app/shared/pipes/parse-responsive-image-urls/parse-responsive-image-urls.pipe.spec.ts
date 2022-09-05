import { ParseResponsiveImageURLs } from './parse-responsive-image-urls.pipe';

describe('ParseImageUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new ParseResponsiveImageURLs();
    expect(pipe).toBeTruthy();
  });
});
