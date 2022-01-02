import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Testimonial } from '@features/portfolio/models/testimonial.model';
import { Swiper, Autoplay } from 'swiper';

@Component({
  selector: 'portfolio-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss'],
})
export class TestimonialsSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('slideshowContainer')
  slideshowContainer?: ElementRef<HTMLDivElement>;

  testimonials: Testimonial[] = [
    {
      photoUrl: '/assets/images/testimonial-1.jpeg',
      quote:
        'Nisi elit consectetur consectetur officia fugiat et dolore ullamco anim qui adipisicing aliquip ea in.',
      name: 'Ola Källenius',
      jobTitle: 'CEO Daimler',
    },
    {
      photoUrl: '/assets/images/testimonial-2.jpeg',
      quote: 'Excepteur proident tempor esse et ea.',
      name: 'Oliver Blume',
      jobTitle: 'CEO Porsche',
    },
    {
      photoUrl: '/assets/images/testimonial-3.jpg',
      quote: 'In aliquip labore elit deserunt cupidatat exercitation.',
      name: 'Tobias Moers',
      jobTitle: 'CEO AMG',
    },
  ];
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

  onChangePaginationButton(slideIndex: number) {
    this.slideToSlide(slideIndex);
  }

  slideToSlide(slideIndex: number) {
    this.swiper?.slideTo(slideIndex);
  }
}
