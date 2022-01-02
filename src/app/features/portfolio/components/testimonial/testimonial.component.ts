import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from '@features/portfolio/models/testimonial.model';

@Component({
  selector: 'portfolio-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  @Input() testimonial?: Testimonial;

  constructor() {}

  ngOnInit(): void {}
}
