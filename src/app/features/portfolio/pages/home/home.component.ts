import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderBackgroundColor } from '@shared/enums/header-background-color.enum';
import { SectionId } from '@shared/enums/section-id.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
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
      id: SectionId.NEWS,
      isIntersecting: undefined,
    },
    {
      id: SectionId.CONTACT,
      isIntersecting: undefined,
    },
  ];
  activeSectionId?: SectionId;
  sectionsIntersectionObserver?: IntersectionObserver;

  constructor(title: Title) {
    title.setTitle('Tomke Nils');
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.sectionsIntersectionObserver = this.initialiseIntersectionObserver(
      '.anchor-element',
      this.sectionsIntersectionObserverCallback.bind(this),
      {
        rootMargin: '-64px 0px 0px 0px',
        threshold: 0,
      }
    );
  }

  ngOnDestroy(): void {
    this.sectionsIntersectionObserver?.disconnect();
  }

  initialiseIntersectionObserver(
    elementsQuerySelector: string,
    intersectionObserverCallback: IntersectionObserverCallback,
    intersectionObserverOptions: IntersectionObserverInit
  ) {
    const intersectionObserver = new IntersectionObserver(
      intersectionObserverCallback,
      intersectionObserverOptions
    );
    const elements = document.querySelectorAll(elementsQuerySelector);
    elements.forEach((element) => intersectionObserver.observe(element));
    return intersectionObserver;
  }

  sectionsIntersectionObserverCallback(entries: IntersectionObserverEntry[]) {
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
