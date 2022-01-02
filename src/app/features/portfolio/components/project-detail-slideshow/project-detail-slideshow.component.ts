import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Swiper, Autoplay } from 'swiper';

@Component({
  selector: 'portfolio-project-detail-slideshow',
  templateUrl: './project-detail-slideshow.component.html',
  styleUrls: ['./project-detail-slideshow.component.scss'],
})
export class ProjectDetailSlideshowComponent implements OnInit {
  @Input() imageUrls: string[] = [];
  @ViewChild('slideshowContainer')
  slideshowContainer?: ElementRef<HTMLDivElement>;

  swiper?: Swiper;
  activeSlideIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initialiseSwiper();
  }

  initialiseSwiper() {
    if (this.slideshowContainer) {
      Swiper.use([Autoplay]);
      this.swiper = new Swiper(this.slideshowContainer.nativeElement, {
        autoplay: true,
        grabCursor: true,
      });
      this.swiper.on('activeIndexChange', this.onActiveIndexChange.bind(this));
    }
  }

  onActiveIndexChange(swiper: Swiper): void {
    this.activeSlideIndex = swiper.activeIndex;
  }

  slideToPreviousSlide() {
    this.swiper?.slidePrev();
  }

  slideToNextSlide() {
    this.swiper?.slideNext();
  }

  onClickPreviewImageButton(slideIndex: number) {
    this.slideToSlide(slideIndex);
  }

  slideToSlide(slideIndex: number) {
    this.swiper?.slideTo(slideIndex);
  }
}
