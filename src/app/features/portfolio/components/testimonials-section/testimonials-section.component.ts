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
      quote: $localize`Durch sein Know-how im Bereich Instagram Marketing hat Tomke maßgeblich zur Verbesserung der Unternehmensreichweite und unserem professionellen Instagramauftritt beigetragen.`,
      name: 'Christopher Tebartz van Elst',
      jobTitle: $localize`Geschäftsführer bei Irrland GmbH & Co. KG`,
    },
    {
      photoUrl: '/assets/images/testimonial-2.jpeg',
      quote: $localize`Tomke trägt maßgeblich zu unserem Erfolg in den sozialen Medien bei. Kreativität, Professionalität und Fairness stehen im Mittelpunkt unserer  Zusammenarbeit.`,
      name: 'Laurin Schad',
      jobTitle: $localize`V8 Hotel Böblingen`,
    },
    {
      photoUrl: '/assets/images/testimonial-3.jpg',
      quote: $localize`Seit einiger Zeit profitieren wir von Tomkes Expertise im Social-Media-Bereich. Er ist ohne Zweifel einer der stärksten Content-Creator im Automobil-Sektor und zeichnet sich durch eine extrem hohe Affinität für Perfomance und sein feines Händchen für die schnelllebige Zielgruppe aus.`,
      name: 'Chris Tschöpe',
      jobTitle: $localize`Geschäftsführer LeasingMarkt.de`,
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
