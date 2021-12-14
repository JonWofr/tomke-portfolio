import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Testimonial } from '@features/portfolio/models/testimonial.model';
import Swiper from 'swiper';

@Component({
  selector: 'portfolio-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss'],
})
export class TestimonialsSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('testimonialSlideshowViewport')
  testimonalSlideshowViewport?: ElementRef<HTMLDivElement>;

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

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.testimonalSlideshowViewport)
      new Swiper(this.testimonalSlideshowViewport?.nativeElement);
  }
}
