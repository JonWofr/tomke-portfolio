import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeaderBackgroundColor } from '@shared/enums/header-background-color.enum';
import { SectionId } from '@shared/enums/section-id.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  SectionId = SectionId;

  headerBackgroundColor?: HeaderBackgroundColor;
  sections: { id: SectionId; isIntersecting?: boolean }[] = [
    {
      id: SectionId.HOME,
      isIntersecting: undefined,
    },
    {
      id: SectionId.ABOUT,
      isIntersecting: undefined,
    },
    {
      id: SectionId.SERVICES,
      isIntersecting: undefined,
    },
    {
      id: SectionId.PROJECTS,
      isIntersecting: undefined,
    },
    {
      id: SectionId.CLIENTS,
      isIntersecting: undefined,
    },
    {
      id: SectionId.TESTIMONIALS,
      isIntersecting: undefined,
    },
    {
      id: SectionId.CONTACT,
      isIntersecting: undefined,
    },
  ];
  activeSectionId?: SectionId;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initialiseIntersectionObserver();
  }

  initialiseIntersectionObserver() {
    const intersectionObserver = this.createIntersectionObserver();
    document.querySelectorAll('.anchor-element').forEach((element) => {
      intersectionObserver.observe(element);
    });
  }

  createIntersectionObserver() {
    const intersectionObserverOptions: IntersectionObserverInit = {
      rootMargin: '-64px 0px 0px 0px',
      threshold: 0,
    };
    const intersectionObserver = new IntersectionObserver(
      this.intersectionObserverCallback.bind(this),
      intersectionObserverOptions
    );
    return intersectionObserver;
  }

  intersectionObserverCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      const section = this.sections.find(
        (section) => section.id === entry.target.id
      );
      if (!section) return;
      section.isIntersecting = entry.isIntersecting;
      if (this.isEverySectionInitialised()) {
        const activeSection = this.findActiveSection();
        if (activeSection?.id !== this.activeSectionId)
          this.activeSectionId = activeSection?.id;
      }
    });
  }

  isEverySectionInitialised() {
    return (
      this.sections.filter((section) => section.isIntersecting !== undefined)
        .length === this.sections.length
    );
  }

  findActiveSection() {
    return this.sections.find((section) => section.isIntersecting);
  }

  onChangeHeroTitleIntersection(isIntersecting: boolean) {
    this.headerBackgroundColor = isIntersecting
      ? HeaderBackgroundColor.TRANSPARENT
      : HeaderBackgroundColor.WHITE;
  }
}
