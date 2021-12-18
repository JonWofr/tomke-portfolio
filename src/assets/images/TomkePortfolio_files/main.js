"use strict";
(self["webpackChunktomke_portfolio"] = self["webpackChunktomke_portfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





const routes = [];
class AppRoutingModule {
    constructor(router, viewportScroller) {
        // Custom implementation for working scroll position restoration at backwards navigation and anchor scrolling.
        // Without custom implementation it's tedious to enable smooth scrolling for anchor scrolling only and somehow scroll position
        // restoration is not working properly. Although it is not working 100% with this solution either.
        router.events
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.Scroll))
            .subscribe((event) => {
            var _a;
            if (event.position) {
                // Backward navigation. Small timeout because otherwise the previous position can't be calculated correctly.
                const position = event.position;
                setTimeout(() => {
                    viewportScroller.scrollToPosition(position);
                }, 50);
            }
            else if (event.anchor) {
                // Anchor navigation. Scroll-margin is set for all anchors in CSS.
                console.log('anchor navigation');
                (_a = document
                    .getElementById(event.anchor)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
            }
            else {
                // Forward navigation
                viewportScroller.scrollToPosition([0, 0]);
            }
        });
    }
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.ViewportScroller)); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'tomke-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _features_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/portfolio/portfolio.module */ 5969);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule, _features_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_0__.PortfolioModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule, _features_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_0__.PortfolioModule] }); })();


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * This module contains singleton services, universal components
 * and other features where there is only one instance per application.
 * The module should only be imported once (in the app module).
 */
class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule] }); })();


/***/ }),

/***/ 5181:
/*!****************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/about-section/about-section.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutSectionComponent": () => (/* binding */ AboutSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../section-header/section-header.component */ 3930);


class AboutSectionComponent {
    constructor() { }
    ngOnInit() { }
}
AboutSectionComponent.ɵfac = function AboutSectionComponent_Factory(t) { return new (t || AboutSectionComponent)(); };
AboutSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutSectionComponent, selectors: [["portfolio-about-section"]], decls: 10, vars: 0, consts: [[1, "section", "about"], [1, "container"], ["title", "Was mich ausmacht", "subtitle", "\u00DCber mich"], [1, "about__content-container"], [1, "about__image-container"], [1, "padding-top-hack", "padding-top-hack--1-by-1"], [1, "padding-top-hack__inner-container"], ["src", "/assets/images/about-image.jpeg", "alt", "", 1, "about__image"], [1, "section__paragraph"]], template: function AboutSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "portfolio-section-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Labore id qui cupidatat laborum mollit. Velit eiusmod ullamco laborum commodo sunt laboris sunt consectetur aliqua laborum consectetur quis magna ea. Id exercitation fugiat sunt adipisicing. Veniam et nisi cillum officia nostrud non labore do commodo proident sunt dolor pariatur ullamco. Sunt officia in ut quis ut dolore magna in in. Incididunt anim eiusmod velit fugiat. Eu occaecat aliquip aliqua voluptate laboris aute qui cillum incididunt pariatur sit laboris aute. Adipisicing aute ea est do. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_0__.SectionHeaderComponent], styles: [".about__content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.about__image-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  margin-bottom: 2rem;\n}\n.about__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: relative;\n  border-radius: 12px;\n}\n@media only screen and (min-width: 768px) {\n  .about__content-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    grid-gap: 4rem;\n    gap: 4rem;\n    max-width: 992px;\n    margin: 0 auto;\n  }\n  .about__image-container[_ngcontent-%COMP%] {\n    flex: none;\n    width: 40%;\n    margin: initial;\n    padding-top: 0;\n  }\n}\n.padding-top-hack__inner-container[_ngcontent-%COMP%]::before {\n  display: block;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-image: linear-gradient(90deg, #5452e0, #cd52e0);\n  transform: rotate(14deg);\n  border-radius: 12px;\n}\n.section__paragraph[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media only screen and (min-width: 768px) {\n  .section__paragraph[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvYWJzdHJhY3RzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSko7QUFPRTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtBQU5KO0FBU0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkNnQ29CO0FEdkN4QjtBRVZFO0VGcUJFO0lBQ0UsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFBQSxTQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBUko7RUFXRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUVBLGNBQUE7RUFWSjtBQUNGO0FBZUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDBEQy9DbUI7RURnRG5CLHdCQUFBO0VBQ0EsbUJDRG9CO0FEWHhCO0FBZ0JBO0VBQ0UsT0FBQTtBQWJGO0FFMUNFO0VGc0RGO0lBSUksZ0JBQUE7RUFaRjtBQUNGIiwiZmlsZSI6ImFib3V0LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwic2FzczptYXBcIjtcbkBpbXBvcnQgXCJhYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiYWJzdHJhY3RzL21peGluc1wiO1xuXG4uYWJvdXQge1xuICAmX19jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgJl9faW1hZ2UtY29udGFpbmVyIHtcbiAgICAvLyAycmVtIHBhZGRpbmcgZm9yIHRoZSBiYWNrZ3JvdW5kLWJveFxuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gICZfX2ltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6ICRkZWZhdWx0LWJvcmRlci1yYWRpdXM7XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKFwibWRcIikge1xuICAgICZfX2NvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cmVtO1xuICAgICAgbWF4LXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgJl9faW1hZ2UtY29udGFpbmVyIHtcbiAgICAgIGZsZXg6IG5vbmU7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgbWFyZ2luOiBpbml0aWFsO1xuICAgICAgLy8gRW5vdWdoIHNwYWNpbmcgcHJvdmlkZWQgYnkgc2VjdGlvbi1oZWFkZXIgbWFyZ2luLWJvdHRvbVxuICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICB9XG59XG5cbi5wYWRkaW5nLXRvcC1oYWNrX19pbm5lci1jb250YWluZXIge1xuICAmOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkcHJpbWFyeS1hY2NlbnQtY29sb3I7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTRkZWcpO1xuICAgIGJvcmRlci1yYWRpdXM6ICRkZWZhdWx0LWJvcmRlci1yYWRpdXM7XG4gIH1cbn1cblxuLnNlY3Rpb25fX3BhcmFncmFwaCB7XG4gIGZsZXg6IDE7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChcIm1kXCIpIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG4iLCIvLyBDb2xvcnNcbiRwcmltYXJ5LWZvbnQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XG4kcHJpbWFyeS1mb250LWNvbG9yLWRhcms6ICMzMDMwMzA7XG4kc2Vjb25kYXJ5LWZvbnQtY29sb3ItbGlnaHQ6ICNlMmUyZTI7XG4kc2Vjb25kYXJ5LWZvbnQtY29sb3ItZGFyazogIzVjNWM1YztcbiRwcmltYXJ5LWFjY2VudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KFxuICA5MGRlZyxcbiAgaHNsKDI0MSwgNzAsIDYwKSxcbiAgaHNsKDI5MiwgNzAsIDYwKVxuKTtcbiRwcmltYXJ5LWFjY2VudC1jb2xvci1ob3ZlcjogaHNsKDM0OCwgNzglLCA0MSUpO1xuJHByaW1hcnktYWNjZW50LWNvbG9yLWRpc2FibGVkLWZpbHRlcjogc2F0dXJhdGUoMzAlKSBicmlnaHRuZXNzKDEuNSk7XG4kc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogIzk5OTdmZjtcbiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3ItbGlnaHQ6ICNmNmY2ZjY7XG4kcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICMyYTJhMmE7XG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3ItZGFyazogIzNhM2EzYTtcbiRvdmVybGF5LWNvbG9yOiBoc2xhKDAsIDAsIDAsIDAuNyk7XG4kbXV0ZWQtY29sb3I6ICNjNGM0YzQ7XG4kZXJyb3ItY29sb3I6IGhzbCgwLCA3NyUsIDU4JSk7XG5cbi8vIEJvb3RzdHJhcCBicmVha3BvaW50c1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4LFxuKTtcblxuJGNvbnRhaW5lci13aWR0aHM6IChcbiAgXCJ4c1wiOiAxMDAlLFxuICBcInNtXCI6IDU0MHB4LFxuICBcIm1kXCI6IDcyMHB4LFxuICBcImxnXCI6IDk2MHB4LFxuICBcInhsXCI6IDExNDBweCxcbiAgXCJ4eGxcIjogMTMyMHB4LFxuKTtcblxuLy8gQm9vdHN0cmFwIGdyaWRcbiRjb250YWluZXItaG9yaXpvbnRhbC1wYWRkaW5nLXhzOiAwLjc1cmVtO1xuXG4vLyBGb250LWZhbWlsaWVzXG4kcHJpbWFyeS1mb250LWxpZ2h0OiBcIlBvcHBpbnMtTGlnaHRcIjtcbiRwcmltYXJ5LWZvbnQtcmVndWxhcjogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiRwcmltYXJ5LWZvbnQtYm9sZDogXCJQb3BwaW5zLUJvbGRcIjtcblxuJHNlY29uZGFyeS1mb250LWxpZ2h0OiBcIlJhaWx3YXktTGlnaHRcIjtcbiRzZWNvbmRhcnktZm9udC1yZWd1bGFyOiBcIlJhaWx3YXktUmVndWxhclwiO1xuJHNlY29uZGFyeS1mb250LWJvbGQ6IFwiUmFpbHdheS1Cb2xkXCI7XG5cbi8vIE1pc2NcbiRkZWZhdWx0LWJvcmRlci1yYWRpdXM6IDEycHg7XG4kZGVmYXVsdC1idXR0b24taGl0Ym94OiAwLjVyZW07XG4kZGVmYXVsdC1ib3gtc2hhZG93OiAwIDRweCA0cHggMCBoc2xhKDAsIDAsIDAsIDAuMjUpO1xuXG4vLyBUcmFuc2l0aW9uc1xuJGRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG4kZGVmYXVsdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4iLCJAdXNlIFwic2FzczptYXBcIjtcbkBpbXBvcnQgXCJhYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRncmlkLWJyZWFrcG9pbnQpIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAkZ3JpZC1icmVha3BvaW50KSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJGdyaWQtYnJlYWtwb2ludCkge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGNhbGMobWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJGdyaWQtYnJlYWtwb2ludCkgLSAxcHgpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHdpdGgtdHJhbnNpdGlvbihcbiAgJHRyYW5zaXRpb24tcHJvcGVydHksXG4gICR0cmFuc2l0aW9uLWR1cmF0aW9uOiAkZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRkZWZhdWx0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXG4pIHtcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tcHJvcGVydHkgJHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb247XG59XG4iXX0= */"] });


/***/ }),

/***/ 4171:
/*!********************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/clients-section/clients-section.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsSectionComponent": () => (/* binding */ ClientsSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ClientsSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClientsSectionComponent.ɵfac = function ClientsSectionComponent_Factory(t) { return new (t || ClientsSectionComponent)(); };
ClientsSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsSectionComponent, selectors: [["portfolio-clients-section"]], decls: 7, vars: 0, consts: [[1, "section", "clients-section"], ["width", "201", "height", "26", "viewBox", "0 0 201 26", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "clients-section__logo"], ["d", "M6.49969 0C1.32423 0 1.17275 0.3282 1.42521 1.86822H3.14195C4.7577 1.86822 5.11115 2.09543 5.11115 3.48397V20.4746C5.11115 22.873 4.4295 23.1507 0.566841 23.3527C0.44061 23.8324 0.44061 24.3878 0.566841 24.7665H14.0988C24.374 24.7665 28.6406 19.793 28.6406 12.3959C28.6406 4.69578 24.1467 0.0252461 13.7706 0.0252461L6.49969 0ZM9.63021 20.2222V2.12068H13.3414C20.2588 2.12068 23.8438 6.16006 23.8438 13.0523C23.8438 20.8028 19.9306 22.772 13.7706 22.772C10.4128 22.7973 9.63021 22.4186 9.63021 20.2222ZM44.6214 0.252461C42.9299 0.252461 42.4502 0.833123 41.2636 3.6102L34.1442 20.4746C33.1596 22.772 32.8567 22.9992 30.0796 23.3527C29.9786 23.8324 29.9786 24.3878 30.0796 24.7665H40.38C41.2889 24.7665 41.5413 24.1858 41.2889 23.1507H38.2089C36.2397 23.1507 36.2396 22.6205 37.0475 20.4999L38.5118 16.5867H47.8024L50.0745 22.0146C50.4785 22.9487 50.0745 23.2769 46.1614 23.3779C46.0604 23.8576 46.0604 24.4383 46.1614 24.7917H57.8251C58.7592 24.7917 58.9864 24.2111 58.7592 23.176H57.9261C56.0831 23.176 55.7044 22.8478 55.3005 21.9137L46.9945 2.9538C46.4139 1.69149 46.1614 1.08558 46.0604 0.302954L44.6214 0.252461ZM43.0309 5.22595L46.944 14.5923H39.2692L43.0309 5.22595ZM62.6471 0.732138C61.1324 0.732138 60.9304 1.41378 61.1324 2.34789H62.8491C64.5153 2.34789 64.8183 2.57511 64.8183 3.86266V21.0553C64.8183 22.5196 64.1366 22.8983 61.2586 23.3527C61.1071 23.8324 61.1071 24.3878 61.2586 24.7665H72.1902C73.2757 24.7665 73.3767 24.1858 73.1243 23.1507H71.2056C69.6908 23.1507 69.3374 22.8983 69.3374 21.6359V4.54431C69.3374 3.02954 69.7918 2.34789 72.9223 2.12068C73.0233 1.76723 73.0233 1.03509 72.9223 0.706892L62.6471 0.732138ZM105.843 0.732138L97.5373 18.051L88.4992 0.732138H81.2283C79.7388 0.732138 79.5115 1.51477 79.7388 2.34789C83.2985 2.44888 83.5257 2.85281 83.3995 4.01414L81.9352 20.9291C81.8342 22.4438 81.506 23.1507 77.5423 23.3779C77.4414 23.8324 77.4414 24.312 77.5423 24.7665H89.3323C90.3421 24.7665 90.4936 24.1858 90.2412 23.1507H88.2972C84.485 23.1507 84.485 22.7973 84.586 21.3835L85.7473 5.22595L95.6943 24.8422C96.5275 24.8422 96.8052 24.615 97.4616 23.3274L106.096 5.17546L107.711 20.8533C107.888 22.6205 107.383 22.9992 104.379 23.176L102.435 23.2769C102.284 23.7314 102.284 24.2111 102.435 24.6655H115.134C116.144 24.6655 116.245 24.0848 116.144 23.0497C113.367 22.6963 112.786 22.5953 112.685 21.434L110.943 3.86266C110.842 2.82757 111.044 2.24691 114.402 2.01969C114.553 1.56526 114.553 1.08558 114.402 0.631154L105.843 0.732138ZM123.061 0.732138C121.546 0.732138 121.344 1.41378 121.546 2.34789H123.263C124.778 2.34789 125.232 2.57511 125.232 3.86266V20.3484C125.232 22.6963 124.45 23.1507 120.94 23.3779C120.814 23.8576 120.865 24.312 120.94 24.7917H138.487C138.941 22.5701 139.597 20.4746 140.355 18.3035C140.733 17.2431 140.254 16.7887 139.269 16.7887H139.143L138.133 19.0104C136.618 22.2419 136.265 22.4186 133.589 22.4186H131.291C130.282 22.4186 129.65 22.0904 129.65 20.9038V4.99874C129.65 2.65085 130.357 2.34789 134.144 2.12068C134.245 1.76723 134.245 1.03509 134.144 0.706892L123.061 0.732138ZM146.363 0.732138C144.773 0.732138 144.647 1.41378 144.773 2.34789H146.49C148.105 2.34789 148.434 2.57511 148.434 3.86266V20.4999C148.434 22.8983 147.752 23.1507 143.94 23.3779C143.788 23.8576 143.788 24.312 143.94 24.7917H163.808C164.263 22.5701 164.97 20.3736 165.677 18.3035C166.03 17.2684 165.55 16.7887 164.591 16.7887H164.465L163.455 19.0104C161.94 22.2419 161.587 22.4186 158.911 22.4186H155.831C153.382 22.4186 153.054 21.8884 153.054 20.5756V14.2388H156.841C157.775 14.2388 158.254 14.567 158.709 17.3694C158.885 17.4451 159.113 17.4956 159.34 17.4956C159.567 17.4956 159.82 17.4451 159.971 17.3694C159.87 15.0215 159.87 12.6483 159.971 10.3004C160.047 9.1896 159.643 8.93714 158.936 8.93714H158.507L158.254 10.7801C158.153 11.7142 157.926 12.0677 156.841 12.0677H153.054V2.82757H158.81C160.779 2.82757 161.536 3.40823 162.142 5.60465L162.622 7.2204C162.723 7.2204 162.799 7.2204 162.874 7.2204C163.834 7.2204 164.187 6.61449 164.036 5.5794C163.783 4.03938 163.581 2.34789 163.455 0.732138H146.363ZM172.14 0.605908C170.675 0.706892 170.423 1.38854 170.675 2.32265H172.392C173.856 2.32265 174.387 2.54986 174.387 3.96365V20.6009C174.387 22.7973 173.654 23.1507 170.524 23.3779C170.423 23.8576 170.448 24.3878 170.524 24.7917H181.859C182.895 24.7917 183.021 24.2111 182.895 23.176H181.052C179.183 23.176 178.855 22.8225 178.855 21.7874V16.4857H181.279C183.475 16.4857 183.551 16.612 184.435 18.2277C185.369 19.894 186.656 21.333 187.868 22.3681C190.519 24.6655 192.715 25.3976 196.073 25.3976C199.885 25.3976 200.794 24.4635 200.466 23.2012C197.335 23.2012 195.77 22.873 191.024 19.0608C189.66 17.95 186.959 15.4759 186.959 15.4759C189.938 14.2136 191.832 11.7647 191.832 8.76041C191.832 3.83741 188.019 0.555415 181.102 0.555415C176.078 0.555415 173.907 0.555415 172.19 0.706892L172.14 0.605908ZM178.906 2.6256H180.143C184.207 2.6256 187.085 4.14037 187.085 8.98763C187.085 13.8349 184.207 14.4156 180.648 14.4156H178.931L178.906 2.6256Z", "fill", "white"], ["width", "201", "height", "20", "viewBox", "0 0 201 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "clients-section__logo"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.499756 19.83H22.1314L33.4534 0.481779H11.9073L0.499756 19.83ZM44.0153 0.481779H35.228L23.8205 19.83H32.6933L44.0153 0.481779ZM34.8057 19.83H40.7206L52.0426 0.481779H46.1277L34.8057 19.83ZM43.5931 19.83H47.9023L59.3932 0.481779H54.915L43.5931 19.83ZM66.3226 0.481779H62.6889L51.367 19.83H54.9995L66.3226 0.481779ZM200.5 5.04477V0.397705H162.984V19.7467H200.5V7.74828H178.11V12.3953H194.332V14.9299H169.236V5.04477H200.5ZM149.887 5.29781V19.7467H156.141V0.397705H146.931L134.257 9.10003L121.159 0.397705H112.288V19.7467H118.541V5.29781L130.791 14.2557H137.13L149.887 5.29781ZM107.809 19.7467L97.4159 0.397705H72.3208L60.9144 19.7467H68.0116L70.4618 15.6066H98.7676L100.964 19.7467H107.809ZM93.6977 5.04477L96.318 10.6208H72.9975L76.0389 5.04477H93.6977Z", "fill", "white"], ["width", "201", "height", "11", "viewBox", "0 0 201 11", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "clients-section__logo"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M50.3935 8.0694H32.534C32.2608 8.0694 31.99 7.88866 31.7169 7.52541V3.97976C31.7169 3.43576 31.9865 3.16288 32.534 3.16288H50.3935C50.4823 3.25589 50.6154 3.30064 50.7997 3.30064C51.0729 3.4849 51.2095 3.7104 51.2095 3.98064V7.52715L50.3935 8.0694ZM22.4468 4.52815H3.4993V3.16376H22.4468L23.2685 3.71127L22.4468 4.52815ZM79.5599 4.25439C79.4704 4.43953 79.3335 4.52815 79.1527 4.52815H60.3441V3.16376H79.1519C79.3326 3.16376 79.559 3.34889 79.8319 3.71127C79.7397 3.89202 79.6476 4.07277 79.5599 4.25439ZM25.9917 2.89089C25.9917 1.53001 25.3077 0.845632 23.9478 0.845632H0.500732V10.5262H3.4993V6.70941H23.9478C25.3089 6.70941 25.9917 5.98378 25.9917 4.52815V2.89089ZM53.7984 2.89089C53.7984 1.53001 53.1145 0.845632 51.7546 0.845632H30.8986C29.5342 0.845632 28.8537 1.53001 28.8537 2.89089V8.20715C28.8537 9.75228 29.5342 10.5262 30.8986 10.5262H51.7546C53.1145 10.5262 53.7984 9.75228 53.7984 8.20715V2.89089ZM82.8318 7.66316C82.8318 7.1174 82.558 6.5734 82.0149 6.02589C82.558 5.75565 82.8318 5.2564 82.8318 4.52815V2.89089C82.8318 1.53001 82.1026 0.845632 80.6505 0.845632H57.4786V10.5262H60.3452V6.70941H78.8799C78.9685 6.79715 79.1492 6.95683 79.4239 7.18672C79.6967 7.41572 79.8345 7.61929 79.8345 7.79653V10.5253H82.8326V7.66316H82.8318ZM111.459 6.70941C111.459 5.2564 110.73 4.52815 109.279 4.52815H89.6458C89.465 4.52815 89.1913 4.25878 88.8289 3.71127L89.1684 3.37083C89.2922 3.23922 89.465 3.16464 89.6458 3.16376H111.458V0.845632H88.1489C86.7836 0.845632 86.1036 1.53001 86.1036 2.89089V4.52815C86.1036 5.98466 86.7836 6.70941 88.1489 6.70941H107.776C108.321 6.70941 108.594 6.98315 108.594 7.52715C108.505 7.61928 108.389 7.73422 108.253 7.86671C108.129 7.99745 107.956 8.07204 107.776 8.07116H86.1045V10.5262H109.279C110.73 10.5262 111.459 9.75228 111.459 8.20715V6.70941ZM140.081 8.0694H118.411L118 7.52541V3.97976C118 3.7104 118.135 3.43576 118.411 3.16288H140.081V0.844754H117.184C115.727 0.844754 115.001 1.52826 115.001 2.88913V8.20627C115.001 9.7514 115.727 10.5253 117.184 10.5253H140.081V8.0694ZM168.163 0.844754H165.437V4.52727H145.805V0.844754H142.944V10.5253H145.805V6.70853H165.437V10.5253H168.163V0.844754ZM197.06 8.0694H174.571V6.70941H197.06V4.52815H174.571V3.16376H197.06V0.845632H171.574V10.5262H197.06V8.0694ZM199.15 0.829834C198.39 0.829834 197.8 1.42034 197.8 2.17842C197.8 2.93651 198.39 3.52789 199.15 3.52789C199.912 3.52789 200.499 2.93651 200.499 2.17842C200.499 1.42034 199.912 0.829834 199.15 0.829834ZM199.15 1.02198C199.804 1.02198 200.291 1.5344 200.291 2.1793C200.291 2.82596 199.804 3.33574 199.15 3.33574C198.497 3.33574 198.012 2.82596 198.012 2.1793C198.012 1.53265 198.497 1.02198 199.15 1.02198ZM198.855 2.26617H199.177L199.616 2.95669H199.84L199.375 2.26617C199.587 2.22844 199.769 2.1056 199.769 1.83009C199.769 1.5502 199.611 1.3984 199.26 1.3984H198.663V2.95669H198.857V2.26617H198.855ZM198.855 2.10209V1.56247H199.207C199.396 1.56247 199.575 1.61337 199.575 1.83097C199.575 2.09595 199.345 2.10209 199.11 2.10209H198.855Z", "fill", "white"]], template: function ClientsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".clients-section[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #5452e0, #cd52e0);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 3rem;\n  gap: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMERDRXFCO0VERHJCLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFERiIsImZpbGUiOiJjbGllbnRzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuXG4uY2xpZW50cy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogJHByaW1hcnktYWNjZW50LWNvbG9yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNyZW07XG59XG4iLCIvLyBDb2xvcnNcbiRwcmltYXJ5LWZvbnQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XG4kcHJpbWFyeS1mb250LWNvbG9yLWRhcms6ICMzMDMwMzA7XG4kc2Vjb25kYXJ5LWZvbnQtY29sb3ItbGlnaHQ6ICNlMmUyZTI7XG4kc2Vjb25kYXJ5LWZvbnQtY29sb3ItZGFyazogIzVjNWM1YztcbiRwcmltYXJ5LWFjY2VudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KFxuICA5MGRlZyxcbiAgaHNsKDI0MSwgNzAsIDYwKSxcbiAgaHNsKDI5MiwgNzAsIDYwKVxuKTtcbiRwcmltYXJ5LWFjY2VudC1jb2xvci1ob3ZlcjogaHNsKDM0OCwgNzglLCA0MSUpO1xuJHByaW1hcnktYWNjZW50LWNvbG9yLWRpc2FibGVkLWZpbHRlcjogc2F0dXJhdGUoMzAlKSBicmlnaHRuZXNzKDEuNSk7XG4kc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogIzk5OTdmZjtcbiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3ItbGlnaHQ6ICNmNmY2ZjY7XG4kcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICMyYTJhMmE7XG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3ItZGFyazogIzNhM2EzYTtcbiRvdmVybGF5LWNvbG9yOiBoc2xhKDAsIDAsIDAsIDAuNyk7XG4kbXV0ZWQtY29sb3I6ICNjNGM0YzQ7XG4kZXJyb3ItY29sb3I6IGhzbCgwLCA3NyUsIDU4JSk7XG5cbi8vIEJvb3RzdHJhcCBicmVha3BvaW50c1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4LFxuKTtcblxuJGNvbnRhaW5lci13aWR0aHM6IChcbiAgXCJ4c1wiOiAxMDAlLFxuICBcInNtXCI6IDU0MHB4LFxuICBcIm1kXCI6IDcyMHB4LFxuICBcImxnXCI6IDk2MHB4LFxuICBcInhsXCI6IDExNDBweCxcbiAgXCJ4eGxcIjogMTMyMHB4LFxuKTtcblxuLy8gQm9vdHN0cmFwIGdyaWRcbiRjb250YWluZXItaG9yaXpvbnRhbC1wYWRkaW5nLXhzOiAwLjc1cmVtO1xuXG4vLyBGb250LWZhbWlsaWVzXG4kcHJpbWFyeS1mb250LWxpZ2h0OiBcIlBvcHBpbnMtTGlnaHRcIjtcbiRwcmltYXJ5LWZvbnQtcmVndWxhcjogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiRwcmltYXJ5LWZvbnQtYm9sZDogXCJQb3BwaW5zLUJvbGRcIjtcblxuJHNlY29uZGFyeS1mb250LWxpZ2h0OiBcIlJhaWx3YXktTGlnaHRcIjtcbiRzZWNvbmRhcnktZm9udC1yZWd1bGFyOiBcIlJhaWx3YXktUmVndWxhclwiO1xuJHNlY29uZGFyeS1mb250LWJvbGQ6IFwiUmFpbHdheS1Cb2xkXCI7XG5cbi8vIE1pc2NcbiRkZWZhdWx0LWJvcmRlci1yYWRpdXM6IDEycHg7XG4kZGVmYXVsdC1idXR0b24taGl0Ym94OiAwLjVyZW07XG4kZGVmYXVsdC1ib3gtc2hhZG93OiAwIDRweCA0cHggMCBoc2xhKDAsIDAsIDAsIDAuMjUpO1xuXG4vLyBUcmFuc2l0aW9uc1xuJGRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG4kZGVmYXVsdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4iXX0= */"] });


/***/ }),

/***/ 1286:
/*!********************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/contact-section/contact-section.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactSectionComponent": () => (/* binding */ ContactSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../section-header/section-header.component */ 3930);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function ContactSectionComponent_div_9_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Du musst deinen Namen angeben ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactSectionComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactSectionComponent_div_9_p_1_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors ? _r1.errors["required"] : undefined);
} }
function ContactSectionComponent_div_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Du musst deine E-Mail-Adresse angeben ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactSectionComponent_div_13_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ung\u00FCltige E-Mail-Adresse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactSectionComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactSectionComponent_div_13_p_1_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContactSectionComponent_div_13_p_2_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors ? _r3.errors["required"] : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors ? _r3.errors["email"] : undefined);
} }
function ContactSectionComponent_div_17_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Du musst eine Nachricht eingeben ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactSectionComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactSectionComponent_div_17_p_1_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.errors ? _r5.errors["required"] : undefined);
} }
class ContactSectionComponent {
    constructor() { }
    ngOnInit() { }
    onSubmit(contactForm) {
        console.log(contactForm);
    }
}
ContactSectionComponent.ɵfac = function ContactSectionComponent_Factory(t) { return new (t || ContactSectionComponent)(); };
ContactSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactSectionComponent, selectors: [["portfolio-contact-section"]], decls: 27, vars: 4, consts: [[1, "section", "contact-section"], [1, "container"], ["title", "Schreibe mir direkt eine Nachricht", "subtitle", "Kontakt"], ["ngForm", "", 3, "ngSubmit"], ["contactForm", "ngForm"], [1, "contact-section__form-fields-container"], [1, "contact-section__form-field-container"], ["type", "text", "placeholder", "Name", "ngModel", "", "name", "name", "required", "", 1, "contact-section__form-field"], ["name", "ngModel"], ["class", "contact-section__alerts-container", 4, "ngIf"], ["type", "email", "placeholder", "Email", "name", "email", "ngModel", "", "required", "", "email", "", 1, "contact-section__form-field"], ["email", "ngModel"], ["cols", "30", "rows", "10", "placeholder", "Nachricht", "name", "message", "ngModel", "", "required", "", 1, "contact-section__form-field"], ["message", "ngModel"], ["type", "submit", 1, "button", 3, "disabled"], ["width", "25", "height", "25", "viewBox", "0 0 25 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "button__icon"], ["clip-path", "url(#clip0_211_277)"], ["d", "M24.5 0.526367L18.5 22.5264L10.371 15.2874L18.173 7.05337L7.715 14.2804L0.5 12.5264L24.5 0.526367ZM9.5 17.1944V24.5264L12.758 20.0954L9.5 17.1944Z", "fill", "white"], ["id", "clip0_211_277"], ["width", "24", "height", "24", "fill", "white", "transform", "translate(0.5 0.526367)"], [1, "button__label"], [1, "contact-section__alerts-container"], ["class", "contact-section__alert", 4, "ngIf"], [1, "contact-section__alert"]], template: function ContactSectionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "portfolio-section-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactSectionComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ContactSectionComponent_div_9_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ContactSectionComponent_div_13_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "textarea", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ContactSectionComponent_div_17_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "clipPath", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "rect", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Senden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_0__.SectionHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.EmailValidator], styles: [".contact-section[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n}\n.contact-section__form-fields-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 1rem;\n  gap: 1rem;\n  margin-bottom: 2.5rem;\n}\n.contact-section__form-field-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 0.75rem;\n  gap: 0.75rem;\n}\n.contact-section__alerts-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n}\n.contact-section__alert[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #e64141;\n}\n.contact-section__form-field[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: none;\n  background-color: #ffffff;\n  border-radius: 12px;\n  font-size: 1rem;\n  line-height: 1.175;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3Qtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJDV2lDO0FEWm5DO0FBR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLHFCQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQUEsWUFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7QUFISjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxjQ1BVO0FER2Q7QUFPRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJDbkI2QjtFRG9CN0IsbUJDb0JvQjtFRG5CcEIsZUFBQTtFQUNBLGtCQUFBO0FBTEoiLCJmaWxlIjoiY29udGFjdC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuLmNvbnRhY3Qtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1saWdodDtcblxuICAmX19mb3JtLWZpZWxkcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB9XG5cbiAgJl9fZm9ybS1maWVsZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cblxuICAmX19hbGVydHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cblxuICAmX19hbGVydCB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGNvbG9yOiAkZXJyb3ItY29sb3I7XG4gIH1cblxuICAmX19mb3JtLWZpZWxkIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6ICRkZWZhdWx0LWJvcmRlci1yYWRpdXM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE3NTtcbiAgfVxufVxuIiwiLy8gQ29sb3JzXG4kcHJpbWFyeS1mb250LWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xuJHByaW1hcnktZm9udC1jb2xvci1kYXJrOiAjMzAzMDMwO1xuJHNlY29uZGFyeS1mb250LWNvbG9yLWxpZ2h0OiAjZTJlMmUyO1xuJHNlY29uZGFyeS1mb250LWNvbG9yLWRhcms6ICM1YzVjNWM7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIGhzbCgyNDEsIDcwLCA2MCksXG4gIGhzbCgyOTIsIDcwLCA2MClcbik7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3ItaG92ZXI6IGhzbCgzNDgsIDc4JSwgNDElKTtcbiRwcmltYXJ5LWFjY2VudC1jb2xvci1kaXNhYmxlZC1maWx0ZXI6IHNhdHVyYXRlKDMwJSkgYnJpZ2h0bmVzcygxLjUpO1xuJHNlY29uZGFyeS1hY2NlbnQtY29sb3I6ICM5OTk3ZmY7XG4kcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0OiAjZjZmNmY2O1xuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjMmEyYTJhO1xuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICMzYTNhM2E7XG4kb3ZlcmxheS1jb2xvcjogaHNsYSgwLCAwLCAwLCAwLjcpO1xuJG11dGVkLWNvbG9yOiAjYzRjNGM0O1xuJGVycm9yLWNvbG9yOiBoc2woMCwgNzclLCA1OCUpO1xuXG4vLyBCb290c3RyYXAgYnJlYWtwb2ludHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweCxcbik7XG5cbiRjb250YWluZXItd2lkdGhzOiAoXG4gIFwieHNcIjogMTAwJSxcbiAgXCJzbVwiOiA1NDBweCxcbiAgXCJtZFwiOiA3MjBweCxcbiAgXCJsZ1wiOiA5NjBweCxcbiAgXCJ4bFwiOiAxMTQwcHgsXG4gIFwieHhsXCI6IDEzMjBweCxcbik7XG5cbi8vIEJvb3RzdHJhcCBncmlkXG4kY29udGFpbmVyLWhvcml6b250YWwtcGFkZGluZy14czogMC43NXJlbTtcblxuLy8gRm9udC1mYW1pbGllc1xuJHByaW1hcnktZm9udC1saWdodDogXCJQb3BwaW5zLUxpZ2h0XCI7XG4kcHJpbWFyeS1mb250LXJlZ3VsYXI6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4kcHJpbWFyeS1mb250LWJvbGQ6IFwiUG9wcGlucy1Cb2xkXCI7XG5cbiRzZWNvbmRhcnktZm9udC1saWdodDogXCJSYWlsd2F5LUxpZ2h0XCI7XG4kc2Vjb25kYXJ5LWZvbnQtcmVndWxhcjogXCJSYWlsd2F5LVJlZ3VsYXJcIjtcbiRzZWNvbmRhcnktZm9udC1ib2xkOiBcIlJhaWx3YXktQm9sZFwiO1xuXG4vLyBNaXNjXG4kZGVmYXVsdC1ib3JkZXItcmFkaXVzOiAxMnB4O1xuJGRlZmF1bHQtYnV0dG9uLWhpdGJveDogMC41cmVtO1xuJGRlZmF1bHQtYm94LXNoYWRvdzogMCA0cHggNHB4IDAgaHNsYSgwLCAwLCAwLCAwLjI1KTtcblxuLy8gVHJhbnNpdGlvbnNcbiRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuJGRlZmF1bHQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuIl19 */"] });


/***/ }),

/***/ 2006:
/*!**************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/hero-section/hero-section.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroSectionComponent": () => (/* binding */ HeroSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_social_media_channels_social_media_channels_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/social-media-channels/social-media-channels.component */ 4267);



class HeroSectionComponent {
    constructor() {
        this.changeHeroTitleIntersection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.initialiseIntersectionObserver();
    }
    initialiseIntersectionObserver() {
        const intersectionObserver = this.createIntersectionObserver();
        const heroTitle = document.querySelector('.hero__title');
        if (heroTitle)
            intersectionObserver.observe(heroTitle);
    }
    createIntersectionObserver() {
        const intersectionObserverOptions = {
            rootMargin: '-64px 0px 0px 0px',
            threshold: 1,
        };
        const intersectionObserver = new IntersectionObserver(this.intersectionObserverCallback.bind(this), intersectionObserverOptions);
        return intersectionObserver;
    }
    intersectionObserverCallback(entries) {
        entries.forEach((entry) => this.changeHeroTitleIntersection.emit(entry.isIntersecting));
    }
}
HeroSectionComponent.ɵfac = function HeroSectionComponent_Factory(t) { return new (t || HeroSectionComponent)(); };
HeroSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeroSectionComponent, selectors: [["portfolio-hero-section"]], outputs: { changeHeroTitleIntersection: "changeHeroTitleIntersection" }, decls: 20, vars: 0, consts: [[1, "hero"], [1, "hero__overlay"], [1, "container"], [1, "hero__inner-container"], [1, "hero__content-container"], [1, "hero__title"], [1, "hero__name"], [1, "hero__mission-statement"], [1, "hero__social-media-channels-container"], ["instagramUrl", "/", "linkedInUrl", "/", "tikTokUrl", "/"], [1, "button"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "button__icon"], ["d", "M12 12.713L0.015 3H23.985L12 12.713ZM12 15.287L0 5.562V21H24V5.562L12 15.287Z", "fill", "white"], [1, "button__label"]], template: function HeroSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Hi, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " ich bin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Tomke");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Lorem cillum aliqua eu aliquip pariatur do sunt. Aute quis Lorem tempor non ad. Eiusmod Lorem sint ipsum do cillum incididunt tempor cillum aliqua tempor et culpa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "shared-social-media-channels", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_social_media_channels_social_media_channels_component__WEBPACK_IMPORTED_MODULE_0__.SocialMediaChannelsComponent], styles: [".hero[_ngcontent-%COMP%] {\n  height: 90vh;\n  min-height: 500px;\n  background-image: url(\"/assets/images/hero-background-image-mobile.jpeg\");\n  background-position-x: 40%;\n  background-size: cover;\n}\n.hero__overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(128, 128, 128, 0.7));\n}\n.hero__inner-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.hero__content-container[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: 55%;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transform: translate(0, -50%);\n}\n.hero__title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: \"Poppins-Regular\";\n  line-height: 1;\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.hero__name[_ngcontent-%COMP%] {\n  font-family: \"Poppins-Bold\";\n  color: inherit;\n  line-height: inherit;\n}\n.hero__mission-statement[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #e2e2e2;\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.hero__social-media-channels-container[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n@media only screen and (min-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/hero-background-image-tablet.jpeg\");\n    background-position-y: 65%;\n  }\n  .hero__content-container[_ngcontent-%COMP%] {\n    width: 50%;\n    align-items: flex-start;\n  }\n  .hero__title[_ngcontent-%COMP%], .hero__mission-statement[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5RUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUFGRjtBQUlFO0VBQ0UsWUFBQTtFQUNBLHNGQUFBO0FBRko7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQVBKO0FBVUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFSSjtBQVdFO0VBQ0UsY0NuQ3VCO0VEb0N2Qiw4QkNRbUI7RURQbkIsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFUSjtBQVlFO0VBQ0UsMkJDRWdCO0VERGhCLGNBQUE7RUFDQSxvQkFBQTtBQVZKO0FBYUU7RUFDRSxrQkFBQTtFQUNBLGNDaER5QjtFRGlEekIscUJBQUE7RUFDQSxrQkFBQTtBQVhKO0FBY0U7RUFDRSxtQkFBQTtBQVpKO0FFekNFO0VGREY7SUEwREkseUVBQUE7SUFDQSwwQkFBQTtFQVpGO0VBY0U7SUFDRSxVQUFBO0lBQ0EsdUJBQUE7RUFaSjtFQWVFO0lBRUUsZ0JBQUE7RUFkSjtBQUNGO0FBa0JBO0VBQ0UsWUFBQTtBQWZGIiwiZmlsZSI6Imhlcm8tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJhYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiYWJzdHJhY3RzL21peGluc1wiO1xuXG4uaGVybyB7XG4gIGhlaWdodDogOTB2aDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2hlcm8tYmFja2dyb3VuZC1pbWFnZS1tb2JpbGUuanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA0MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgJl9fb3ZlcmxheSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDkwZGVnLFxuICAgICAgaHNsYSgwLCAwLCAwLCAwLjcpLFxuICAgICAgaHNsYSgwLCAwLCA1MCwgMC43KVxuICAgICk7XG4gIH1cblxuICAmX19pbm5lci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmX19jb250ZW50LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTUlO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWZvbnQtY29sb3ItbGlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQtcmVndWxhcjtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJl9fbmFtZSB7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQtYm9sZDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgfVxuXG4gICZfX21pc3Npb24tc3RhdGVtZW50IHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgY29sb3I6ICRzZWNvbmRhcnktZm9udC1jb2xvci1saWdodDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJl9fc29jaWFsLW1lZGlhLWNoYW5uZWxzLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoXCJtZFwiKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvaGVyby1iYWNrZ3JvdW5kLWltYWdlLXRhYmxldC5qcGVnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNjUlO1xuXG4gICAgJl9fY29udGVudC1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgICZfX3RpdGxlLFxuICAgICZfX21pc3Npb24tc3RhdGVtZW50IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCIvLyBDb2xvcnNcbiRwcmltYXJ5LWZvbnQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XG4kcHJpbWFyeS1mb250LWNvbG9yLWRhcms6ICMzMDMwMzA7XG4kc2Vjb25kYXJ5LWZvbnQtY29sb3ItbGlnaHQ6ICNlMmUyZTI7XG4kc2Vjb25kYXJ5LWZvbnQtY29sb3ItZGFyazogIzVjNWM1YztcbiRwcmltYXJ5LWFjY2VudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KFxuICA5MGRlZyxcbiAgaHNsKDI0MSwgNzAsIDYwKSxcbiAgaHNsKDI5MiwgNzAsIDYwKVxuKTtcbiRwcmltYXJ5LWFjY2VudC1jb2xvci1ob3ZlcjogaHNsKDM0OCwgNzglLCA0MSUpO1xuJHByaW1hcnktYWNjZW50LWNvbG9yLWRpc2FibGVkLWZpbHRlcjogc2F0dXJhdGUoMzAlKSBicmlnaHRuZXNzKDEuNSk7XG4kc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogIzk5OTdmZjtcbiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3ItbGlnaHQ6ICNmNmY2ZjY7XG4kcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICMyYTJhMmE7XG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3ItZGFyazogIzNhM2EzYTtcbiRvdmVybGF5LWNvbG9yOiBoc2xhKDAsIDAsIDAsIDAuNyk7XG4kbXV0ZWQtY29sb3I6ICNjNGM0YzQ7XG4kZXJyb3ItY29sb3I6IGhzbCgwLCA3NyUsIDU4JSk7XG5cbi8vIEJvb3RzdHJhcCBicmVha3BvaW50c1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4LFxuKTtcblxuJGNvbnRhaW5lci13aWR0aHM6IChcbiAgXCJ4c1wiOiAxMDAlLFxuICBcInNtXCI6IDU0MHB4LFxuICBcIm1kXCI6IDcyMHB4LFxuICBcImxnXCI6IDk2MHB4LFxuICBcInhsXCI6IDExNDBweCxcbiAgXCJ4eGxcIjogMTMyMHB4LFxuKTtcblxuLy8gQm9vdHN0cmFwIGdyaWRcbiRjb250YWluZXItaG9yaXpvbnRhbC1wYWRkaW5nLXhzOiAwLjc1cmVtO1xuXG4vLyBGb250LWZhbWlsaWVzXG4kcHJpbWFyeS1mb250LWxpZ2h0OiBcIlBvcHBpbnMtTGlnaHRcIjtcbiRwcmltYXJ5LWZvbnQtcmVndWxhcjogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiRwcmltYXJ5LWZvbnQtYm9sZDogXCJQb3BwaW5zLUJvbGRcIjtcblxuJHNlY29uZGFyeS1mb250LWxpZ2h0OiBcIlJhaWx3YXktTGlnaHRcIjtcbiRzZWNvbmRhcnktZm9udC1yZWd1bGFyOiBcIlJhaWx3YXktUmVndWxhclwiO1xuJHNlY29uZGFyeS1mb250LWJvbGQ6IFwiUmFpbHdheS1Cb2xkXCI7XG5cbi8vIE1pc2NcbiRkZWZhdWx0LWJvcmRlci1yYWRpdXM6IDEycHg7XG4kZGVmYXVsdC1idXR0b24taGl0Ym94OiAwLjVyZW07XG4kZGVmYXVsdC1ib3gtc2hhZG93OiAwIDRweCA0cHggMCBoc2xhKDAsIDAsIDAsIDAuMjUpO1xuXG4vLyBUcmFuc2l0aW9uc1xuJGRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG4kZGVmYXVsdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4iLCJAdXNlIFwic2FzczptYXBcIjtcbkBpbXBvcnQgXCJhYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRncmlkLWJyZWFrcG9pbnQpIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAkZ3JpZC1icmVha3BvaW50KSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJGdyaWQtYnJlYWtwb2ludCkge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGNhbGMobWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJGdyaWQtYnJlYWtwb2ludCkgLSAxcHgpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHdpdGgtdHJhbnNpdGlvbihcbiAgJHRyYW5zaXRpb24tcHJvcGVydHksXG4gICR0cmFuc2l0aW9uLWR1cmF0aW9uOiAkZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRkZWZhdWx0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXG4pIHtcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tcHJvcGVydHkgJHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb247XG59XG4iXX0= */"] });


/***/ }),

/***/ 4534:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/project-detail-slideshow/project-detail-slideshow.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailSlideshowComponent": () => (/* binding */ ProjectDetailSlideshowComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



const _c0 = ["slideshowContainer"];
function ProjectDetailSlideshowComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imageUrl_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imageUrl_r5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailSlideshowComponent_button_31_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectDetailSlideshowComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailSlideshowComponent_button_31_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const i_r7 = restoredCtx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onClickPreviewImageButton(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProjectDetailSlideshowComponent_button_31_div_3_Template, 3, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imageUrl_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.activeSlideIndex === i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imageUrl_r6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class ProjectDetailSlideshowComponent {
    constructor() {
        this.imageUrls = [];
        this.activeSlideIndex = 0;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.initialiseSwiper();
    }
    initialiseSwiper() {
        if (this.slideshowContainer) {
            swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper.use([swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay]);
            this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper(this.slideshowContainer.nativeElement, {
                autoplay: true,
            });
            this.swiper.on('activeIndexChange', this.onActiveIndexChange.bind(this));
        }
    }
    onActiveIndexChange(swiper) {
        this.activeSlideIndex = swiper.activeIndex;
    }
    slideToPreviousSlide() {
        var _a;
        (_a = this.swiper) === null || _a === void 0 ? void 0 : _a.slidePrev();
    }
    slideToNextSlide() {
        var _a;
        (_a = this.swiper) === null || _a === void 0 ? void 0 : _a.slideNext();
    }
    onClickPreviewImageButton(slideIndex) {
        this.slideToSlide(slideIndex);
    }
    slideToSlide(slideIndex) {
        var _a;
        (_a = this.swiper) === null || _a === void 0 ? void 0 : _a.slideTo(slideIndex);
    }
}
ProjectDetailSlideshowComponent.ɵfac = function ProjectDetailSlideshowComponent_Factory(t) { return new (t || ProjectDetailSlideshowComponent)(); };
ProjectDetailSlideshowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectDetailSlideshowComponent, selectors: [["portfolio-project-detail-slideshow"]], viewQuery: function ProjectDetailSlideshowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slideshowContainer = _t.first);
    } }, inputs: { imageUrls: "imageUrls" }, decls: 32, vars: 4, consts: [[1, "project-detail-slideshow"], [1, "project-detail-slideshow__cinema-image-container"], [1, "padding-top-hack-outer-container"], [1, "padding-top-hack-inner-container"], [1, "swiper"], ["slideshowContainer", ""], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "project-detail-slideshow__navigation-button", "project-detail-slideshow__navigation-button--left", 3, "disabled", "click"], ["arrowLeftButton", ""], ["width", "24", "height", "25", "viewBox", "0 0 24 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "project-detail-slideshow__arrow-icon"], ["clip-path", "url(#clip0_113_469)"], ["d", "M16.67 0.0263672L19.5 2.85537L10.161 12.0304L19.5 21.1974L16.67 24.0264L4.5 12.0304L16.67 0.0263672Z", "fill", "url(#paint0_linear_113_469)"], ["id", "paint0_linear_113_469", "x1", "4.5", "y1", "12.0264", "x2", "19.5", "y2", "12.0264", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#5653E1"], ["offset", "1", "stop-color", "#CD52E0"], ["id", "clip0_113_469"], ["width", "24", "height", "24", "fill", "white", "transform", "translate(0 0.0263672)"], [1, "project-detail-slideshow__navigation-button", "project-detail-slideshow__navigation-button--right", 3, "disabled", "click"], ["arrowRightButton", ""], ["clip-path", "url(#clip0_113_480)"], ["d", "M5 3.02637L8.057 0.0263672L20 12.0264L8.057 24.0264L5 21.0264L14 12.0264L5 3.02637Z", "fill", "url(#paint0_linear_113_480)"], ["id", "paint0_linear_113_480", "x1", "5", "y1", "12.0264", "x2", "20", "y2", "12.0264", "gradientUnits", "userSpaceOnUse"], ["id", "clip0_113_480"], [1, "project-detail-slideshow__preview-image-buttons-container"], ["class", "project-detail-slideshow__preview-image-button", 3, "click", 4, "ngFor", "ngForOf"], [1, "swiper-slide"], ["alt", "", 1, "project-detail-slideshow__cinema-image", 3, "src"], [1, "project-detail-slideshow__preview-image-button", 3, "click"], ["class", "project-detail-slideshow__preview-image-overlay", 4, "ngIf"], ["alt", "", 1, "project-detail-slideshow__preview-image", 3, "src"], [1, "project-detail-slideshow__preview-image-overlay"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M28.0001 8.37999L13.1201 25.3573L4.00012 17.3333L5.75879 15.3467L12.8801 21.5947L26.0335 6.66666L28.0001 8.37999Z", "fill", "white"]], template: function ProjectDetailSlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectDetailSlideshowComponent_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailSlideshowComponent_Template_button_click_8_listener() { return ctx.slideToPreviousSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "linearGradient", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "stop", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "stop", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "clipPath", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailSlideshowComponent_Template_button_click_19_listener() { return ctx.slideToNextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "linearGradient", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "stop", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "stop", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "clipPath", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ProjectDetailSlideshowComponent_button_31_Template, 5, 2, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imageUrls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.activeSlideIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.activeSlideIndex === ctx.imageUrls.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imageUrls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".project-detail-slideshow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n.project-detail-slideshow__cinema-image-container[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.project-detail-slideshow__cinema-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.project-detail-slideshow__navigation-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  padding: 0.5rem;\n  z-index: 1;\n}\n.project-detail-slideshow__navigation-button[_ngcontent-%COMP%]:disabled {\n  filter: saturate(30%) brightness(1.5);\n}\n.project-detail-slideshow__navigation-button--left[_ngcontent-%COMP%] {\n  left: 0;\n  margin-left: -0.5rem;\n}\n.project-detail-slideshow__navigation-button--right[_ngcontent-%COMP%] {\n  right: 0;\n  margin-right: -0.5rem;\n}\n.project-detail-slideshow__arrow-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.project-detail-slideshow__preview-image-buttons-container[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n  overflow: auto;\n}\n.project-detail-slideshow__preview-image-button[_ngcontent-%COMP%] {\n  display: block;\n  flex: none;\n  width: calc(33.3333333333% - 0.3333333333rem);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.project-detail-slideshow__preview-image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.project-detail-slideshow__preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.padding-top-hack-outer-container[_ngcontent-%COMP%] {\n  padding-top: 56.25%;\n  position: relative;\n}\n.padding-top-hack-inner-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlsLXNsaWRlc2hvdy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFERjtBQUdFO0VBQ0UsbUJDNkNvQjtFRDVDcEIsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLGVDZ0NvQjtFRC9CcEIsVUFBQTtBQUhKO0FBS0k7RUFDRSxxQ0NmaUM7QURZdkM7QUFNSTtFQUNFLE9BQUE7RUFDQSxvQkFBQTtBQUpOO0FBT0k7RUFDRSxRQUFBO0VBQ0EscUJBQUE7QUFMTjtBQVNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFQSjtBQVVFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtFQUNBLGNBQUE7QUFSSjtBQVdFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQ0ZvQjtFREdwQixnQkFBQTtBQVRKO0FBWUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0NoRFk7RURpRFosYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQWFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVhKO0FBZUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBWkY7QUFlQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVpGO0FBZUE7RUFDRSxZQUFBO0FBWkYiLCJmaWxlIjoicHJvamVjdC1kZXRhaWwtc2xpZGVzaG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuLnByb2plY3QtZGV0YWlsLXNsaWRlc2hvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcblxuICAmX19jaW5lbWEtaW1hZ2UtY29udGFpbmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAkZGVmYXVsdC1ib3JkZXItcmFkaXVzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAmX19jaW5lbWEtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gICZfX25hdmlnYXRpb24tYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgcGFkZGluZzogJGRlZmF1bHQtYnV0dG9uLWhpdGJveDtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBmaWx0ZXI6ICRwcmltYXJ5LWFjY2VudC1jb2xvci1kaXNhYmxlZC1maWx0ZXI7XG4gICAgfVxuXG4gICAgJi0tbGVmdCB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0kZGVmYXVsdC1idXR0b24taGl0Ym94O1xuICAgIH1cblxuICAgICYtLXJpZ2h0IHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtJGRlZmF1bHQtYnV0dG9uLWhpdGJveDtcbiAgICB9XG4gIH1cblxuICAmX19hcnJvdy1pY29uIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cblxuICAmX19wcmV2aWV3LWltYWdlLWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC41cmVtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgJl9fcHJldmlldy1pbWFnZS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXg6IG5vbmU7XG4gICAgd2lkdGg6IGNhbGMoMSAvIDMgKiAxMDAlIC0gMiAqIDAuNXJlbSAvIDMpO1xuICAgIGJvcmRlci1yYWRpdXM6ICRkZWZhdWx0LWJvcmRlci1yYWRpdXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gICZfX3ByZXZpZXctaW1hZ2Utb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3ZlcmxheS1jb2xvcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmX19wcmV2aWV3LWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cblxuLnBhZGRpbmctdG9wLWhhY2stb3V0ZXItY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGFkZGluZy10b3AtaGFjay1pbm5lci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsIi8vIENvbG9yc1xuJHByaW1hcnktZm9udC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRwcmltYXJ5LWZvbnQtY29sb3ItZGFyazogIzMwMzAzMDtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1saWdodDogI2UyZTJlMjtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1kYXJrOiAjNWM1YzVjO1xuJHByaW1hcnktYWNjZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICBoc2woMjQxLCA3MCwgNjApLFxuICBoc2woMjkyLCA3MCwgNjApXG4pO1xuJHByaW1hcnktYWNjZW50LWNvbG9yLWhvdmVyOiBoc2woMzQ4LCA3OCUsIDQxJSk7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3ItZGlzYWJsZWQtZmlsdGVyOiBzYXR1cmF0ZSgzMCUpIGJyaWdodG5lc3MoMS41KTtcbiRzZWNvbmRhcnktYWNjZW50LWNvbG9yOiAjOTk5N2ZmO1xuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2Y2ZjZmNjtcbiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItZGFyazogIzJhMmEyYTtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjM2EzYTNhO1xuJG92ZXJsYXktY29sb3I6IGhzbGEoMCwgMCwgMCwgMC43KTtcbiRtdXRlZC1jb2xvcjogI2M0YzRjNDtcbiRlcnJvci1jb2xvcjogaHNsKDAsIDc3JSwgNTglKTtcblxuLy8gQm9vdHN0cmFwIGJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHgsXG4pO1xuXG4kY29udGFpbmVyLXdpZHRoczogKFxuICBcInhzXCI6IDEwMCUsXG4gIFwic21cIjogNTQwcHgsXG4gIFwibWRcIjogNzIwcHgsXG4gIFwibGdcIjogOTYwcHgsXG4gIFwieGxcIjogMTE0MHB4LFxuICBcInh4bFwiOiAxMzIwcHgsXG4pO1xuXG4vLyBCb290c3RyYXAgZ3JpZFxuJGNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcteHM6IDAuNzVyZW07XG5cbi8vIEZvbnQtZmFtaWxpZXNcbiRwcmltYXJ5LWZvbnQtbGlnaHQ6IFwiUG9wcGlucy1MaWdodFwiO1xuJHByaW1hcnktZm9udC1yZWd1bGFyOiBcIlBvcHBpbnMtUmVndWxhclwiO1xuJHByaW1hcnktZm9udC1ib2xkOiBcIlBvcHBpbnMtQm9sZFwiO1xuXG4kc2Vjb25kYXJ5LWZvbnQtbGlnaHQ6IFwiUmFpbHdheS1MaWdodFwiO1xuJHNlY29uZGFyeS1mb250LXJlZ3VsYXI6IFwiUmFpbHdheS1SZWd1bGFyXCI7XG4kc2Vjb25kYXJ5LWZvbnQtYm9sZDogXCJSYWlsd2F5LUJvbGRcIjtcblxuLy8gTWlzY1xuJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogMTJweDtcbiRkZWZhdWx0LWJ1dHRvbi1oaXRib3g6IDAuNXJlbTtcbiRkZWZhdWx0LWJveC1zaGFkb3c6IDAgNHB4IDRweCAwIGhzbGEoMCwgMCwgMCwgMC4yNSk7XG5cbi8vIFRyYW5zaXRpb25zXG4kZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiRkZWZhdWx0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiJdfQ== */"] });


/***/ }),

/***/ 6251:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/project-gallery-item/project-gallery-item.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectGalleryItemComponent": () => (/* binding */ ProjectGalleryItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_pipes_crop_text_crop_text_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/pipes/crop-text/crop-text.pipe */ 221);



class ProjectGalleryItemComponent {
    constructor() { }
    ngOnInit() { }
}
ProjectGalleryItemComponent.ɵfac = function ProjectGalleryItemComponent_Factory(t) { return new (t || ProjectGalleryItemComponent)(); };
ProjectGalleryItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectGalleryItemComponent, selectors: [["portfolio-project-gallery-item"]], inputs: { project: "project" }, decls: 10, vars: 8, consts: [[1, "project-gallery-item", 3, "routerLink"], [1, "project-gallery-item__overlay"], [1, "subtitle", "project-gallery-item__subtitle"], [1, "project-gallery-item__title"], [1, "project-gallery-item__description"], ["alt", "", 1, "project-gallery-item__thumbnail-image", 3, "src"]], template: function ProjectGalleryItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "cropText");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/projects/" + (ctx.project == null ? null : ctx.project.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.project == null ? null : ctx.project.services == null ? null : ctx.project.services.join(", "), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.project == null ? null : ctx.project.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.project ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 5, ctx.project.description, 15) : undefined, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.project == null ? null : ctx.project.thumbnailImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], pipes: [_shared_pipes_crop_text_crop_text_pipe__WEBPACK_IMPORTED_MODULE_0__.CropTextPipe], styles: [".project-gallery-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;\n  overflow: hidden;\n  position: relative;\n  display: block;\n}\n.project-gallery-item[_ngcontent-%COMP%]:hover   .project-gallery-item__overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.project-gallery-item__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  transition: opacity 0.25s ease-in-out;\n}\n.project-gallery-item__subtitle[_ngcontent-%COMP%] {\n  color: #9997ff;\n}\n.project-gallery-item__title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #ffffff;\n  font-size: 1.5rem;\n  line-height: 1.25;\n}\n.project-gallery-item__description[_ngcontent-%COMP%] {\n  color: #e2e2e2;\n}\n.project-gallery-item__thumbnail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvYWJzdHJhY3RzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJDK0NzQjtFRDlDdEIsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFGRjtBQUlFO0VBQ0UsVUFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0NDTFk7RURNWixnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VFTkYscUNBQUE7QUZJRjtBQU1FO0VBQ0UsY0NuQnFCO0FEZXpCO0FBT0U7RUFDRSxxQkFBQTtFQUNBLGNDbkN1QjtFRG9DdkIsaUJBQUE7RUFDQSxpQkFBQTtBQUxKO0FBUUU7RUFDRSxjQ3ZDeUI7QURpQzdCO0FBU0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBUEoiLCJmaWxlIjoicHJvamVjdC1nYWxsZXJ5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcImFic3RyYWN0cy9taXhpbnNcIjtcblxuLnByb2plY3QtZ2FsbGVyeS1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogJGRlZmF1bHQtYm9yZGVyLXJhZGl1cztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcblxuICAmOmhvdmVyICZfX292ZXJsYXkge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAmX19vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG92ZXJsYXktY29sb3I7XG4gICAgcGFkZGluZzogMS43NXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBAaW5jbHVkZSB3aXRoLXRyYW5zaXRpb24ob3BhY2l0eSk7XG4gIH1cblxuICAmX19zdWJ0aXRsZSB7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktYWNjZW50LWNvbG9yO1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvci1saWdodDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxuXG4gICZfX2Rlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1mb250LWNvbG9yLWxpZ2h0O1xuICB9XG5cbiAgJl9fdGh1bWJuYWlsLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cbiIsIi8vIENvbG9yc1xuJHByaW1hcnktZm9udC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRwcmltYXJ5LWZvbnQtY29sb3ItZGFyazogIzMwMzAzMDtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1saWdodDogI2UyZTJlMjtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1kYXJrOiAjNWM1YzVjO1xuJHByaW1hcnktYWNjZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICBoc2woMjQxLCA3MCwgNjApLFxuICBoc2woMjkyLCA3MCwgNjApXG4pO1xuJHByaW1hcnktYWNjZW50LWNvbG9yLWhvdmVyOiBoc2woMzQ4LCA3OCUsIDQxJSk7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3ItZGlzYWJsZWQtZmlsdGVyOiBzYXR1cmF0ZSgzMCUpIGJyaWdodG5lc3MoMS41KTtcbiRzZWNvbmRhcnktYWNjZW50LWNvbG9yOiAjOTk5N2ZmO1xuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2Y2ZjZmNjtcbiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItZGFyazogIzJhMmEyYTtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjM2EzYTNhO1xuJG92ZXJsYXktY29sb3I6IGhzbGEoMCwgMCwgMCwgMC43KTtcbiRtdXRlZC1jb2xvcjogI2M0YzRjNDtcbiRlcnJvci1jb2xvcjogaHNsKDAsIDc3JSwgNTglKTtcblxuLy8gQm9vdHN0cmFwIGJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHgsXG4pO1xuXG4kY29udGFpbmVyLXdpZHRoczogKFxuICBcInhzXCI6IDEwMCUsXG4gIFwic21cIjogNTQwcHgsXG4gIFwibWRcIjogNzIwcHgsXG4gIFwibGdcIjogOTYwcHgsXG4gIFwieGxcIjogMTE0MHB4LFxuICBcInh4bFwiOiAxMzIwcHgsXG4pO1xuXG4vLyBCb290c3RyYXAgZ3JpZFxuJGNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcteHM6IDAuNzVyZW07XG5cbi8vIEZvbnQtZmFtaWxpZXNcbiRwcmltYXJ5LWZvbnQtbGlnaHQ6IFwiUG9wcGlucy1MaWdodFwiO1xuJHByaW1hcnktZm9udC1yZWd1bGFyOiBcIlBvcHBpbnMtUmVndWxhclwiO1xuJHByaW1hcnktZm9udC1ib2xkOiBcIlBvcHBpbnMtQm9sZFwiO1xuXG4kc2Vjb25kYXJ5LWZvbnQtbGlnaHQ6IFwiUmFpbHdheS1MaWdodFwiO1xuJHNlY29uZGFyeS1mb250LXJlZ3VsYXI6IFwiUmFpbHdheS1SZWd1bGFyXCI7XG4kc2Vjb25kYXJ5LWZvbnQtYm9sZDogXCJSYWlsd2F5LUJvbGRcIjtcblxuLy8gTWlzY1xuJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogMTJweDtcbiRkZWZhdWx0LWJ1dHRvbi1oaXRib3g6IDAuNXJlbTtcbiRkZWZhdWx0LWJveC1zaGFkb3c6IDAgNHB4IDRweCAwIGhzbGEoMCwgMCwgMCwgMC4yNSk7XG5cbi8vIFRyYW5zaXRpb25zXG4kZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiRkZWZhdWx0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuQGltcG9ydCBcImFic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGdyaWQtYnJlYWtwb2ludCkge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICRncmlkLWJyZWFrcG9pbnQpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkZ3JpZC1icmVha3BvaW50KSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogY2FsYyhtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAkZ3JpZC1icmVha3BvaW50KSAtIDFweCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gd2l0aC10cmFuc2l0aW9uKFxuICAkdHJhbnNpdGlvbi1wcm9wZXJ0eSxcbiAgJHRyYW5zaXRpb24tZHVyYXRpb246ICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJGRlZmF1bHQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cbikge1xuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1wcm9wZXJ0eSAkdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5700:
/*!********************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/project-gallery/project-gallery.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectGalleryComponent": () => (/* binding */ ProjectGalleryComponent)
/* harmony export */ });
/* harmony import */ var scrollbooster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollbooster */ 3653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _project_gallery_item_project_gallery_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-gallery-item/project-gallery-item.component */ 6251);




const _c0 = ["projectGalleryViewport"];
function ProjectGalleryComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "portfolio-project-gallery-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("project", project_r4);
} }
function ProjectGalleryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectGalleryComponent_div_3_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grid_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", grid_r2.projects);
} }
class ProjectGalleryComponent {
    constructor() {
        this.projects = [];
        this.MAX_ITEMS_IN_GRID = 5;
        this.grids = [];
    }
    ngOnInit() {
        this.projects.forEach((project, index) => {
            if (this.shouldCreateNewGrid(index)) {
                this.grids.push({
                    projects: [],
                });
            }
            this.addProjectToGrid(project, index);
        });
    }
    ngAfterViewInit() {
        var _a, _b;
        new scrollbooster__WEBPACK_IMPORTED_MODULE_0__["default"]({
            viewport: (_b = (_a = this.projectGalleryViewport) === null || _a === void 0 ? void 0 : _a.nativeElement) !== null && _b !== void 0 ? _b : null,
            scrollMode: 'transform',
            direction: 'horizontal',
        });
    }
    shouldCreateNewGrid(projectIndex) {
        return projectIndex % this.MAX_ITEMS_IN_GRID === 0;
    }
    addProjectToGrid(project, projectIndex) {
        this.grids[Math.floor(projectIndex / this.MAX_ITEMS_IN_GRID)].projects.push(project);
    }
}
ProjectGalleryComponent.ɵfac = function ProjectGalleryComponent_Factory(t) { return new (t || ProjectGalleryComponent)(); };
ProjectGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectGalleryComponent, selectors: [["portfolio-project-gallery"]], viewQuery: function ProjectGalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.projectGalleryViewport = _t.first);
    } }, inputs: { projects: "projects" }, decls: 4, vars: 1, consts: [[1, "project-gallery"], ["projectGalleryViewport", ""], [1, "project-gallery__grids-container"], ["class", "project-gallery__grid", 4, "ngFor", "ngForOf"], [1, "project-gallery__grid"], ["class", "project-gallery__grid-item", 4, "ngFor", "ngForOf"], [1, "project-gallery__grid-item"], [3, "project"]], template: function ProjectGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProjectGalleryComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.grids);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _project_gallery_item_project_gallery_item_component__WEBPACK_IMPORTED_MODULE_1__.ProjectGalleryItemComponent], styles: [".project-gallery[_ngcontent-%COMP%] {\n  --height: 500px;\n  --grid-gap: 1.5rem;\n  height: var(--height);\n  overflow: hidden;\n  cursor: grab;\n  padding-left: 0.75rem;\n}\n.project-gallery[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n@media only screen and (min-width: 576px) {\n  .project-gallery[_ngcontent-%COMP%] {\n    padding-left: calc((100vw - 540px) / 2);\n  }\n}\n@media only screen and (min-width: 768px) {\n  .project-gallery[_ngcontent-%COMP%] {\n    --height: 600px;\n    --grid-gap: 2rem;\n    padding-left: calc((100vw - 720px) / 2);\n  }\n}\n@media only screen and (min-width: 992px) {\n  .project-gallery[_ngcontent-%COMP%] {\n    padding-left: calc((100vw - 960px) / 2);\n  }\n}\n@media only screen and (min-width: 1200px) {\n  .project-gallery[_ngcontent-%COMP%] {\n    padding-left: calc((100vw - 1140px) / 2);\n  }\n}\n@media only screen and (min-width: 1400px) {\n  .project-gallery[_ngcontent-%COMP%] {\n    padding-left: calc((100vw - 1320px) / 2);\n  }\n}\n.project-gallery__grids-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  grid-gap: var(--grid-gap);\n  gap: var(--grid-gap);\n}\n.project-gallery__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, calc(var(--height) / 2 - var(--grid-gap) * 3 / 4));\n  grid-template-rows: repeat(2, calc(var(--height) / 2 - var(--grid-gap) / 2));\n  grid-template-areas: \"first-project second-project second-project fifth-project\" \"third-project third-project fourth-project fifth-project\";\n  grid-gap: var(--grid-gap);\n  gap: var(--grid-gap);\n}\n.project-gallery__grid-item[_ngcontent-%COMP%]:nth-child(1) {\n  grid-area: first-project;\n}\n.project-gallery__grid-item[_ngcontent-%COMP%]:nth-child(2) {\n  grid-area: second-project;\n}\n.project-gallery__grid-item[_ngcontent-%COMP%]:nth-child(3) {\n  grid-area: third-project;\n}\n.project-gallery__grid-item[_ngcontent-%COMP%]:nth-child(4) {\n  grid-area: fourth-project;\n}\n.project-gallery__grid-item[_ngcontent-%COMP%]:nth-child(5) {\n  grid-area: fifth-project;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFHRSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQzRCZ0M7QURsQ2xDO0FBUUU7RUFDRSxnQkFBQTtBQU5KO0FFTkU7RUZBRjtJQWdCSSx1Q0FBQTtFQU5GO0FBQ0Y7QUVYRTtFRkFGO0lBbUJJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHVDQUFBO0VBSkY7QUFDRjtBRWxCRTtFRkFGO0lBd0JJLHVDQUFBO0VBRkY7QUFDRjtBRXZCRTtFRkFGO0lBMkJJLHdDQUFBO0VBQUY7QUFDRjtBRTVCRTtFRkFGO0lBOEJJLHdDQUFBO0VBRUY7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLG9CQUFBO0FBRUo7QUFDRTtFQUNFLGFBQUE7RUFDQSxtRkFBQTtFQUlBLDRFQUFBO0VBSUEsMklBQ0U7RUFFRix5QkFBQTtFQUFBLG9CQUFBO0FBUEo7QUFXSTtFQUNFLHdCQUFBO0FBVE47QUFZSTtFQUNFLHlCQUFBO0FBVk47QUFhSTtFQUNFLHdCQUFBO0FBWE47QUFjSTtFQUNFLHlCQUFBO0FBWk47QUFlSTtFQUNFLHdCQUFBO0FBYk4iLCJmaWxlIjoicHJvamVjdC1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcInNhc3M6bWFwXCI7XG5AaW1wb3J0IFwiYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcImFic3RyYWN0cy9taXhpbnNcIjtcblxuLnByb2plY3QtZ2FsbGVyeSB7XG4gIC8vIFRoZSBoZWlnaHQgaXMgc3RvcmVkIGluIGEgc3BlY2lmaWMgdmFyaWFibGUgdG8gYmUgYWJsZSB0byBjYWxjdWxhdGUgdGhlIHdpZHRoXG4gIC8vIG9mIHRoZSBjaGlsZCBlbGVtZW50cyBkZXBlbmRpbmcgb24gdGhlIGhlaWdodCBvZiB0aGUgcGFyZW50IGVsZW1lbnRcbiAgLS1oZWlnaHQ6IDUwMHB4O1xuICAvLyBUaGUgZ3JpZCBnYXAgaXMgc3RvcmVkIGluIGEgc3BlY2lmaWMgdmFyaWFibGUgYmVjYXVzZSBpdCBpcyB1c2VkIGFjcm9zcyBlbGVtZW50c1xuICAtLWdyaWQtZ2FwOiAxLjVyZW07XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBncmFiO1xuICBwYWRkaW5nLWxlZnQ6ICRjb250YWluZXItaG9yaXpvbnRhbC1wYWRkaW5nLXhzO1xuXG4gICY6YWN0aXZlIHtcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChcInNtXCIpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoKDEwMHZ3IC0gbWFwLmdldCgkY29udGFpbmVyLXdpZHRocywgXCJzbVwiKSkgLyAyKTtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKFwibWRcIikge1xuICAgIC0taGVpZ2h0OiA2MDBweDtcbiAgICAtLWdyaWQtZ2FwOiAycmVtO1xuICAgIHBhZGRpbmctbGVmdDogY2FsYygoMTAwdncgLSBtYXAuZ2V0KCRjb250YWluZXItd2lkdGhzLCBcIm1kXCIpKSAvIDIpO1xuICB9XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoXCJsZ1wiKSB7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKCgxMDB2dyAtIG1hcC5nZXQoJGNvbnRhaW5lci13aWR0aHMsIFwibGdcIikpIC8gMik7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChcInhsXCIpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoKDEwMHZ3IC0gbWFwLmdldCgkY29udGFpbmVyLXdpZHRocywgXCJ4bFwiKSkgLyAyKTtcbiAgfVxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKFwieHhsXCIpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoKDEwMHZ3IC0gbWFwLmdldCgkY29udGFpbmVyLXdpZHRocywgXCJ4eGxcIikpIC8gMik7XG4gIH1cblxuICAmX19ncmlkcy1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogdmFyKC0tZ3JpZC1nYXApO1xuICB9XG5cbiAgJl9fZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcbiAgICAgIDQsXG4gICAgICBjYWxjKHZhcigtLWhlaWdodCkgLyAyIC0gdmFyKC0tZ3JpZC1nYXApICogMyAvIDQpXG4gICAgKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChcbiAgICAgIDIsXG4gICAgICBjYWxjKHZhcigtLWhlaWdodCkgLyAyIC0gdmFyKC0tZ3JpZC1nYXApIC8gMilcbiAgICApO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICBcImZpcnN0LXByb2plY3Qgc2Vjb25kLXByb2plY3Qgc2Vjb25kLXByb2plY3QgZmlmdGgtcHJvamVjdFwiXG4gICAgICBcInRoaXJkLXByb2plY3QgdGhpcmQtcHJvamVjdCBmb3VydGgtcHJvamVjdCBmaWZ0aC1wcm9qZWN0XCI7XG4gICAgZ2FwOiB2YXIoLS1ncmlkLWdhcCk7XG4gIH1cblxuICAmX19ncmlkLWl0ZW0ge1xuICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgIGdyaWQtYXJlYTogZmlyc3QtcHJvamVjdDtcbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICBncmlkLWFyZWE6IHNlY29uZC1wcm9qZWN0O1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgIGdyaWQtYXJlYTogdGhpcmQtcHJvamVjdDtcbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCg0KSB7XG4gICAgICBncmlkLWFyZWE6IGZvdXJ0aC1wcm9qZWN0O1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDUpIHtcbiAgICAgIGdyaWQtYXJlYTogZmlmdGgtcHJvamVjdDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvbG9yc1xuJHByaW1hcnktZm9udC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRwcmltYXJ5LWZvbnQtY29sb3ItZGFyazogIzMwMzAzMDtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1saWdodDogI2UyZTJlMjtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1kYXJrOiAjNWM1YzVjO1xuJHByaW1hcnktYWNjZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICBoc2woMjQxLCA3MCwgNjApLFxuICBoc2woMjkyLCA3MCwgNjApXG4pO1xuJHByaW1hcnktYWNjZW50LWNvbG9yLWhvdmVyOiBoc2woMzQ4LCA3OCUsIDQxJSk7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3ItZGlzYWJsZWQtZmlsdGVyOiBzYXR1cmF0ZSgzMCUpIGJyaWdodG5lc3MoMS41KTtcbiRzZWNvbmRhcnktYWNjZW50LWNvbG9yOiAjOTk5N2ZmO1xuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2Y2ZjZmNjtcbiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItZGFyazogIzJhMmEyYTtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjM2EzYTNhO1xuJG92ZXJsYXktY29sb3I6IGhzbGEoMCwgMCwgMCwgMC43KTtcbiRtdXRlZC1jb2xvcjogI2M0YzRjNDtcbiRlcnJvci1jb2xvcjogaHNsKDAsIDc3JSwgNTglKTtcblxuLy8gQm9vdHN0cmFwIGJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHgsXG4pO1xuXG4kY29udGFpbmVyLXdpZHRoczogKFxuICBcInhzXCI6IDEwMCUsXG4gIFwic21cIjogNTQwcHgsXG4gIFwibWRcIjogNzIwcHgsXG4gIFwibGdcIjogOTYwcHgsXG4gIFwieGxcIjogMTE0MHB4LFxuICBcInh4bFwiOiAxMzIwcHgsXG4pO1xuXG4vLyBCb290c3RyYXAgZ3JpZFxuJGNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcteHM6IDAuNzVyZW07XG5cbi8vIEZvbnQtZmFtaWxpZXNcbiRwcmltYXJ5LWZvbnQtbGlnaHQ6IFwiUG9wcGlucy1MaWdodFwiO1xuJHByaW1hcnktZm9udC1yZWd1bGFyOiBcIlBvcHBpbnMtUmVndWxhclwiO1xuJHByaW1hcnktZm9udC1ib2xkOiBcIlBvcHBpbnMtQm9sZFwiO1xuXG4kc2Vjb25kYXJ5LWZvbnQtbGlnaHQ6IFwiUmFpbHdheS1MaWdodFwiO1xuJHNlY29uZGFyeS1mb250LXJlZ3VsYXI6IFwiUmFpbHdheS1SZWd1bGFyXCI7XG4kc2Vjb25kYXJ5LWZvbnQtYm9sZDogXCJSYWlsd2F5LUJvbGRcIjtcblxuLy8gTWlzY1xuJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogMTJweDtcbiRkZWZhdWx0LWJ1dHRvbi1oaXRib3g6IDAuNXJlbTtcbiRkZWZhdWx0LWJveC1zaGFkb3c6IDAgNHB4IDRweCAwIGhzbGEoMCwgMCwgMCwgMC4yNSk7XG5cbi8vIFRyYW5zaXRpb25zXG4kZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiRkZWZhdWx0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuQGltcG9ydCBcImFic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGdyaWQtYnJlYWtwb2ludCkge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICRncmlkLWJyZWFrcG9pbnQpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkZ3JpZC1icmVha3BvaW50KSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogY2FsYyhtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAkZ3JpZC1icmVha3BvaW50KSAtIDFweCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gd2l0aC10cmFuc2l0aW9uKFxuICAkdHJhbnNpdGlvbi1wcm9wZXJ0eSxcbiAgJHRyYW5zaXRpb24tZHVyYXRpb246ICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJGRlZmF1bHQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cbikge1xuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1wcm9wZXJ0eSAkdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6525:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/projects-section/projects-section.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "ProjectsSectionComponent": () => (/* binding */ ProjectsSectionComponent)
/* harmony export */ });
/* harmony import */ var _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/portfolio/enums/service-title.enum */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../section-header/section-header.component */ 3930);
/* harmony import */ var _project_gallery_project_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-gallery/project-gallery.component */ 5700);




const projects = [
    {
        id: 'b83e94b2-f74b-4eb3-9d8e-5ed1e2166cd7',
        title: 'Brabus',
        thumbnailImageUrl: '/assets/images/1.jpeg',
        services: [
            _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY,
            _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.COOPERATIONS,
            _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
        ],
        description: 'Exercitation officia elit culpa excepteur eiusmod aute ut eiusmod. Enim excepteur exercitation est veniam ex dolore voluptate nulla dolore irure cupidatat incididunt sit. Ea excepteur sit sint nisi consequat. Consequat aliquip id qui elit. Eu ut est nulla proident.',
        slideshowImageUrls: [
            '/assets/images/1.jpeg',
            '/assets/images/1.jpeg',
            '/assets/images/1.jpeg',
            '/assets/images/1.jpeg',
        ],
        websiteUrl: '/',
        instagramUrl: '/',
        tikTokUrl: '/',
        linkedInUrl: '/',
    },
    {
        id: 'eb981e3c-2e8e-4066-aa64-687a8183e05d',
        title: 'Brabus II',
        thumbnailImageUrl: '/assets/images/2.jpeg',
        services: [_features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY],
        description: 'Ea nulla laboris fugiat do sit ipsum consequat magna aute duis excepteur irure velit irure. Quis mollit reprehenderit id pariatur sint nulla. Duis mollit eu et Lorem dolor minim excepteur. Consectetur cillum excepteur nostrud enim proident consequat qui velit. Ad minim dolor ea ea esse fugiat.',
        slideshowImageUrls: ['/assets/images/2.jpeg'],
    },
    {
        id: '5d149dd3-4200-4795-99ee-d5bf09e9c211',
        title: 'Porsche I',
        thumbnailImageUrl: '/assets/images/3.jpg',
        services: [_features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.SOCIAL_MEDIA_MANAGEMENT],
        description: 'Fugiat quis nulla velit aliquip magna est nisi aute deserunt. Laborum do officia eu incididunt anim dolor esse elit. Nostrud sunt et consectetur aute tempor reprehenderit dolore reprehenderit nulla. Consectetur sunt id reprehenderit eu esse in do in elit mollit incididunt sunt sint voluptate. Sunt sit aute cillum nulla pariatur proident consectetur eu ea.',
        slideshowImageUrls: ['/assets/images/3.jpeg'],
    },
    {
        id: '1abb6399-8e50-4bdd-9c3a-d220b230f73b',
        title: 'Porsche II',
        thumbnailImageUrl: '/assets/images/4.jpeg',
        services: [
            _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY,
            _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
        ],
        description: 'Fugiat do veniam qui eiusmod eiusmod Lorem duis nulla. Reprehenderit occaecat Lorem do Lorem ad. Elit eiusmod qui in eiusmod. Aliquip veniam ex labore aliquip excepteur consequat dolore nisi. Veniam sunt laborum aliqua velit cupidatat commodo voluptate commodo anim aliquip quis fugiat Lorem. Ipsum amet anim culpa culpa.',
        slideshowImageUrls: ['/assets/images/4.jpeg'],
    },
    {
        id: '20d203d0-ef1b-42ad-b545-c6db8838e712',
        title: 'Mercedes-Benz',
        thumbnailImageUrl: '/assets/images/5.jpeg',
        services: [_features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.COOPERATIONS, _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.SOCIAL_MEDIA_MANAGEMENT],
        description: 'Laborum aliqua sunt duis adipisicing dolor. Ex et amet magna ipsum tempor commodo minim aliqua. Aute laborum ipsum nisi duis pariatur est officia ut ipsum. Voluptate aliqua enim velit commodo nulla laboris excepteur irure officia non in laborum ex magna.',
        slideshowImageUrls: ['/assets/images/5.jpeg'],
    },
    {
        id: 'a2f355b1-4d47-41d8-8b70-bb080253a7da',
        title: 'Mercedes-Benz II',
        thumbnailImageUrl: '/assets/images/6.jpeg',
        services: [
            _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.COOPERATIONS,
            _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
            _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.COOPERATIONS,
        ],
        description: 'Aute dolor dolor id tempor non excepteur ullamco ea ipsum consequat irure laboris eu. Tempor veniam veniam sint sunt adipisicing elit deserunt aute consequat exercitation veniam proident tempor. Aliquip officia amet ullamco adipisicing aliquip elit consequat velit labore. Dolor consequat nulla sit qui amet et irure mollit ea nisi voluptate est duis. Aliqua Lorem nulla ad exercitation. Sint ea sunt excepteur minim commodo anim sit.',
        slideshowImageUrls: ['/assets/images/6.jpeg'],
    },
    {
        id: '618c0faf-6f61-4264-b92c-20606290d690',
        title: 'G-Klasse',
        thumbnailImageUrl: '/assets/images/7.jpeg',
        services: [_features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.COOPERATIONS],
        description: 'Incididunt in consectetur consequat nulla duis Lorem elit ad dolore aliquip duis aute quis tempor. In veniam ea amet exercitation occaecat aliquip sunt irure aliquip ut exercitation excepteur id ex. Sit exercitation excepteur incididunt laborum. Id ea id veniam exercitation ad qui amet in. Elit non aute minim dolor adipisicing ullamco cillum ad ad exercitation magna consequat. Proident consectetur ut id aliqua qui Lorem anim id aliquip irure nostrud consequat. In elit dolore nostrud enim proident irure id nulla reprehenderit consequat eiusmod proident esse enim.',
        slideshowImageUrls: ['/assets/images/7.jpeg'],
    },
];
class ProjectsSectionComponent {
    constructor() {
        this.projects = [];
    }
    ngOnInit() {
        // Fetch projects from database
        this.projects = projects;
    }
}
ProjectsSectionComponent.ɵfac = function ProjectsSectionComponent_Factory(t) { return new (t || ProjectsSectionComponent)(); };
ProjectsSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProjectsSectionComponent, selectors: [["portfolio-projects-section"]], decls: 4, vars: 1, consts: [[1, "section"], [1, "container"], ["title", "Meine letzten Projekte", "subtitle", "Projekte"], [3, "projects"]], template: function ProjectsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "portfolio-section-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "portfolio-project-gallery", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("projects", ctx.projects);
    } }, directives: [_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_1__.SectionHeaderComponent, _project_gallery_project_gallery_component__WEBPACK_IMPORTED_MODULE_2__.ProjectGalleryComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3930:
/*!******************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/section-header/section-header.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionHeaderComponent": () => (/* binding */ SectionHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SectionHeaderComponent {
    constructor() {
        this.title = '';
        this.subtitle = '';
    }
    ngOnInit() { }
}
SectionHeaderComponent.ɵfac = function SectionHeaderComponent_Factory(t) { return new (t || SectionHeaderComponent)(); };
SectionHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionHeaderComponent, selectors: [["portfolio-section-header"]], inputs: { title: "title", subtitle: "subtitle" }, decls: 5, vars: 2, consts: [[1, "section-header"], [1, "subtitle", "section-header__subtitle"], [1, "section-header__title"]], template: function SectionHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, styles: [".section-header[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.section-header__title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n  line-height: 1.5;\n}\n.section-header__subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  background-image: linear-gradient(90deg, #5452e0, #cd52e0);\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBQTtBQURGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLDBEQ1JtQjtFRFNuQixxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFGSiIsImZpbGUiOiJzZWN0aW9uLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJhYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcblxuICAmX190aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgJl9fc3VidGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkcHJpbWFyeS1hY2NlbnQtY29sb3I7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuIiwiLy8gQ29sb3JzXG4kcHJpbWFyeS1mb250LWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xuJHByaW1hcnktZm9udC1jb2xvci1kYXJrOiAjMzAzMDMwO1xuJHNlY29uZGFyeS1mb250LWNvbG9yLWxpZ2h0OiAjZTJlMmUyO1xuJHNlY29uZGFyeS1mb250LWNvbG9yLWRhcms6ICM1YzVjNWM7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIGhzbCgyNDEsIDcwLCA2MCksXG4gIGhzbCgyOTIsIDcwLCA2MClcbik7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3ItaG92ZXI6IGhzbCgzNDgsIDc4JSwgNDElKTtcbiRwcmltYXJ5LWFjY2VudC1jb2xvci1kaXNhYmxlZC1maWx0ZXI6IHNhdHVyYXRlKDMwJSkgYnJpZ2h0bmVzcygxLjUpO1xuJHNlY29uZGFyeS1hY2NlbnQtY29sb3I6ICM5OTk3ZmY7XG4kcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0OiAjZjZmNmY2O1xuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjMmEyYTJhO1xuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICMzYTNhM2E7XG4kb3ZlcmxheS1jb2xvcjogaHNsYSgwLCAwLCAwLCAwLjcpO1xuJG11dGVkLWNvbG9yOiAjYzRjNGM0O1xuJGVycm9yLWNvbG9yOiBoc2woMCwgNzclLCA1OCUpO1xuXG4vLyBCb290c3RyYXAgYnJlYWtwb2ludHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweCxcbik7XG5cbiRjb250YWluZXItd2lkdGhzOiAoXG4gIFwieHNcIjogMTAwJSxcbiAgXCJzbVwiOiA1NDBweCxcbiAgXCJtZFwiOiA3MjBweCxcbiAgXCJsZ1wiOiA5NjBweCxcbiAgXCJ4bFwiOiAxMTQwcHgsXG4gIFwieHhsXCI6IDEzMjBweCxcbik7XG5cbi8vIEJvb3RzdHJhcCBncmlkXG4kY29udGFpbmVyLWhvcml6b250YWwtcGFkZGluZy14czogMC43NXJlbTtcblxuLy8gRm9udC1mYW1pbGllc1xuJHByaW1hcnktZm9udC1saWdodDogXCJQb3BwaW5zLUxpZ2h0XCI7XG4kcHJpbWFyeS1mb250LXJlZ3VsYXI6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4kcHJpbWFyeS1mb250LWJvbGQ6IFwiUG9wcGlucy1Cb2xkXCI7XG5cbiRzZWNvbmRhcnktZm9udC1saWdodDogXCJSYWlsd2F5LUxpZ2h0XCI7XG4kc2Vjb25kYXJ5LWZvbnQtcmVndWxhcjogXCJSYWlsd2F5LVJlZ3VsYXJcIjtcbiRzZWNvbmRhcnktZm9udC1ib2xkOiBcIlJhaWx3YXktQm9sZFwiO1xuXG4vLyBNaXNjXG4kZGVmYXVsdC1ib3JkZXItcmFkaXVzOiAxMnB4O1xuJGRlZmF1bHQtYnV0dG9uLWhpdGJveDogMC41cmVtO1xuJGRlZmF1bHQtYm94LXNoYWRvdzogMCA0cHggNHB4IDAgaHNsYSgwLCAwLCAwLCAwLjI1KTtcblxuLy8gVHJhbnNpdGlvbnNcbiRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuJGRlZmF1bHQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuIl19 */"] });


/***/ }),

/***/ 1945:
/*!**************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/service-card/service-card.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceCardComponent": () => (/* binding */ ServiceCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ServiceCardComponent {
    constructor() { }
    ngOnInit() { }
}
ServiceCardComponent.ɵfac = function ServiceCardComponent_Factory(t) { return new (t || ServiceCardComponent)(); };
ServiceCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceCardComponent, selectors: [["portfolio-service-card"]], inputs: { service: "service" }, decls: 7, vars: 3, consts: [[1, "service-card"], ["alt", "", 1, "service-card__icon", 3, "src"], [1, "service-card__text-container"], [1, "service-card__title"]], template: function ServiceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.service == null ? null : ctx.service.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service == null ? null : ctx.service.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service == null ? null : ctx.service.description, " ");
    } }, styles: [".service-card[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 2rem;\n  display: flex;\n  grid-gap: 1.75rem;\n  gap: 1.75rem;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);\n}\n.service-card__icon[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.service-card__text-container[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.service-card__title[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UtY2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFBQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkNLK0I7RURKL0IsbUJDNENzQjtFRDNDdEIsMkNDNkNtQjtBRDlDckI7QUFHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBREo7QUFJRTtFQUNFLE9BQUE7RUFDQSxZQUFBO0FBRko7QUFLRTtFQUNFLHNCQUFBO0FBSEoiLCJmaWxlIjoic2VydmljZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuLnNlcnZpY2UtY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjc1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAkZGVmYXVsdC1ib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkZGVmYXVsdC1ib3gtc2hhZG93O1xuXG4gICZfX2ljb24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgJl9fdGV4dC1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIH1cbn1cbiIsIi8vIENvbG9yc1xuJHByaW1hcnktZm9udC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRwcmltYXJ5LWZvbnQtY29sb3ItZGFyazogIzMwMzAzMDtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1saWdodDogI2UyZTJlMjtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1kYXJrOiAjNWM1YzVjO1xuJHByaW1hcnktYWNjZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICBoc2woMjQxLCA3MCwgNjApLFxuICBoc2woMjkyLCA3MCwgNjApXG4pO1xuJHByaW1hcnktYWNjZW50LWNvbG9yLWhvdmVyOiBoc2woMzQ4LCA3OCUsIDQxJSk7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3ItZGlzYWJsZWQtZmlsdGVyOiBzYXR1cmF0ZSgzMCUpIGJyaWdodG5lc3MoMS41KTtcbiRzZWNvbmRhcnktYWNjZW50LWNvbG9yOiAjOTk5N2ZmO1xuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2Y2ZjZmNjtcbiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItZGFyazogIzJhMmEyYTtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjM2EzYTNhO1xuJG92ZXJsYXktY29sb3I6IGhzbGEoMCwgMCwgMCwgMC43KTtcbiRtdXRlZC1jb2xvcjogI2M0YzRjNDtcbiRlcnJvci1jb2xvcjogaHNsKDAsIDc3JSwgNTglKTtcblxuLy8gQm9vdHN0cmFwIGJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHgsXG4pO1xuXG4kY29udGFpbmVyLXdpZHRoczogKFxuICBcInhzXCI6IDEwMCUsXG4gIFwic21cIjogNTQwcHgsXG4gIFwibWRcIjogNzIwcHgsXG4gIFwibGdcIjogOTYwcHgsXG4gIFwieGxcIjogMTE0MHB4LFxuICBcInh4bFwiOiAxMzIwcHgsXG4pO1xuXG4vLyBCb290c3RyYXAgZ3JpZFxuJGNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcteHM6IDAuNzVyZW07XG5cbi8vIEZvbnQtZmFtaWxpZXNcbiRwcmltYXJ5LWZvbnQtbGlnaHQ6IFwiUG9wcGlucy1MaWdodFwiO1xuJHByaW1hcnktZm9udC1yZWd1bGFyOiBcIlBvcHBpbnMtUmVndWxhclwiO1xuJHByaW1hcnktZm9udC1ib2xkOiBcIlBvcHBpbnMtQm9sZFwiO1xuXG4kc2Vjb25kYXJ5LWZvbnQtbGlnaHQ6IFwiUmFpbHdheS1MaWdodFwiO1xuJHNlY29uZGFyeS1mb250LXJlZ3VsYXI6IFwiUmFpbHdheS1SZWd1bGFyXCI7XG4kc2Vjb25kYXJ5LWZvbnQtYm9sZDogXCJSYWlsd2F5LUJvbGRcIjtcblxuLy8gTWlzY1xuJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogMTJweDtcbiRkZWZhdWx0LWJ1dHRvbi1oaXRib3g6IDAuNXJlbTtcbiRkZWZhdWx0LWJveC1zaGFkb3c6IDAgNHB4IDRweCAwIGhzbGEoMCwgMCwgMCwgMC4yNSk7XG5cbi8vIFRyYW5zaXRpb25zXG4kZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiRkZWZhdWx0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiJdfQ== */"] });


/***/ }),

/***/ 6803:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/services-section/services-section.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesSectionComponent": () => (/* binding */ ServicesSectionComponent)
/* harmony export */ });
/* harmony import */ var _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/portfolio/enums/service-title.enum */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../section-header/section-header.component */ 3930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _service_card_service_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-card/service-card.component */ 1945);





function ServicesSectionComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "portfolio-service-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("service", service_r1);
} }
class ServicesSectionComponent {
    constructor() {
        this.services = [
            {
                iconUrl: '/assets/icons/photography-videography-icon.svg',
                title: _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.PHOTOGRAPHY_AND_VIDEOGRAPHY,
                description: 'Esse excepteur elit amet in aliqua ut anim. 1Incididunt elit quis anim sunt aliquip tempor.',
            },
            {
                iconUrl: '/assets/icons/social-media-management-icon.svg',
                title: _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.SOCIAL_MEDIA_MANAGEMENT,
                description: 'Qui quis pariatur qui aliquip eiusmod reprehenderit ut id nostrud aliquip sunt. Minim ut consectetur exercitation in do irure duis ex laboris id incididunt pariatur occaecat.',
            },
            {
                iconUrl: '/assets/icons/cooperations-icon.svg',
                title: _features_portfolio_enums_service_title_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTitle.COOPERATIONS,
                description: 'Pariatur proident enim minim excepteur consectetur Lorem nisi consectetur nisi. Ipsum Lorem ullamco sint eiusmod officia in tempor ut nulla est.',
            },
        ];
    }
    ngOnInit() { }
}
ServicesSectionComponent.ɵfac = function ServicesSectionComponent_Factory(t) { return new (t || ServicesSectionComponent)(); };
ServicesSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ServicesSectionComponent, selectors: [["portfolio-services-section"]], decls: 5, vars: 1, consts: [[1, "section", "services"], [1, "container"], ["title", "Was ich mache", "subtitle", "Leistungen"], [1, "services__service-cards-container"], ["class", "services__service-card-container", 4, "ngFor", "ngForOf"], [1, "services__service-card-container"], [3, "service"]], template: function ServicesSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "portfolio-section-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ServicesSectionComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.services);
    } }, directives: [_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_1__.SectionHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _service_card_service_card_component__WEBPACK_IMPORTED_MODULE_2__.ServiceCardComponent], styles: [".services[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n}\n.services__service-cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 2rem;\n  gap: 2rem;\n}\n.services__service-card-container[_ngcontent-%COMP%] {\n  flex: none;\n}\n@media only screen and (min-width: 768px) {\n  .services__service-cards-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .services__service-card-container[_ngcontent-%COMP%] {\n    width: calc(50% - 1rem);\n  }\n}\n@media only screen and (min-width: 1200px) {\n  .services__service-cards-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .services__service-card-container[_ngcontent-%COMP%] {\n    width: calc(33.3333333333% - 1.3333333333rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvYWJzdHJhY3RzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UseUJDU2lDO0FEWm5DO0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUhKO0FBTUU7RUFDRSxVQUFBO0FBSko7QUVORTtFRmNFO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7RUFMSjtFQVFFO0lBQ0UsdUJBQUE7RUFOSjtBQUNGO0FFaEJFO0VGMEJFO0lBQ0UsbUJBQUE7RUFQSjtFQVVFO0lBQ0UsNkNBQUE7RUFSSjtBQUNGIiwiZmlsZSI6InNlcnZpY2VzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwic2FzczptYXBcIjtcbkBpbXBvcnQgXCJhYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiYWJzdHJhY3RzL21peGluc1wiO1xuXG4uc2VydmljZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3ItbGlnaHQ7XG5cbiAgJl9fc2VydmljZS1jYXJkcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG4gIH1cblxuICAmX19zZXJ2aWNlLWNhcmQtY29udGFpbmVyIHtcbiAgICBmbGV4OiBub25lO1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChcIm1kXCIpIHtcbiAgICAmX19zZXJ2aWNlLWNhcmRzLWNvbnRhaW5lciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fc2VydmljZS1jYXJkLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAycmVtIC8gMik7XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChcInhsXCIpIHtcbiAgICAmX19zZXJ2aWNlLWNhcmRzLWNvbnRhaW5lciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cblxuICAgICZfX3NlcnZpY2UtY2FyZC1jb250YWluZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMSAvIDMgKiAxMDAlIC0gMnJlbSAqIDIgLyAzKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvbG9yc1xuJHByaW1hcnktZm9udC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRwcmltYXJ5LWZvbnQtY29sb3ItZGFyazogIzMwMzAzMDtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1saWdodDogI2UyZTJlMjtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1kYXJrOiAjNWM1YzVjO1xuJHByaW1hcnktYWNjZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICBoc2woMjQxLCA3MCwgNjApLFxuICBoc2woMjkyLCA3MCwgNjApXG4pO1xuJHByaW1hcnktYWNjZW50LWNvbG9yLWhvdmVyOiBoc2woMzQ4LCA3OCUsIDQxJSk7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3ItZGlzYWJsZWQtZmlsdGVyOiBzYXR1cmF0ZSgzMCUpIGJyaWdodG5lc3MoMS41KTtcbiRzZWNvbmRhcnktYWNjZW50LWNvbG9yOiAjOTk5N2ZmO1xuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2Y2ZjZmNjtcbiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItZGFyazogIzJhMmEyYTtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjM2EzYTNhO1xuJG92ZXJsYXktY29sb3I6IGhzbGEoMCwgMCwgMCwgMC43KTtcbiRtdXRlZC1jb2xvcjogI2M0YzRjNDtcbiRlcnJvci1jb2xvcjogaHNsKDAsIDc3JSwgNTglKTtcblxuLy8gQm9vdHN0cmFwIGJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHgsXG4pO1xuXG4kY29udGFpbmVyLXdpZHRoczogKFxuICBcInhzXCI6IDEwMCUsXG4gIFwic21cIjogNTQwcHgsXG4gIFwibWRcIjogNzIwcHgsXG4gIFwibGdcIjogOTYwcHgsXG4gIFwieGxcIjogMTE0MHB4LFxuICBcInh4bFwiOiAxMzIwcHgsXG4pO1xuXG4vLyBCb290c3RyYXAgZ3JpZFxuJGNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcteHM6IDAuNzVyZW07XG5cbi8vIEZvbnQtZmFtaWxpZXNcbiRwcmltYXJ5LWZvbnQtbGlnaHQ6IFwiUG9wcGlucy1MaWdodFwiO1xuJHByaW1hcnktZm9udC1yZWd1bGFyOiBcIlBvcHBpbnMtUmVndWxhclwiO1xuJHByaW1hcnktZm9udC1ib2xkOiBcIlBvcHBpbnMtQm9sZFwiO1xuXG4kc2Vjb25kYXJ5LWZvbnQtbGlnaHQ6IFwiUmFpbHdheS1MaWdodFwiO1xuJHNlY29uZGFyeS1mb250LXJlZ3VsYXI6IFwiUmFpbHdheS1SZWd1bGFyXCI7XG4kc2Vjb25kYXJ5LWZvbnQtYm9sZDogXCJSYWlsd2F5LUJvbGRcIjtcblxuLy8gTWlzY1xuJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogMTJweDtcbiRkZWZhdWx0LWJ1dHRvbi1oaXRib3g6IDAuNXJlbTtcbiRkZWZhdWx0LWJveC1zaGFkb3c6IDAgNHB4IDRweCAwIGhzbGEoMCwgMCwgMCwgMC4yNSk7XG5cbi8vIFRyYW5zaXRpb25zXG4kZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiRkZWZhdWx0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuQGltcG9ydCBcImFic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGdyaWQtYnJlYWtwb2ludCkge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICRncmlkLWJyZWFrcG9pbnQpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkZ3JpZC1icmVha3BvaW50KSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogY2FsYyhtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAkZ3JpZC1icmVha3BvaW50KSAtIDFweCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gd2l0aC10cmFuc2l0aW9uKFxuICAkdHJhbnNpdGlvbi1wcm9wZXJ0eSxcbiAgJHRyYW5zaXRpb24tZHVyYXRpb246ICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJGRlZmF1bHQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cbikge1xuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1wcm9wZXJ0eSAkdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 677:
/*!************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/testimonial/testimonial.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialComponent": () => (/* binding */ TestimonialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TestimonialComponent {
    constructor() { }
    ngOnInit() { }
}
TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) { return new (t || TestimonialComponent)(); };
TestimonialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialComponent, selectors: [["portfolio-testimonial"]], inputs: { testimonial: "testimonial" }, decls: 8, vars: 4, consts: [[1, "testimonial"], ["alt", "", 1, "testimonial__photo", 3, "src"], [1, "section__paragraph", "testimonial__quote"], [1, "testimonial__name"], [1, "subtitle", "testimonial__job-title"]], template: function TestimonialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "blockquote", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.testimonial == null ? null : ctx.testimonial.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testimonial == null ? null : ctx.testimonial.quote, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testimonial == null ? null : ctx.testimonial.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testimonial == null ? null : ctx.testimonial.jobTitle, " ");
    } }, styles: ["@charset \"UTF-8\";\n.testimonial[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.testimonial__photo[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  border-radius: 50%;\n  margin-bottom: 2rem;\n}\n.testimonial__quote[_ngcontent-%COMP%] {\n  quotes: \"\u201E\" \"\u201C\" \"\u201A\" \"\u2018\";\n  margin-bottom: 0.5rem;\n}\n.testimonial__quote[_ngcontent-%COMP%]::before {\n  content: open-quote;\n}\n.testimonial__quote[_ngcontent-%COMP%]::after {\n  content: close-quote;\n}\n.testimonial__name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.testimonial__job-title[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtBQURKO0FBR0k7RUFDRSxtQkFBQTtBQUROO0FBR0k7RUFDRSxvQkFBQTtBQUROO0FBS0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFNRTtFQUNFLGNDZlU7QURXZCIsImZpbGUiOiJ0ZXN0aW1vbmlhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJhYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5cbi50ZXN0aW1vbmlhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJl9fcGhvdG8ge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG5cbiAgJl9fcXVvdGUge1xuICAgIHF1b3RlczogXCLigJ5cIiBcIuKAnFwiIFwi4oCaXCIgXCLigJhcIjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogb3Blbi1xdW90ZTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogY2xvc2UtcXVvdGU7XG4gICAgfVxuICB9XG5cbiAgJl9fbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAmX19qb2ItdGl0bGUge1xuICAgIGNvbG9yOiAkbXV0ZWQtY29sb3I7XG4gIH1cbn1cbiIsIi8vIENvbG9yc1xuJHByaW1hcnktZm9udC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRwcmltYXJ5LWZvbnQtY29sb3ItZGFyazogIzMwMzAzMDtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1saWdodDogI2UyZTJlMjtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1kYXJrOiAjNWM1YzVjO1xuJHByaW1hcnktYWNjZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICBoc2woMjQxLCA3MCwgNjApLFxuICBoc2woMjkyLCA3MCwgNjApXG4pO1xuJHByaW1hcnktYWNjZW50LWNvbG9yLWhvdmVyOiBoc2woMzQ4LCA3OCUsIDQxJSk7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3ItZGlzYWJsZWQtZmlsdGVyOiBzYXR1cmF0ZSgzMCUpIGJyaWdodG5lc3MoMS41KTtcbiRzZWNvbmRhcnktYWNjZW50LWNvbG9yOiAjOTk5N2ZmO1xuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2Y2ZjZmNjtcbiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItZGFyazogIzJhMmEyYTtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjM2EzYTNhO1xuJG92ZXJsYXktY29sb3I6IGhzbGEoMCwgMCwgMCwgMC43KTtcbiRtdXRlZC1jb2xvcjogI2M0YzRjNDtcbiRlcnJvci1jb2xvcjogaHNsKDAsIDc3JSwgNTglKTtcblxuLy8gQm9vdHN0cmFwIGJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHgsXG4pO1xuXG4kY29udGFpbmVyLXdpZHRoczogKFxuICBcInhzXCI6IDEwMCUsXG4gIFwic21cIjogNTQwcHgsXG4gIFwibWRcIjogNzIwcHgsXG4gIFwibGdcIjogOTYwcHgsXG4gIFwieGxcIjogMTE0MHB4LFxuICBcInh4bFwiOiAxMzIwcHgsXG4pO1xuXG4vLyBCb290c3RyYXAgZ3JpZFxuJGNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcteHM6IDAuNzVyZW07XG5cbi8vIEZvbnQtZmFtaWxpZXNcbiRwcmltYXJ5LWZvbnQtbGlnaHQ6IFwiUG9wcGlucy1MaWdodFwiO1xuJHByaW1hcnktZm9udC1yZWd1bGFyOiBcIlBvcHBpbnMtUmVndWxhclwiO1xuJHByaW1hcnktZm9udC1ib2xkOiBcIlBvcHBpbnMtQm9sZFwiO1xuXG4kc2Vjb25kYXJ5LWZvbnQtbGlnaHQ6IFwiUmFpbHdheS1MaWdodFwiO1xuJHNlY29uZGFyeS1mb250LXJlZ3VsYXI6IFwiUmFpbHdheS1SZWd1bGFyXCI7XG4kc2Vjb25kYXJ5LWZvbnQtYm9sZDogXCJSYWlsd2F5LUJvbGRcIjtcblxuLy8gTWlzY1xuJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogMTJweDtcbiRkZWZhdWx0LWJ1dHRvbi1oaXRib3g6IDAuNXJlbTtcbiRkZWZhdWx0LWJveC1zaGFkb3c6IDAgNHB4IDRweCAwIGhzbGEoMCwgMCwgMCwgMC4yNSk7XG5cbi8vIFRyYW5zaXRpb25zXG4kZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiRkZWZhdWx0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiJdfQ== */"] });


/***/ }),

/***/ 2936:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/portfolio/components/testimonials-section/testimonials-section.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialsSectionComponent": () => (/* binding */ TestimonialsSectionComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../section-header/section-header.component */ 3930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../testimonial/testimonial.component */ 677);





const _c0 = ["slideshowContainer"];
function TestimonialsSectionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "portfolio-testimonial", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const testimonial_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("testimonial", testimonial_r5);
} }
function TestimonialsSectionComponent_input_30_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function TestimonialsSectionComponent_input_30_Template_input_change_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const i_r7 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.onChangePaginationButton(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", i_r7 === ctx_r4.activeSlideIndex);
} }
class TestimonialsSectionComponent {
    constructor() {
        this.testimonials = [
            {
                photoUrl: '/assets/images/testimonial-1.jpeg',
                quote: 'Nisi elit consectetur consectetur officia fugiat et dolore ullamco anim qui adipisicing aliquip ea in.',
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
        this.activeSlideIndex = 0;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.initialiseSwiper();
    }
    initialiseSwiper() {
        if (this.slideshowContainer) {
            swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper.use([swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay]);
            this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper(this.slideshowContainer.nativeElement, {
                autoplay: true,
            });
            this.swiper.on('activeIndexChange', this.onActiveIndexChange.bind(this));
        }
    }
    onActiveIndexChange(swiper) {
        this.activeSlideIndex = swiper.activeIndex;
    }
    slideToPreviousSlide() {
        var _a;
        (_a = this.swiper) === null || _a === void 0 ? void 0 : _a.slidePrev();
    }
    slideToNextSlide() {
        var _a;
        (_a = this.swiper) === null || _a === void 0 ? void 0 : _a.slideNext();
    }
    onChangePaginationButton(slideIndex) {
        this.slideToSlide(slideIndex);
    }
    slideToSlide(slideIndex) {
        var _a;
        (_a = this.swiper) === null || _a === void 0 ? void 0 : _a.slideTo(slideIndex);
    }
}
TestimonialsSectionComponent.ɵfac = function TestimonialsSectionComponent_Factory(t) { return new (t || TestimonialsSectionComponent)(); };
TestimonialsSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TestimonialsSectionComponent, selectors: [["portfolio-testimonials-section"]], viewQuery: function TestimonialsSectionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.slideshowContainer = _t.first);
    } }, decls: 31, vars: 4, consts: [[1, "section", "testimonials-section"], [1, "container"], ["title", "Was andere \u00FCber mich sagen", "subtitle", "Empfehlungen"], [1, "swiper"], ["slideshowContainer", ""], [1, "swiper-wrapper", "testimonials-section__testimonials-container"], ["class", "swiper-slide testimonials-section__testimonial-container", 4, "ngFor", "ngForOf"], [1, "testimonials-section__navigation-button", "testimonials-section__navigation-button--left", 3, "disabled", "click"], ["arrowLeftButton", ""], ["width", "24", "height", "25", "viewBox", "0 0 24 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "testimonials-section__arrow-icon"], ["clip-path", "url(#clip0_113_469)"], ["d", "M16.67 0.0263672L19.5 2.85537L10.161 12.0304L19.5 21.1974L16.67 24.0264L4.5 12.0304L16.67 0.0263672Z", "fill", "url(#paint0_linear_113_469)"], ["id", "paint0_linear_113_469", "x1", "4.5", "y1", "12.0264", "x2", "19.5", "y2", "12.0264", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#5653E1"], ["offset", "1", "stop-color", "#CD52E0"], ["id", "clip0_113_469"], ["width", "24", "height", "24", "fill", "white", "transform", "translate(0 0.0263672)"], [1, "testimonials-section__navigation-button", "testimonials-section__navigation-button--right", 3, "disabled", "click"], ["arrowRightButton", ""], ["clip-path", "url(#clip0_113_480)"], ["d", "M5 3.02637L8.057 0.0263672L20 12.0264L8.057 24.0264L5 21.0264L14 12.0264L5 3.02637Z", "fill", "url(#paint0_linear_113_480)"], ["id", "paint0_linear_113_480", "x1", "5", "y1", "12.0264", "x2", "20", "y2", "12.0264", "gradientUnits", "userSpaceOnUse"], ["id", "clip0_113_480"], [1, "testimonials-section__pagination-buttons-container"], ["class", "testimonials-section__pagination-button", "type", "radio", "name", "pagination-button", 3, "checked", "change", 4, "ngFor", "ngForOf"], [1, "swiper-slide", "testimonials-section__testimonial-container"], [3, "testimonial"], ["type", "radio", "name", "pagination-button", 1, "testimonials-section__pagination-button", 3, "checked", "change"]], template: function TestimonialsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "portfolio-section-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TestimonialsSectionComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TestimonialsSectionComponent_Template_button_click_7_listener() { return ctx.slideToPreviousSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "g", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "linearGradient", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "stop", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "stop", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "clipPath", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "rect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TestimonialsSectionComponent_Template_button_click_18_listener() { return ctx.slideToNextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "linearGradient", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "stop", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "stop", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "clipPath", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "rect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, TestimonialsSectionComponent_input_30_Template, 1, 1, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.testimonials);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.activeSlideIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.activeSlideIndex === ctx.testimonials.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.testimonials);
    } }, directives: [_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_1__.SectionHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_2__.TestimonialComponent], styles: [".testimonials-section[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.testimonials-section__testimonials-container[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.testimonials-section__testimonial-container[_ngcontent-%COMP%] {\n  padding: 0 32px;\n}\n.testimonials-section__pagination-buttons-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  grid-gap: 0.75rem;\n  gap: 0.75rem;\n}\n.testimonials-section__pagination-button[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: relative;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid transparent;\n  border-radius: 50%;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  transition: background-color 0.25s ease-in-out;\n}\n.testimonials-section__pagination-button[_ngcontent-%COMP%]:checked {\n  background-color: transparent;\n}\n.testimonials-section__pagination-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  z-index: -1;\n  width: calc(100% + 2px);\n  height: calc(100% + 2px);\n  background-image: linear-gradient(90deg, #5452e0, #cd52e0);\n  border-radius: 50%;\n}\n.testimonials-section__navigation-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  padding: 0.5rem;\n  z-index: 1;\n}\n.testimonials-section__navigation-button[_ngcontent-%COMP%]:disabled {\n  filter: saturate(30%) brightness(1.5);\n}\n.testimonials-section__navigation-button--left[_ngcontent-%COMP%] {\n  left: 0;\n  margin-left: -0.5rem;\n}\n.testimonials-section__navigation-button--right[_ngcontent-%COMP%] {\n  right: 0;\n  margin-right: -0.5rem;\n}\n.testimonials-section__arrow-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFscy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvYWJzdHJhY3RzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHlCQ1MrQjtBRFhqQztBQUlFO0VBQ0UscUJBQUE7QUFGSjtBQUtFO0VBRUUsZUFBQTtBQUpKO0FBT0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUFBLFlBQUE7QUFMSjtBQVFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ1o2QjtFRGE3Qiw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUVURiw4Q0FBQTtBRklGO0FBUUk7RUFDRSw2QkFBQTtBQU5OO0FBU0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMERDdkNpQjtFRHdDakIsa0JBQUE7QUFQTjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQ0NvQjtFREFwQixVQUFBO0FBVEo7QUFXSTtFQUNFLHFDQzlDaUM7QURxQ3ZDO0FBWUk7RUFDRSxPQUFBO0VBQ0Esb0JBQUE7QUFWTjtBQWFJO0VBQ0UsUUFBQTtFQUNBLHFCQUFBO0FBWE47QUFlRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBYkoiLCJmaWxlIjoidGVzdGltb25pYWxzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcImFic3RyYWN0cy9taXhpbnNcIjtcblxuLnRlc3RpbW9uaWFscy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1saWdodDtcblxuICAmX190ZXN0aW1vbmlhbHMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cblxuICAmX190ZXN0aW1vbmlhbC1jb250YWluZXIge1xuICAgIC8vIFNhbWUgcGFkZGluZyBhcyBhcnJvdyB3aWR0aHMgcGx1cyBhZGRpdGlvbmFsIHNwYWNlXG4gICAgcGFkZGluZzogMCBjYWxjKDI0cHggKyA4cHgpO1xuICB9XG5cbiAgJl9fcGFnaW5hdGlvbi1idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cblxuICAmX19wYWdpbmF0aW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgQGluY2x1ZGUgd2l0aC10cmFuc2l0aW9uKGJhY2tncm91bmQtY29sb3IpO1xuXG4gICAgJjpjaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMXB4O1xuICAgICAgbGVmdDogLTFweDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDIgKiAxcHgpO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAyICogMXB4KTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICRwcmltYXJ5LWFjY2VudC1jb2xvcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gIH1cblxuICAmX19uYXZpZ2F0aW9uLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIHBhZGRpbmc6ICRkZWZhdWx0LWJ1dHRvbi1oaXRib3g7XG4gICAgei1pbmRleDogMTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgZmlsdGVyOiAkcHJpbWFyeS1hY2NlbnQtY29sb3ItZGlzYWJsZWQtZmlsdGVyO1xuICAgIH1cblxuICAgICYtLWxlZnQge1xuICAgICAgbGVmdDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJGRlZmF1bHQtYnV0dG9uLWhpdGJveDtcbiAgICB9XG5cbiAgICAmLS1yaWdodCB7XG4gICAgICByaWdodDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogLSRkZWZhdWx0LWJ1dHRvbi1oaXRib3g7XG4gICAgfVxuICB9XG5cbiAgJl9fYXJyb3ctaWNvbiB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG59XG4iLCIvLyBDb2xvcnNcbiRwcmltYXJ5LWZvbnQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XG4kcHJpbWFyeS1mb250LWNvbG9yLWRhcms6ICMzMDMwMzA7XG4kc2Vjb25kYXJ5LWZvbnQtY29sb3ItbGlnaHQ6ICNlMmUyZTI7XG4kc2Vjb25kYXJ5LWZvbnQtY29sb3ItZGFyazogIzVjNWM1YztcbiRwcmltYXJ5LWFjY2VudC1jb2xvcjogbGluZWFyLWdyYWRpZW50KFxuICA5MGRlZyxcbiAgaHNsKDI0MSwgNzAsIDYwKSxcbiAgaHNsKDI5MiwgNzAsIDYwKVxuKTtcbiRwcmltYXJ5LWFjY2VudC1jb2xvci1ob3ZlcjogaHNsKDM0OCwgNzglLCA0MSUpO1xuJHByaW1hcnktYWNjZW50LWNvbG9yLWRpc2FibGVkLWZpbHRlcjogc2F0dXJhdGUoMzAlKSBicmlnaHRuZXNzKDEuNSk7XG4kc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogIzk5OTdmZjtcbiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3ItbGlnaHQ6ICNmNmY2ZjY7XG4kcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICMyYTJhMmE7XG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3ItZGFyazogIzNhM2EzYTtcbiRvdmVybGF5LWNvbG9yOiBoc2xhKDAsIDAsIDAsIDAuNyk7XG4kbXV0ZWQtY29sb3I6ICNjNGM0YzQ7XG4kZXJyb3ItY29sb3I6IGhzbCgwLCA3NyUsIDU4JSk7XG5cbi8vIEJvb3RzdHJhcCBicmVha3BvaW50c1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4LFxuKTtcblxuJGNvbnRhaW5lci13aWR0aHM6IChcbiAgXCJ4c1wiOiAxMDAlLFxuICBcInNtXCI6IDU0MHB4LFxuICBcIm1kXCI6IDcyMHB4LFxuICBcImxnXCI6IDk2MHB4LFxuICBcInhsXCI6IDExNDBweCxcbiAgXCJ4eGxcIjogMTMyMHB4LFxuKTtcblxuLy8gQm9vdHN0cmFwIGdyaWRcbiRjb250YWluZXItaG9yaXpvbnRhbC1wYWRkaW5nLXhzOiAwLjc1cmVtO1xuXG4vLyBGb250LWZhbWlsaWVzXG4kcHJpbWFyeS1mb250LWxpZ2h0OiBcIlBvcHBpbnMtTGlnaHRcIjtcbiRwcmltYXJ5LWZvbnQtcmVndWxhcjogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiRwcmltYXJ5LWZvbnQtYm9sZDogXCJQb3BwaW5zLUJvbGRcIjtcblxuJHNlY29uZGFyeS1mb250LWxpZ2h0OiBcIlJhaWx3YXktTGlnaHRcIjtcbiRzZWNvbmRhcnktZm9udC1yZWd1bGFyOiBcIlJhaWx3YXktUmVndWxhclwiO1xuJHNlY29uZGFyeS1mb250LWJvbGQ6IFwiUmFpbHdheS1Cb2xkXCI7XG5cbi8vIE1pc2NcbiRkZWZhdWx0LWJvcmRlci1yYWRpdXM6IDEycHg7XG4kZGVmYXVsdC1idXR0b24taGl0Ym94OiAwLjVyZW07XG4kZGVmYXVsdC1ib3gtc2hhZG93OiAwIDRweCA0cHggMCBoc2xhKDAsIDAsIDAsIDAuMjUpO1xuXG4vLyBUcmFuc2l0aW9uc1xuJGRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG4kZGVmYXVsdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4iLCJAdXNlIFwic2FzczptYXBcIjtcbkBpbXBvcnQgXCJhYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRncmlkLWJyZWFrcG9pbnQpIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAkZ3JpZC1icmVha3BvaW50KSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJGdyaWQtYnJlYWtwb2ludCkge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGNhbGMobWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJGdyaWQtYnJlYWtwb2ludCkgLSAxcHgpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHdpdGgtdHJhbnNpdGlvbihcbiAgJHRyYW5zaXRpb24tcHJvcGVydHksXG4gICR0cmFuc2l0aW9uLWR1cmF0aW9uOiAkZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRkZWZhdWx0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXG4pIHtcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tcHJvcGVydHkgJHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb247XG59XG4iXX0= */"] });


/***/ }),

/***/ 1989:
/*!****************************************************************!*\
  !*** ./src/app/features/portfolio/enums/service-title.enum.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceTitle": () => (/* binding */ ServiceTitle)
/* harmony export */ });
var ServiceTitle;
(function (ServiceTitle) {
    ServiceTitle["PHOTOGRAPHY_AND_VIDEOGRAPHY"] = "Fotografie & Videografie";
    ServiceTitle["SOCIAL_MEDIA_MANAGEMENT"] = "Social Media Management";
    ServiceTitle["COOPERATIONS"] = "Kooperationen";
})(ServiceTitle || (ServiceTitle = {}));


/***/ }),

/***/ 8514:
/*!*****************************************************************!*\
  !*** ./src/app/features/portfolio/pages/home/home.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _shared_enums_header_background_color_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/header-background-color.enum */ 8271);
/* harmony import */ var _shared_enums_section_id_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/enums/section-id.enum */ 4087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/header/header.component */ 6290);
/* harmony import */ var _components_hero_section_hero_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hero-section/hero-section.component */ 2006);
/* harmony import */ var _components_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/about-section/about-section.component */ 5181);
/* harmony import */ var _components_services_section_services_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/services-section/services-section.component */ 6803);
/* harmony import */ var _components_projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/projects-section/projects-section.component */ 6525);
/* harmony import */ var _components_clients_section_clients_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/clients-section/clients-section.component */ 4171);
/* harmony import */ var _components_testimonials_section_testimonials_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/testimonials-section/testimonials-section.component */ 2936);
/* harmony import */ var _components_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/contact-section/contact-section.component */ 1286);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/footer/footer.component */ 5070);












class HomeComponent {
    constructor() {
        this.SectionId = _shared_enums_section_id_enum__WEBPACK_IMPORTED_MODULE_1__.SectionId;
        this.sections = [
            {
                id: _shared_enums_section_id_enum__WEBPACK_IMPORTED_MODULE_1__.SectionId.HOME,
                isIntersecting: undefined,
            },
            {
                id: _shared_enums_section_id_enum__WEBPACK_IMPORTED_MODULE_1__.SectionId.ABOUT,
                isIntersecting: undefined,
            },
            {
                id: _shared_enums_section_id_enum__WEBPACK_IMPORTED_MODULE_1__.SectionId.SERVICES,
                isIntersecting: undefined,
            },
            {
                id: _shared_enums_section_id_enum__WEBPACK_IMPORTED_MODULE_1__.SectionId.PROJECTS,
                isIntersecting: undefined,
            },
            {
                id: _shared_enums_section_id_enum__WEBPACK_IMPORTED_MODULE_1__.SectionId.CLIENTS,
                isIntersecting: undefined,
            },
            {
                id: _shared_enums_section_id_enum__WEBPACK_IMPORTED_MODULE_1__.SectionId.TESTIMONIALS,
                isIntersecting: undefined,
            },
            {
                id: _shared_enums_section_id_enum__WEBPACK_IMPORTED_MODULE_1__.SectionId.CONTACT,
                isIntersecting: undefined,
            },
        ];
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.initialiseIntersectionObserver();
    }
    initialiseIntersectionObserver() {
        const intersectionObserver = this.createIntersectionObserver();
        document.querySelectorAll('.anchor-element').forEach((element) => {
            intersectionObserver.observe(element);
        });
    }
    createIntersectionObserver() {
        const intersectionObserverOptions = {
            rootMargin: '-64px 0px 0px 0px',
            threshold: 0,
        };
        const intersectionObserver = new IntersectionObserver(this.intersectionObserverCallback.bind(this), intersectionObserverOptions);
        return intersectionObserver;
    }
    intersectionObserverCallback(entries) {
        entries.forEach((entry) => {
            const section = this.sections.find((section) => section.id === entry.target.id);
            if (!section)
                return;
            section.isIntersecting = entry.isIntersecting;
            if (this.isEverySectionInitialised()) {
                const activeSection = this.findActiveSection();
                if ((activeSection === null || activeSection === void 0 ? void 0 : activeSection.id) !== this.activeSectionId)
                    this.activeSectionId = activeSection === null || activeSection === void 0 ? void 0 : activeSection.id;
            }
        });
    }
    isEverySectionInitialised() {
        return (this.sections.filter((section) => section.isIntersecting !== undefined)
            .length === this.sections.length);
    }
    findActiveSection() {
        return this.sections.find((section) => section.isIntersecting);
    }
    onChangeHeroTitleIntersection(isIntersecting) {
        this.headerBackgroundColor = isIntersecting
            ? _shared_enums_header_background_color_enum__WEBPACK_IMPORTED_MODULE_0__.HeaderBackgroundColor.TRANSPARENT
            : _shared_enums_header_background_color_enum__WEBPACK_IMPORTED_MODULE_0__.HeaderBackgroundColor.WHITE;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 9, consts: [[3, "backgroundColor", "activeSectionId"], [1, "anchor-element", 3, "id", "changeHeroTitleIntersection"], [1, "anchor-element", 3, "id"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "shared-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "portfolio-hero-section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("changeHeroTitleIntersection", function HomeComponent_Template_portfolio_hero_section_changeHeroTitleIntersection_1_listener($event) { return ctx.onChangeHeroTitleIntersection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "portfolio-about-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "portfolio-services-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "portfolio-projects-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "portfolio-clients-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "portfolio-testimonials-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "portfolio-contact-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "shared-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("backgroundColor", ctx.headerBackgroundColor)("activeSectionId", ctx.activeSectionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.SectionId.HOME);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.SectionId.ABOUT);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.SectionId.SERVICES);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.SectionId.PROJECTS);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.SectionId.CLIENTS);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.SectionId.TESTIMONIALS);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.SectionId.CONTACT);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_hero_section_hero_section_component__WEBPACK_IMPORTED_MODULE_3__.HeroSectionComponent, _components_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_4__.AboutSectionComponent, _components_services_section_services_section_component__WEBPACK_IMPORTED_MODULE_5__.ServicesSectionComponent, _components_projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsSectionComponent, _components_clients_section_clients_section_component__WEBPACK_IMPORTED_MODULE_7__.ClientsSectionComponent, _components_testimonials_section_testimonials_section_component__WEBPACK_IMPORTED_MODULE_8__.TestimonialsSectionComponent, _components_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_9__.ContactSectionComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent], styles: [".anchor-element[_ngcontent-%COMP%] {\n  scroll-margin-top: 60px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSx1QkFBQTtFQUdBLGNBQUE7QUFIRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuY2hvci1lbGVtZW50IHtcbiAgLy8gRm9yIGNvcnJlY3QgYWN0aXZlIHNlY3Rpb24gcmVjb2duaXRpb24gdGhlIHNjcm9sbC1tYXJnaW4tdG9wIGlzIGxlc3MgdGhhbiB0aGUgYWN0dWFsIG1hcmdpbi10b3Agb2YgYWxsIGludGVyc2VjdGlvbi1vYnNlcnZlcnMuXG4gIC8vIEJ5IHRoYXQgdGhlcmUgaXMgYSBsaXR0bGUgYnVmZmVyIGZvciBpbmNvcnJlY3Qgc2Nyb2xsLXJlc3RvcmF0aW9uIGV0Yy5cbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDYwcHg7XG4gIC8vIHNjcm9sbC1tYXJnaW4tdG9wIGdldHMgaWdub3JlZCBieSBTYWZhcmkgd2l0aG91dCB0aGUgYW5jaG9yIGVsZW1lbnQgYmVpbmdcbiAgLy8gZGlzcGxheTogYmxvY2suXG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"] });


/***/ }),

/***/ 1780:
/*!*************************************************************************************!*\
  !*** ./src/app/features/portfolio/pages/project-detail/project-detail.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailComponent": () => (/* binding */ ProjectDetailComponent)
/* harmony export */ });
/* harmony import */ var _features_portfolio_components_projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/portfolio/components/projects-section/projects-section.component */ 6525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/footer/footer.component */ 5070);
/* harmony import */ var _components_project_detail_slideshow_project_detail_slideshow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/project-detail-slideshow/project-detail-slideshow.component */ 4534);
/* harmony import */ var _shared_components_social_media_channels_social_media_channels_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/social-media-channels/social-media-channels.component */ 4267);








function ProjectDetailComponent_section_0_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "g", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "clipPath", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "rect", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Zur Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r1.project.websiteUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailComponent_section_0_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](service_r3);
} }
function ProjectDetailComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectDetailComponent_section_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.navigateBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Projekte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "portfolio-project-detail-slideshow", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ProjectDetailComponent_section_0_a_14_Template, 9, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Kan\u00E4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "shared-social-media-channels", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Leistungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ProjectDetailComponent_section_0_li_24_Template, 2, 1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" / ", ctx_r0.project.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("imageUrls", ctx_r0.project.slideshowImageUrls);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.project.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.project.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.project.websiteUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("instagramUrl", ctx_r0.project.instagramUrl)("linkedInUrl", ctx_r0.project.linkedInUrl)("tikTokUrl", ctx_r0.project.tikTokUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.project.services);
} }
class ProjectDetailComponent {
    constructor(route, router, location, title) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.title = title;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id === null) {
            this.router.navigateByUrl('/');
            return;
        }
        this.project = _features_portfolio_components_projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_0__.projects.find((project) => project.id === id);
        if (this.project === undefined) {
            this.router.navigateByUrl('/');
            return;
        }
        this.title.setTitle(`${this.project.title} - Tomke Nils`);
    }
    navigateBack() {
        this.location.back();
    }
}
ProjectDetailComponent.ɵfac = function ProjectDetailComponent_Factory(t) { return new (t || ProjectDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title)); };
ProjectDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProjectDetailComponent, selectors: [["portfolio-project-detail"]], decls: 2, vars: 1, consts: [["class", "project-detail", 4, "ngIf"], [1, "project-detail"], [1, "container"], [1, "subtitle", "project-detail__breadcrumbs"], [1, "subtitle", "project-detail__back-button", 3, "click"], [1, "project-detail__slideshow-container"], [3, "imageUrls"], [1, "project-detail__text-information-container"], [1, "project-detail__text-information-block"], [1, "project-detail__title"], [1, "section__paragraph", "project-detail__paragraph"], ["class", "button", 3, "href", 4, "ngIf"], [1, "additional-information-block"], [3, "instagramUrl", "linkedInUrl", "tikTokUrl"], [1, "additional-information-block__list"], [4, "ngFor", "ngForOf"], [1, "button", 3, "href"], ["width", "24", "height", "25", "viewBox", "0 0 24 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_119_1288)"], ["d", "M6.18798 9.45703C6.62698 9.01803 7.11398 8.65602 7.63198 8.37003C10.519 6.77903 14.221 7.62503 16.077 10.439L13.831 12.684C13.187 11.215 11.588 10.379 9.99698 10.735C9.39798 10.869 8.82898 11.168 8.36398 11.633L4.05998 15.939C2.75298 17.246 2.75298 19.372 4.05998 20.679C5.36698 21.986 7.49298 21.986 8.79998 20.679L10.127 19.352C11.334 19.831 12.628 20.022 13.906 19.927L10.977 22.856C8.46598 25.367 4.39498 25.367 1.88398 22.856C-0.627017 20.345 -0.627017 16.274 1.88398 13.763L6.18798 9.45703ZM13.024 2.62103L10.095 5.55002C11.372 5.45402 12.667 5.64603 13.874 6.12403L15.2 4.79803C16.507 3.49102 18.633 3.49102 19.94 4.79803C21.247 6.10503 21.247 8.23103 19.94 9.53803L15.635 13.843C14.324 15.154 12.195 15.143 10.895 13.843C10.592 13.54 10.331 13.163 10.168 12.792L7.92198 15.037C8.15798 15.395 8.40298 15.704 8.71798 16.019C9.52998 16.831 10.564 17.436 11.754 17.723C13.296 18.094 14.948 17.889 16.367 17.106C16.885 16.82 17.372 16.458 17.811 16.019L22.115 11.714C24.627 9.20303 24.627 5.13203 22.116 2.62103C19.605 0.111025 15.535 0.111025 13.024 2.62103Z", "fill", "white"], ["id", "clip0_119_1288"], ["width", "24", "height", "24", "fill", "white", "transform", "translate(0 0.738037)"], [1, "button__label"]], template: function ProjectDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ProjectDetailComponent_section_0_Template, 25, 9, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "shared-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_project_detail_slideshow_project_detail_slideshow_component__WEBPACK_IMPORTED_MODULE_2__.ProjectDetailSlideshowComponent, _shared_components_social_media_channels_social_media_channels_component__WEBPACK_IMPORTED_MODULE_3__.SocialMediaChannelsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: [".project-detail[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n}\n.project-detail__breadcrumbs[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #5452e0, #cd52e0);\n  color: transparent;\n  -webkit-background-clip: text;\n          background-clip: text;\n  font-family: \"Poppins-Bold\";\n  margin-bottom: 1rem;\n}\n.project-detail__back-button[_ngcontent-%COMP%] {\n  background-image: inherit;\n  color: inherit;\n  background-clip: inherit;\n  font-family: inherit;\n}\n.project-detail__slideshow-container[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.project-detail__text-information-container[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n  display: flex;\n  flex-direction: column;\n  grid-gap: 4rem;\n  gap: 4rem;\n}\n.project-detail__text-information-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.project-detail__text-information-block[_ngcontent-%COMP%]:last-child {\n  grid-gap: 2rem;\n  gap: 2rem;\n}\n.project-detail__title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.project-detail__paragraph[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.additional-information-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n  align-items: center;\n}\n.additional-information-block__list[_ngcontent-%COMP%] {\n  list-style-position: inside;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtBQURGO0FBR0U7RUFDRSwwRENEbUI7RURFbkIsa0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsMkJDcUNnQjtFRHBDaEIsbUJBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQUZKO0FBS0U7RUFDRSxtQkFBQTtBQUhKO0FBTUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFPSTtFQUNFLGNBQUE7RUFBQSxTQUFBO0FBTE47QUFTRTtFQUNFLGtCQUFBO0FBUEo7QUFVRTtFQUNFLG1CQUFBO0FBUko7QUFZQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtFQUNBLG1CQUFBO0FBVEY7QUFXRTtFQUNFLDJCQUFBO0FBVEoiLCJmaWxlIjoicHJvamVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuXG4ucHJvamVjdC1kZXRhaWwge1xuICBwYWRkaW5nLXRvcDogMnJlbTtcblxuICAmX19icmVhZGNydW1icyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogJHByaW1hcnktYWNjZW50LWNvbG9yO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQtYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgJl9fYmFjay1idXR0b24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICB9XG5cbiAgJl9fc2xpZGVzaG93LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxuXG4gICZfX3RleHQtaW5mb3JtYXRpb24tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRyZW07XG4gIH1cblxuICAmX190ZXh0LWluZm9ybWF0aW9uLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBnYXA6IDJyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX3BhcmFncmFwaCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuXG4uYWRkaXRpb25hbC1pbmZvcm1hdGlvbi1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICZfX2xpc3Qge1xuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbiAgfVxufVxuIiwiLy8gQ29sb3JzXG4kcHJpbWFyeS1mb250LWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xuJHByaW1hcnktZm9udC1jb2xvci1kYXJrOiAjMzAzMDMwO1xuJHNlY29uZGFyeS1mb250LWNvbG9yLWxpZ2h0OiAjZTJlMmUyO1xuJHNlY29uZGFyeS1mb250LWNvbG9yLWRhcms6ICM1YzVjNWM7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIGhzbCgyNDEsIDcwLCA2MCksXG4gIGhzbCgyOTIsIDcwLCA2MClcbik7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3ItaG92ZXI6IGhzbCgzNDgsIDc4JSwgNDElKTtcbiRwcmltYXJ5LWFjY2VudC1jb2xvci1kaXNhYmxlZC1maWx0ZXI6IHNhdHVyYXRlKDMwJSkgYnJpZ2h0bmVzcygxLjUpO1xuJHNlY29uZGFyeS1hY2NlbnQtY29sb3I6ICM5OTk3ZmY7XG4kcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0OiAjZjZmNmY2O1xuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjMmEyYTJhO1xuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICMzYTNhM2E7XG4kb3ZlcmxheS1jb2xvcjogaHNsYSgwLCAwLCAwLCAwLjcpO1xuJG11dGVkLWNvbG9yOiAjYzRjNGM0O1xuJGVycm9yLWNvbG9yOiBoc2woMCwgNzclLCA1OCUpO1xuXG4vLyBCb290c3RyYXAgYnJlYWtwb2ludHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweCxcbik7XG5cbiRjb250YWluZXItd2lkdGhzOiAoXG4gIFwieHNcIjogMTAwJSxcbiAgXCJzbVwiOiA1NDBweCxcbiAgXCJtZFwiOiA3MjBweCxcbiAgXCJsZ1wiOiA5NjBweCxcbiAgXCJ4bFwiOiAxMTQwcHgsXG4gIFwieHhsXCI6IDEzMjBweCxcbik7XG5cbi8vIEJvb3RzdHJhcCBncmlkXG4kY29udGFpbmVyLWhvcml6b250YWwtcGFkZGluZy14czogMC43NXJlbTtcblxuLy8gRm9udC1mYW1pbGllc1xuJHByaW1hcnktZm9udC1saWdodDogXCJQb3BwaW5zLUxpZ2h0XCI7XG4kcHJpbWFyeS1mb250LXJlZ3VsYXI6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4kcHJpbWFyeS1mb250LWJvbGQ6IFwiUG9wcGlucy1Cb2xkXCI7XG5cbiRzZWNvbmRhcnktZm9udC1saWdodDogXCJSYWlsd2F5LUxpZ2h0XCI7XG4kc2Vjb25kYXJ5LWZvbnQtcmVndWxhcjogXCJSYWlsd2F5LVJlZ3VsYXJcIjtcbiRzZWNvbmRhcnktZm9udC1ib2xkOiBcIlJhaWx3YXktQm9sZFwiO1xuXG4vLyBNaXNjXG4kZGVmYXVsdC1ib3JkZXItcmFkaXVzOiAxMnB4O1xuJGRlZmF1bHQtYnV0dG9uLWhpdGJveDogMC41cmVtO1xuJGRlZmF1bHQtYm94LXNoYWRvdzogMCA0cHggNHB4IDAgaHNsYSgwLCAwLCAwLCAwLjI1KTtcblxuLy8gVHJhbnNpdGlvbnNcbiRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuJGRlZmF1bHQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuIl19 */"] });


/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./src/app/features/portfolio/portfolio-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioRoutingModule": () => (/* binding */ PortfolioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 8514);
/* harmony import */ var _pages_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/project-detail/project-detail.component */ 1780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
    },
    {
        path: 'projects/:id',
        component: _pages_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_1__.ProjectDetailComponent,
    },
];
class PortfolioRoutingModule {
}
PortfolioRoutingModule.ɵfac = function PortfolioRoutingModule_Factory(t) { return new (t || PortfolioRoutingModule)(); };
PortfolioRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PortfolioRoutingModule });
PortfolioRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PortfolioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5969:
/*!********************************************************!*\
  !*** ./src/app/features/portfolio/portfolio.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioModule": () => (/* binding */ PortfolioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio-routing.module */ 10);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ 8514);
/* harmony import */ var _components_hero_section_hero_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hero-section/hero-section.component */ 2006);
/* harmony import */ var _components_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about-section/about-section.component */ 5181);
/* harmony import */ var _components_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/section-header/section-header.component */ 3930);
/* harmony import */ var _components_services_section_services_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/services-section/services-section.component */ 6803);
/* harmony import */ var _components_service_card_service_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/service-card/service-card.component */ 1945);
/* harmony import */ var _components_projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects-section/projects-section.component */ 6525);
/* harmony import */ var _components_project_gallery_project_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/project-gallery/project-gallery.component */ 5700);
/* harmony import */ var _components_project_gallery_item_project_gallery_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project-gallery-item/project-gallery-item.component */ 6251);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _components_clients_section_clients_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/clients-section/clients-section.component */ 4171);
/* harmony import */ var _components_testimonials_section_testimonials_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/testimonials-section/testimonials-section.component */ 2936);
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/testimonial/testimonial.component */ 677);
/* harmony import */ var _components_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/contact-section/contact-section.component */ 1286);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _pages_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/project-detail/project-detail.component */ 1780);
/* harmony import */ var _components_project_detail_slideshow_project_detail_slideshow_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/project-detail-slideshow/project-detail-slideshow.component */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);




















class PortfolioModule {
}
PortfolioModule.ɵfac = function PortfolioModule_Factory(t) { return new (t || PortfolioModule)(); };
PortfolioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: PortfolioModule });
PortfolioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__.PortfolioRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](PortfolioModule, { declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        _components_hero_section_hero_section_component__WEBPACK_IMPORTED_MODULE_2__.HeroSectionComponent,
        _components_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_3__.AboutSectionComponent,
        _components_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_4__.SectionHeaderComponent,
        _components_services_section_services_section_component__WEBPACK_IMPORTED_MODULE_5__.ServicesSectionComponent,
        _components_service_card_service_card_component__WEBPACK_IMPORTED_MODULE_6__.ServiceCardComponent,
        _components_projects_section_projects_section_component__WEBPACK_IMPORTED_MODULE_7__.ProjectsSectionComponent,
        _components_project_gallery_project_gallery_component__WEBPACK_IMPORTED_MODULE_8__.ProjectGalleryComponent,
        _components_project_gallery_item_project_gallery_item_component__WEBPACK_IMPORTED_MODULE_9__.ProjectGalleryItemComponent,
        _components_clients_section_clients_section_component__WEBPACK_IMPORTED_MODULE_11__.ClientsSectionComponent,
        _components_testimonials_section_testimonials_section_component__WEBPACK_IMPORTED_MODULE_12__.TestimonialsSectionComponent,
        _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_13__.TestimonialComponent,
        _components_contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_14__.ContactSectionComponent,
        _pages_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_15__.ProjectDetailComponent,
        _components_project_detail_slideshow_project_detail_slideshow_component__WEBPACK_IMPORTED_MODULE_16__.ProjectDetailSlideshowComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__.PortfolioRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule] }); })();


/***/ }),

/***/ 5070:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _social_media_channels_social_media_channels_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../social-media-channels/social-media-channels.component */ 4267);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["shared-footer"]], decls: 22, vars: 0, consts: [[1, "section", "footer"], [1, "container", "footer__container"], ["href", "/", 1, "footer__impressum-link"], [1, "footer__icons-container"], ["href", "/"], ["width", "39", "height", "39", "viewBox", "0 0 39 39", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_113_1113)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.32598 30.6685L0.499973 8.36729L18.152 8.36729L9.32598 30.6685Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M29.674 30.6859L38.5 8.38477H20.848L12.022 30.6859H29.674Z", "fill", "white"], ["id", "clip0_113_1113"], ["width", "38", "height", "38", "fill", "white", "transform", "translate(0.5 0.526367)"], ["instagramUrl", "/", "linkedInUrl", "/", "tikTokUrl", "/"], [1, "footer__contact-information"], [1, "footer__author-note"], ["href", "https://jonas-wolfram.de", "target", "_blank", 1, "footer__jonas-wolfram-link"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Impressum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "clipPath", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "shared-social-media-channels", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " +49 12345678 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " kontak@tomke-nils.de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Designt und entwickelt von ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Jonas Wolfram ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_social_media_channels_social_media_channels_component__WEBPACK_IMPORTED_MODULE_0__.SocialMediaChannelsComponent], styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #2a2a2a;\n  position: relative;\n}\n.footer__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 4rem;\n  gap: 4rem;\n}\n.footer__impressum-link[_ngcontent-%COMP%] {\n  color: #e2e2e2;\n}\n.footer__icons-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n.footer__contact-information[_ngcontent-%COMP%] {\n  color: #e2e2e2;\n  text-align: center;\n}\n.footer__author-note[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.75rem;\n  left: 50%;\n  transform: translate(-50%, 0);\n  color: #e2e2e2;\n  text-align: center;\n}\n.footer__jonas-wolfram-link[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #5452e0, #cd52e0);\n  -webkit-background-clip: text;\n          background-clip: text;\n  color: transparent;\n  font-family: \"Railway-Bold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJDWThCO0VEWDlCLGtCQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFESjtBQUlFO0VBQ0UsY0NYeUI7QURTN0I7QUFLRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFISjtBQU1FO0VBQ0UsY0N0QnlCO0VEdUJ6QixrQkFBQTtBQUpKO0FBT0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQy9CeUI7RURnQ3pCLGtCQUFBO0FBTEo7QUFRRTtFQUNFLDBEQ2xDbUI7RURtQ25CLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQ1FrQjtBRGR0QiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1kYXJrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJl9fY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRyZW07XG4gIH1cblxuICAmX19pbXByZXNzdW0tbGluayB7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktZm9udC1jb2xvci1saWdodDtcbiAgfVxuXG4gICZfX2ljb25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG5cbiAgJl9fY29udGFjdC1pbmZvcm1hdGlvbiB7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktZm9udC1jb2xvci1saWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmX19hdXRob3Itbm90ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMC43NXJlbTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktZm9udC1jb2xvci1saWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmX19qb25hcy13b2xmcmFtLWxpbmsge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRwcmltYXJ5LWFjY2VudC1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQtYm9sZDtcbiAgfVxufVxuIiwiLy8gQ29sb3JzXG4kcHJpbWFyeS1mb250LWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xuJHByaW1hcnktZm9udC1jb2xvci1kYXJrOiAjMzAzMDMwO1xuJHNlY29uZGFyeS1mb250LWNvbG9yLWxpZ2h0OiAjZTJlMmUyO1xuJHNlY29uZGFyeS1mb250LWNvbG9yLWRhcms6ICM1YzVjNWM7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3I6IGxpbmVhci1ncmFkaWVudChcbiAgOTBkZWcsXG4gIGhzbCgyNDEsIDcwLCA2MCksXG4gIGhzbCgyOTIsIDcwLCA2MClcbik7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3ItaG92ZXI6IGhzbCgzNDgsIDc4JSwgNDElKTtcbiRwcmltYXJ5LWFjY2VudC1jb2xvci1kaXNhYmxlZC1maWx0ZXI6IHNhdHVyYXRlKDMwJSkgYnJpZ2h0bmVzcygxLjUpO1xuJHNlY29uZGFyeS1hY2NlbnQtY29sb3I6ICM5OTk3ZmY7XG4kcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0OiAjZjZmNmY2O1xuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjMmEyYTJhO1xuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICMzYTNhM2E7XG4kb3ZlcmxheS1jb2xvcjogaHNsYSgwLCAwLCAwLCAwLjcpO1xuJG11dGVkLWNvbG9yOiAjYzRjNGM0O1xuJGVycm9yLWNvbG9yOiBoc2woMCwgNzclLCA1OCUpO1xuXG4vLyBCb290c3RyYXAgYnJlYWtwb2ludHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweCxcbik7XG5cbiRjb250YWluZXItd2lkdGhzOiAoXG4gIFwieHNcIjogMTAwJSxcbiAgXCJzbVwiOiA1NDBweCxcbiAgXCJtZFwiOiA3MjBweCxcbiAgXCJsZ1wiOiA5NjBweCxcbiAgXCJ4bFwiOiAxMTQwcHgsXG4gIFwieHhsXCI6IDEzMjBweCxcbik7XG5cbi8vIEJvb3RzdHJhcCBncmlkXG4kY29udGFpbmVyLWhvcml6b250YWwtcGFkZGluZy14czogMC43NXJlbTtcblxuLy8gRm9udC1mYW1pbGllc1xuJHByaW1hcnktZm9udC1saWdodDogXCJQb3BwaW5zLUxpZ2h0XCI7XG4kcHJpbWFyeS1mb250LXJlZ3VsYXI6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4kcHJpbWFyeS1mb250LWJvbGQ6IFwiUG9wcGlucy1Cb2xkXCI7XG5cbiRzZWNvbmRhcnktZm9udC1saWdodDogXCJSYWlsd2F5LUxpZ2h0XCI7XG4kc2Vjb25kYXJ5LWZvbnQtcmVndWxhcjogXCJSYWlsd2F5LVJlZ3VsYXJcIjtcbiRzZWNvbmRhcnktZm9udC1ib2xkOiBcIlJhaWx3YXktQm9sZFwiO1xuXG4vLyBNaXNjXG4kZGVmYXVsdC1ib3JkZXItcmFkaXVzOiAxMnB4O1xuJGRlZmF1bHQtYnV0dG9uLWhpdGJveDogMC41cmVtO1xuJGRlZmF1bHQtYm94LXNoYWRvdzogMCA0cHggNHB4IDAgaHNsYSgwLCAwLCAwLCAwLjI1KTtcblxuLy8gVHJhbnNpdGlvbnNcbiRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuJGRlZmF1bHQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuIl19 */"] });


/***/ }),

/***/ 6290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _shared_enums_header_background_color_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/enums/header-background-color.enum */ 8271);
/* harmony import */ var _shared_enums_section_id_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/enums/section-id.enum */ 4087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





const _c0 = function (a0) { return { "header__navigation--expanded": a0 }; };
const _c1 = function (a0) { return { "header__navigation-link--active": a0 }; };
function HeaderComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "g", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "clipPath", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "rect", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.toggleNavigationMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nav", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u00DCber mich");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Leistungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Projekte");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Kontakt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "header--" + ctx_r0.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "header__top-row-container--" + ctx_r0.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "header__icon-vector--" + ctx_r0.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "header__icon-vector--" + ctx_r0.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "header__icon-vector--" + ctx_r0.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "header__icon-vector--" + ctx_r0.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c0, ctx_r0.shouldShowNavigationMenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("header__navigation-link header__navigation-link--" + ctx_r0.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](29, _c1, ctx_r0.activeSectionId === ctx_r0.SectionId.HOME))("fragment", ctx_r0.SectionId.HOME);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("header__navigation-link header__navigation-link--" + ctx_r0.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](31, _c1, ctx_r0.activeSectionId === ctx_r0.SectionId.ABOUT))("fragment", ctx_r0.SectionId.ABOUT);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("header__navigation-link header__navigation-link--" + ctx_r0.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](33, _c1, ctx_r0.activeSectionId === ctx_r0.SectionId.SERVICES))("fragment", ctx_r0.SectionId.SERVICES);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("header__navigation-link header__navigation-link--" + ctx_r0.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](35, _c1, ctx_r0.activeSectionId === ctx_r0.SectionId.PROJECTS || ctx_r0.activeSectionId === ctx_r0.SectionId.CLIENTS || ctx_r0.activeSectionId === ctx_r0.SectionId.TESTIMONIALS || ctx_r0.activeSectionId === ctx_r0.SectionId.NEWS))("fragment", ctx_r0.SectionId.PROJECTS);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("header__navigation-link header__navigation-link--" + ctx_r0.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](37, _c1, ctx_r0.activeSectionId === ctx_r0.SectionId.CONTACT))("fragment", ctx_r0.SectionId.CONTACT);
} }
class HeaderComponent {
    constructor() {
        this.SectionId = _shared_enums_section_id_enum__WEBPACK_IMPORTED_MODULE_1__.SectionId;
        this.HeaderBackgroundColor = _shared_enums_header_background_color_enum__WEBPACK_IMPORTED_MODULE_0__.HeaderBackgroundColor;
        this.shouldShowNavigationMenu = false;
    }
    ngOnInit() { }
    toggleNavigationMenu() {
        this.shouldShowNavigationMenu = !this.shouldShowNavigationMenu;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["shared-header"]], inputs: { backgroundColor: "backgroundColor", activeSectionId: "activeSectionId" }, decls: 1, vars: 1, consts: [["class", "header", 3, "ngClass", 4, "ngIf"], [1, "header", 3, "ngClass"], [1, "container", "container--tablet", "header__inner-container"], [1, "header__top-row-container", 3, "ngClass"], [1, "container", "container--mobile", "header__top-row"], ["href", "/"], ["width", "39", "height", "39", "viewBox", "0 0 39 39", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "header__portfolio-icon"], ["clip-path", "url(#clip0_113_1113)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.32598 30.6685L0.499973 8.36729L18.152 8.36729L9.32598 30.6685Z", "fill", "white", 1, "header__icon-vector", 3, "ngClass"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M29.674 30.6859L38.5 8.38477H20.848L12.022 30.6859H29.674Z", "fill", "white", 1, "header__icon-vector", 3, "ngClass"], ["id", "clip0_113_1113"], ["width", "38", "height", "38", "fill", "white", "transform", "translate(0.5 0.526367)", 1, "header__icon-vector", 3, "ngClass"], [1, "header__burger-menu-button", 3, "click"], ["width", "24", "height", "20", "viewBox", "0 0 24 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "header__burger-menu-icon"], ["d", "M24 2C24 3.10457 23.1046 4 22 4H2C0.89543 4 0 3.10457 0 2V2C0 0.895431 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V2ZM24 10C24 8.89543 23.1046 8 22 8H2C0.89543 8 0 8.89543 0 10V10C0 11.1046 0.895431 12 2 12H22C23.1046 12 24 11.1046 24 10V10ZM24 18C24 16.8954 23.1046 16 22 16H2C0.89543 16 0 16.8954 0 18V18C0 19.1046 0.895431 20 2 20H22C23.1046 20 24 19.1046 24 18V18Z", "fill", "white", 1, "header__icon-vector", 3, "ngClass"], [1, "header__navigation", 3, "ngClass"], [1, "container", "container--mobile", "header__navigation-list-container"], [1, "header__navigation-list"], ["routerLink", "/", 3, "ngClass", "fragment"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HeaderComponent_header_0_Template, 33, 39, "header", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.backgroundColor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  transition: all 0.25s ease-in-out;\n}\n.header--white[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 4px 0 rgba(179, 179, 179, 0.25);\n  border-bottom: 1px solid #ffffff;\n}\n.header--transparent[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border-bottom: 1px solid #a3a3a3;\n}\n.header__inner-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.header__top-row-container[_ngcontent-%COMP%] {\n  height: 63px;\n  transition: background-color 0.25s ease-in-out;\n}\n.header__top-row-container--white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.header__top-row-container--transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.header__top-row[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header__portfolio-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.header__icon-vector[_ngcontent-%COMP%] {\n  transition: fill 0.25s ease-in-out;\n}\n.header__icon-vector--white[_ngcontent-%COMP%] {\n  fill: #5c5c5c;\n}\n.header__icon-vector--transparent[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.header__burger-menu-button[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.header__burger-menu-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.header__navigation[_ngcontent-%COMP%] {\n  height: 0px;\n  background-color: #ffffff;\n  overflow: hidden;\n  transition: height 0.25s ease-in-out;\n}\n.header__navigation--expanded[_ngcontent-%COMP%] {\n  height: 16rem;\n}\n.header__navigation-list[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n}\n.header__navigation-link[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1rem;\n  line-height: 2;\n  padding: 0.5rem 0;\n  position: relative;\n}\n.header__navigation-link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  bottom: 0.25rem;\n  left: 50%;\n  transform: translate(-50%, 0);\n  background-image: linear-gradient(90deg, #5452e0, #cd52e0);\n  border-radius: 50%;\n  opacity: 0;\n  transition: opacity 0.25s ease-in-out;\n}\n.header__navigation-link--active[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n@media only screen and (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    height: 64px;\n  }\n  .header--white[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n  }\n  .header--transparent[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n  .header__inner-container[_ngcontent-%COMP%], .header__top-row-container[_ngcontent-%COMP%], .header__navigation[_ngcontent-%COMP%], .header__navigation-list-container[_ngcontent-%COMP%], .header__navigation-list[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .header__inner-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .header__top-row-container[_ngcontent-%COMP%] {\n    background-color: initial;\n  }\n  .header__burger-menu-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header__navigation[_ngcontent-%COMP%] {\n    background-color: initial;\n  }\n  .header__navigation-list[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    grid-gap: 1rem;\n    gap: 1rem;\n    padding: initial;\n  }\n  .header__navigation-link[_ngcontent-%COMP%] {\n    transition: color 0.25s ease-in-out;\n    font-family: \"Railway-Bold\";\n    letter-spacing: 0.1em;\n    font-size: 0.875rem;\n  }\n  .header__navigation-link--white[_ngcontent-%COMP%] {\n    color: #5c5c5c;\n  }\n  .header__navigation-link--transparent[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .container--mobile[_ngcontent-%COMP%] {\n    padding: initial;\n    max-width: initial;\n    margin: initial;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .container--tablet[_ngcontent-%COMP%] {\n    padding: initial;\n    max-width: initial;\n    margin: initial;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsVUFBQTtFQ1dBLGlDQUFBO0FEYkY7QUFLRTtFQUNFLGlEQUFBO0VBQ0EsZ0NBQUE7QUFISjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU9FO0VBQ0UsWUFBQTtFQ1BGLDhDQUFBO0FER0Y7QUFPSTtFQUNFLHlCRWxCMkI7QUZhakM7QUFRSTtFQUNFLDZCQUFBO0FBTk47QUFVRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVJKO0FBV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVRKO0FBWUU7RUMvQkEsa0NBQUE7QURzQkY7QUFZSTtFQUNFLGFFbkRzQjtBRnlDNUI7QUFhSTtFQUNFLGFFMURxQjtBRitDM0I7QUFlRTtFQUNFLGVFVm9CO0FGSHhCO0FBZ0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFkSjtBQWlCRTtFQUNFLFdBQUE7RUFDQSx5QkU3RDZCO0VGOEQ3QixnQkFBQTtFQ3ZERixvQ0FBQTtBRHlDRjtBQWlCSTtFQUNFLGFBQUE7QUFmTjtBQW1CRTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFqQko7QUFvQkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWxCSjtBQW9CSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLDBERXRHaUI7RUZ1R2pCLGtCQUFBO0VBQ0EsVUFBQTtFQ3pGSixxQ0FBQTtBRHdFRjtBQXFCSTtFQUNFLFVBQUE7QUFuQk47QUMzRkU7RURERjtJQW9ISSxZQUFBO0VBcEJGO0VBc0JFO0lBQ0UseUJFN0cyQjtFRnlGL0I7RUF1QkU7SUFDRSw2QkFBQTtFQXJCSjtFQXdCRTtJQUtFLFlBQUE7RUExQko7RUE2QkU7SUFDRSxtQkFBQTtJQUNBLDhCQUFBO0VBM0JKO0VBOEJFO0lBQ0UseUJBQUE7RUE1Qko7RUErQkU7SUFDRSxhQUFBO0VBN0JKO0VBZ0NFO0lBQ0UseUJBQUE7RUE5Qko7RUFpQ0U7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUFBLFNBQUE7SUFDQSxnQkFBQTtFQS9CSjtFQWtDRTtJQzdJRixtQ0FBQTtJRCtJSSwyQkVqSGdCO0lGa0hoQixxQkFBQTtJQUNBLG1CQUFBO0VBaENKO0VBa0NJO0lBQ0UsY0VwS29CO0VGb0kxQjtFQW1DSTtJQUNFLGNFM0ttQjtFRjBJekI7QUFDRjtBQ3hJRTtFRGdMRjtJQUVJLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VBckNGO0FBQ0Y7QUMxSUU7RURrTEY7SUFFSSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQXJDRjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJhYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiYWJzdHJhY3RzL21peGluc1wiO1xuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAvLyBIYXMgdG8gYmUgMiBiZWNhdXNlIG9mIHN3aXBlciBzbGlkZXNcbiAgei1pbmRleDogMjtcbiAgQGluY2x1ZGUgd2l0aC10cmFuc2l0aW9uKGFsbCk7XG5cbiAgJi0td2hpdGUge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIGhzbGEoMCwgMCwgNzAsIDAuMjUpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xuICB9XG4gICYtLXRyYW5zcGFyZW50IHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTNhM2EzO1xuICB9XG5cbiAgJl9faW5uZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAmX190b3Atcm93LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA2M3B4O1xuICAgIEBpbmNsdWRlIHdpdGgtdHJhbnNpdGlvbihiYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgICYtLXdoaXRlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItbGlnaHQ7XG4gICAgfVxuXG4gICAgJi0tdHJhbnNwYXJlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgJl9fdG9wLXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmX19wb3J0Zm9saW8taWNvbiB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgJl9faWNvbi12ZWN0b3Ige1xuICAgIEBpbmNsdWRlIHdpdGgtdHJhbnNpdGlvbihmaWxsKTtcblxuICAgICYtLXdoaXRlIHtcbiAgICAgIGZpbGw6ICRzZWNvbmRhcnktZm9udC1jb2xvci1kYXJrO1xuICAgIH1cblxuICAgICYtLXRyYW5zcGFyZW50IHtcbiAgICAgIGZpbGw6ICRwcmltYXJ5LWZvbnQtY29sb3ItbGlnaHQ7XG4gICAgfVxuICB9XG5cbiAgJl9fYnVyZ2VyLW1lbnUtYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAkZGVmYXVsdC1idXR0b24taGl0Ym94O1xuICB9XG5cbiAgJl9fYnVyZ2VyLW1lbnUtaWNvbiB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG5cbiAgJl9fbmF2aWdhdGlvbiB7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1saWdodDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIEBpbmNsdWRlIHdpdGgtdHJhbnNpdGlvbihoZWlnaHQpO1xuXG4gICAgJi0tZXhwYW5kZWQge1xuICAgICAgaGVpZ2h0OiAxNnJlbTtcbiAgICB9XG4gIH1cblxuICAmX19uYXZpZ2F0aW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAmX19uYXZpZ2F0aW9uLWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwLjI1cmVtO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAkcHJpbWFyeS1hY2NlbnQtY29sb3I7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgQGluY2x1ZGUgd2l0aC10cmFuc2l0aW9uKG9wYWNpdHkpO1xuICAgIH1cblxuICAgICYtLWFjdGl2ZTo6YWZ0ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKFwibWRcIikge1xuICAgIGhlaWdodDogNjRweDtcblxuICAgICYtLXdoaXRlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItbGlnaHQ7XG4gICAgfVxuXG4gICAgJi0tdHJhbnNwYXJlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJl9faW5uZXItY29udGFpbmVyLFxuICAgICZfX3RvcC1yb3ctY29udGFpbmVyLFxuICAgICZfX25hdmlnYXRpb24sXG4gICAgJl9fbmF2aWdhdGlvbi1saXN0LWNvbnRhaW5lcixcbiAgICAmX19uYXZpZ2F0aW9uLWxpc3Qge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICZfX2lubmVyLWNvbnRhaW5lciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgICZfX3RvcC1yb3ctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gICAgfVxuXG4gICAgJl9fYnVyZ2VyLW1lbnUtYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJl9fbmF2aWdhdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICAgIH1cblxuICAgICZfX25hdmlnYXRpb24tbGlzdCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMXJlbTtcbiAgICAgIHBhZGRpbmc6IGluaXRpYWw7XG4gICAgfVxuXG4gICAgJl9fbmF2aWdhdGlvbi1saW5rIHtcbiAgICAgIEBpbmNsdWRlIHdpdGgtdHJhbnNpdGlvbihjb2xvcik7XG4gICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250LWJvbGQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuXG4gICAgICAmLS13aGl0ZSB7XG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWZvbnQtY29sb3ItZGFyaztcbiAgICAgIH1cblxuICAgICAgJi0tdHJhbnNwYXJlbnQge1xuICAgICAgICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvci1saWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gRGVmYXVsdCBjb250YWluZXIgY2xhc3MgaXMgb3ZlcndyaXR0ZW4gYnkgdGhlIHJ1bGVzIHNwZWNpZmllZCB2aWEgYSBkZXZpY2Utc3BlY2lmaWNcbi8vIGZsYWdcbi5jb250YWluZXItLW1vYmlsZSB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoXCJtZFwiKSB7XG4gICAgcGFkZGluZzogaW5pdGlhbDtcbiAgICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gICAgbWFyZ2luOiBpbml0aWFsO1xuICB9XG59XG5cbi5jb250YWluZXItLXRhYmxldCB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihcIm1kXCIpIHtcbiAgICBwYWRkaW5nOiBpbml0aWFsO1xuICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICBtYXJnaW46IGluaXRpYWw7XG4gIH1cbn1cbiIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuQGltcG9ydCBcImFic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGdyaWQtYnJlYWtwb2ludCkge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICRncmlkLWJyZWFrcG9pbnQpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkZ3JpZC1icmVha3BvaW50KSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogY2FsYyhtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAkZ3JpZC1icmVha3BvaW50KSAtIDFweCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gd2l0aC10cmFuc2l0aW9uKFxuICAkdHJhbnNpdGlvbi1wcm9wZXJ0eSxcbiAgJHRyYW5zaXRpb24tZHVyYXRpb246ICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJGRlZmF1bHQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cbikge1xuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1wcm9wZXJ0eSAkdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjtcbn1cbiIsIi8vIENvbG9yc1xuJHByaW1hcnktZm9udC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRwcmltYXJ5LWZvbnQtY29sb3ItZGFyazogIzMwMzAzMDtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1saWdodDogI2UyZTJlMjtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1kYXJrOiAjNWM1YzVjO1xuJHByaW1hcnktYWNjZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICBoc2woMjQxLCA3MCwgNjApLFxuICBoc2woMjkyLCA3MCwgNjApXG4pO1xuJHByaW1hcnktYWNjZW50LWNvbG9yLWhvdmVyOiBoc2woMzQ4LCA3OCUsIDQxJSk7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3ItZGlzYWJsZWQtZmlsdGVyOiBzYXR1cmF0ZSgzMCUpIGJyaWdodG5lc3MoMS41KTtcbiRzZWNvbmRhcnktYWNjZW50LWNvbG9yOiAjOTk5N2ZmO1xuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2Y2ZjZmNjtcbiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItZGFyazogIzJhMmEyYTtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjM2EzYTNhO1xuJG92ZXJsYXktY29sb3I6IGhzbGEoMCwgMCwgMCwgMC43KTtcbiRtdXRlZC1jb2xvcjogI2M0YzRjNDtcbiRlcnJvci1jb2xvcjogaHNsKDAsIDc3JSwgNTglKTtcblxuLy8gQm9vdHN0cmFwIGJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHgsXG4pO1xuXG4kY29udGFpbmVyLXdpZHRoczogKFxuICBcInhzXCI6IDEwMCUsXG4gIFwic21cIjogNTQwcHgsXG4gIFwibWRcIjogNzIwcHgsXG4gIFwibGdcIjogOTYwcHgsXG4gIFwieGxcIjogMTE0MHB4LFxuICBcInh4bFwiOiAxMzIwcHgsXG4pO1xuXG4vLyBCb290c3RyYXAgZ3JpZFxuJGNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcteHM6IDAuNzVyZW07XG5cbi8vIEZvbnQtZmFtaWxpZXNcbiRwcmltYXJ5LWZvbnQtbGlnaHQ6IFwiUG9wcGlucy1MaWdodFwiO1xuJHByaW1hcnktZm9udC1yZWd1bGFyOiBcIlBvcHBpbnMtUmVndWxhclwiO1xuJHByaW1hcnktZm9udC1ib2xkOiBcIlBvcHBpbnMtQm9sZFwiO1xuXG4kc2Vjb25kYXJ5LWZvbnQtbGlnaHQ6IFwiUmFpbHdheS1MaWdodFwiO1xuJHNlY29uZGFyeS1mb250LXJlZ3VsYXI6IFwiUmFpbHdheS1SZWd1bGFyXCI7XG4kc2Vjb25kYXJ5LWZvbnQtYm9sZDogXCJSYWlsd2F5LUJvbGRcIjtcblxuLy8gTWlzY1xuJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogMTJweDtcbiRkZWZhdWx0LWJ1dHRvbi1oaXRib3g6IDAuNXJlbTtcbiRkZWZhdWx0LWJveC1zaGFkb3c6IDAgNHB4IDRweCAwIGhzbGEoMCwgMCwgMCwgMC4yNSk7XG5cbi8vIFRyYW5zaXRpb25zXG4kZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiRkZWZhdWx0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiJdfQ== */"] });


/***/ }),

/***/ 4267:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/social-media-channels/social-media-channels.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialMediaChannelsComponent": () => (/* binding */ SocialMediaChannelsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function SocialMediaChannelsComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clipPath", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.linkedInUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SocialMediaChannelsComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clipPath", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.instagramUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SocialMediaChannelsComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clipPath", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.tikTokUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SocialMediaChannelsComponent {
    constructor() { }
    ngOnInit() { }
}
SocialMediaChannelsComponent.ɵfac = function SocialMediaChannelsComponent_Factory(t) { return new (t || SocialMediaChannelsComponent)(); };
SocialMediaChannelsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialMediaChannelsComponent, selectors: [["shared-social-media-channels"]], inputs: { instagramUrl: "instagramUrl", tikTokUrl: "tikTokUrl", linkedInUrl: "linkedInUrl" }, decls: 4, vars: 3, consts: [[1, "social-media-channels"], ["target", "_blank", "class", "social-media-channels__link", 3, "href", 4, "ngIf"], ["class", "social-media-channels__link", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "social-media-channels__link", 3, "href"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "social-media-channels__icon"], ["clip-path", "url(#clip0_61_888)"], ["d", "M17.579 -9.34601e-05H13.7415C11.4654 -9.34601e-05 8.93353 0.957246 8.93353 4.25669C8.94461 5.40635 8.93353 6.50737 8.93353 7.74651H6.30029V11.9368H9.01498V23.9999H14.0034V11.8571H17.296L17.594 7.73475H13.9176C13.9176 7.73475 13.9257 5.90091 13.9176 5.36837C13.9176 4.0645 15.2742 4.13916 15.3559 4.13916C16.0014 4.13916 17.2568 4.14104 17.579 4.13916V-9.34601e-05Z", "fill", "#E2E2E2"], ["id", "clip0_61_888"], ["width", "24", "height", "24", "fill", "white"], ["clip-path", "url(#clip0_61_893)"], ["d", "M7.98709 11.9797C7.98709 9.7744 9.7744 7.98613 11.9797 7.98613C14.185 7.98613 15.9733 9.7744 15.9733 11.9797C15.9733 14.185 14.185 15.9733 11.9797 15.9733C9.7744 15.9733 7.98709 14.185 7.98709 11.9797ZM5.82825 11.9797C5.82825 15.3771 8.58228 18.1312 11.9797 18.1312C15.3771 18.1312 18.1312 15.3771 18.1312 11.9797C18.1312 8.58228 15.3771 5.82824 11.9797 5.82824C8.58228 5.82824 5.82834 8.58209 5.82834 11.9797H5.82825ZM16.9373 5.58436C16.9373 5.58455 16.9373 5.58474 16.9373 5.58493C16.9373 6.37361 17.5862 7.02256 18.3748 7.02256C19.1635 7.02256 19.8123 6.37361 19.8123 5.58493C19.8123 4.79654 19.1637 4.1477 18.3754 4.14738H18.3748C17.5865 4.14774 16.9379 4.7961 16.9373 5.58436ZM7.13986 21.731C5.97189 21.6778 5.33711 21.4833 4.91523 21.3189C4.35592 21.1011 3.95686 20.8418 3.53728 20.4228C3.1177 20.0039 2.85797 19.6051 2.64119 19.0459C2.47673 18.6241 2.28218 17.9892 2.22909 16.8212C2.17101 15.5584 2.15942 15.1791 2.15942 11.9799C2.15942 8.78074 2.17197 8.4025 2.22909 7.13871C2.28228 5.97074 2.47827 5.33692 2.64119 4.91398C2.85893 4.35468 3.11827 3.95561 3.53728 3.53603C3.95628 3.11645 4.35496 2.85673 4.91523 2.63995C5.33692 2.47549 5.97189 2.28093 7.13986 2.22784C8.4027 2.16976 8.78199 2.15817 11.9797 2.15817C15.1774 2.15817 15.5571 2.17053 16.821 2.22804C17.989 2.28122 18.6227 2.47721 19.0457 2.64014C19.6049 2.85692 20.0041 3.11722 20.4236 3.53622C20.8432 3.95522 21.102 4.35487 21.3197 4.91418C21.4842 5.33586 21.6787 5.97084 21.7318 7.1389C21.7898 8.4027 21.8014 8.78093 21.8014 11.9801C21.8014 15.1793 21.7898 15.5575 21.7318 16.8214C21.6786 17.9894 21.4831 18.6241 21.3197 19.0461C21.102 19.6053 20.8426 20.0045 20.4236 20.423C20.0046 20.8416 19.6049 21.1014 19.0457 21.3191C18.6239 21.4836 17.989 21.6781 16.821 21.7312C15.5582 21.7893 15.1789 21.8009 11.9797 21.8009C8.78055 21.8009 8.40232 21.7893 7.13986 21.7312V21.731ZM7.04068 0.0725486C5.76538 0.130621 4.89395 0.33284 4.1329 0.628981C3.34522 0.934801 2.67752 1.34508 2.01078 2.01077C1.34402 2.67646 0.934804 3.34425 0.628985 4.13291C0.332843 4.89444 0.130625 5.76538 0.0725521 7.04077C0.0135118 8.31808 0 8.72641 0 11.9797C0 15.233 0.0135118 15.6414 0.0725521 16.9188C0.130625 18.1941 0.332843 19.065 0.628985 19.8265C0.934804 20.6142 1.34412 21.2833 2.01078 21.9486C2.67742 22.6141 3.34426 23.0237 4.1329 23.3305C4.89539 23.6266 5.76538 23.8288 7.04068 23.8869C8.31875 23.945 8.72641 23.9594 11.9797 23.9594C15.233 23.9594 15.6413 23.9459 16.9188 23.8869C18.1941 23.8288 19.065 23.6266 19.8265 23.3305C20.6142 23.0237 21.282 22.6144 21.9486 21.9486C22.6154 21.283 23.0237 20.6142 23.3305 19.8265C23.6266 19.065 23.8298 18.194 23.8869 16.9188C23.945 15.6405 23.9585 15.233 23.9585 11.9797C23.9585 8.72641 23.945 8.31808 23.8869 7.04077C23.8288 5.76528 23.6266 4.89396 23.3305 4.13291C23.0237 3.34521 22.6144 2.67751 21.9486 2.01077C21.283 1.34403 20.6142 0.934801 19.8275 0.628981C19.065 0.33284 18.194 0.129663 16.9197 0.0725486C15.6421 0.014179 15.234 -3.8147e-06 11.9812 -3.8147e-06C8.72833 -3.8147e-06 8.31923 0.0135082 7.04116 0.0725486", "fill", "#E2E2E2"], ["id", "clip0_61_893"], [1, "social-media-channels__link", 3, "href"], ["clip-path", "url(#clip0_61_898)"], ["d", "M10.1154 9.59933V8.68486C9.77608 8.64001 9.43426 8.61675 9.092 8.6153C4.90615 8.6153 1.5 11.8029 1.5 15.7211C1.5 18.1242 2.78369 20.2523 4.74123 21.5384C3.43046 20.2263 2.70123 18.4972 2.70246 16.7008C2.70246 12.8387 6.01138 9.68914 10.1154 9.59933Z", "fill", "#E2E2E2"], ["d", "M10.3165 19.6923C12.0863 19.6923 13.5293 18.2936 13.5953 16.5496L13.6014 0.985225H16.4629C16.4016 0.660385 16.3705 0.330566 16.3701 0H12.4623L12.4555 15.565C12.3903 17.3077 10.946 18.7064 9.17678 18.7064C8.646 18.7064 8.12309 18.5777 7.65308 18.3311C8.27045 19.1853 9.26251 19.6923 10.3165 19.6923ZM21.8069 6.2683V5.40307C20.7566 5.40424 19.728 5.10041 18.847 4.52862C19.6203 5.41245 20.6591 6.02288 21.8076 6.2683", "fill", "#E2E2E2"], ["d", "M18.7305 4.7496C17.8714 3.7791 17.3966 2.52692 17.3962 1.23083H16.3521C16.6281 2.67988 17.4888 3.95325 18.7305 4.7496ZM9.0843 12.3477C7.27507 12.3503 5.80922 13.8007 5.80737 15.5908C5.81122 16.7987 6.48999 17.9082 7.56368 18.4615C7.16123 17.9133 6.94389 17.2506 6.94338 16.5705C6.94522 14.7798 8.41107 13.3286 10.2203 13.3268C10.5588 13.3268 10.8818 13.3823 11.1877 13.477V9.53848C10.8672 9.49339 10.544 9.47001 10.2203 9.46832C10.1637 9.46832 10.1077 9.47206 10.0517 9.47266V12.4979C9.73864 12.3993 9.41249 12.3487 9.0843 12.3477Z", "fill", "#E2E2E2"], ["d", "M21.2865 6.76923V9.77481C19.3428 9.7777 17.4461 9.17267 15.863 8.04495V15.9015C15.863 19.8258 12.6446 23.0184 8.68891 23.0184C7.15968 23.0184 5.74183 22.5397 4.5769 21.728C5.93565 23.1785 7.83737 24.0019 9.82491 23.9999C13.7812 23.9999 16.9997 20.8073 16.9997 16.8838V9.02645C18.5827 10.1539 20.4794 10.7587 22.423 10.7557V6.88923C22.041 6.88911 21.6601 6.8489 21.2865 6.76923Z", "fill", "#E2E2E2"], ["d", "M16.256 15.6431V7.7736C17.8851 8.90609 19.8234 9.51112 21.8075 9.50653V6.49729C20.6408 6.25584 19.5813 5.64762 18.7846 4.76191C17.5096 3.9576 16.6296 2.68191 16.3501 1.23083H13.4289L13.4228 16.7477C13.3551 18.4857 11.8812 19.88 10.0751 19.88C8.9957 19.8788 7.98401 19.3742 7.35509 18.5238C6.25109 17.9619 5.55877 16.8524 5.55816 15.6425C5.56001 13.8457 7.0597 12.3902 8.91201 12.3877C9.25662 12.3877 9.5877 12.4432 9.90154 12.5386V9.5028C5.9317 9.59333 2.73047 12.752 2.73047 16.6252C2.73047 18.4992 3.48063 20.2043 4.70278 21.4775C5.94366 22.322 7.41109 22.7723 8.91201 22.7693C12.9612 22.7693 16.256 19.5724 16.256 15.6431Z", "fill", "#E2E2E2"], ["id", "clip0_61_898"]], template: function SocialMediaChannelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialMediaChannelsComponent_a_1_Template, 7, 1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SocialMediaChannelsComponent_a_2_Template, 7, 1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SocialMediaChannelsComponent_a_3_Template, 11, 1, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.linkedInUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instagramUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tikTokUrl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".social-media-channels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n}\n.social-media-channels__link[_ngcontent-%COMP%] {\n  border: 1px solid #e2e2e2;\n  border-radius: 50%;\n  padding: 7px;\n}\n.social-media-channels__icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  fill: #e2e2e2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1tZWRpYS1jaGFubmVscy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFBQSxXQUFBO0FBREY7QUFHRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUNieUI7QURXN0IiLCJmaWxlIjoic29jaWFsLW1lZGlhLWNoYW5uZWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuLnNvY2lhbC1tZWRpYS1jaGFubmVscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcblxuICAmX19saW5rIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWZvbnQtY29sb3ItbGlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgfVxuXG4gICZfX2ljb24ge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBmaWxsOiAkc2Vjb25kYXJ5LWZvbnQtY29sb3ItbGlnaHQ7XG4gIH1cbn1cbiIsIi8vIENvbG9yc1xuJHByaW1hcnktZm9udC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRwcmltYXJ5LWZvbnQtY29sb3ItZGFyazogIzMwMzAzMDtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1saWdodDogI2UyZTJlMjtcbiRzZWNvbmRhcnktZm9udC1jb2xvci1kYXJrOiAjNWM1YzVjO1xuJHByaW1hcnktYWNjZW50LWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoXG4gIDkwZGVnLFxuICBoc2woMjQxLCA3MCwgNjApLFxuICBoc2woMjkyLCA3MCwgNjApXG4pO1xuJHByaW1hcnktYWNjZW50LWNvbG9yLWhvdmVyOiBoc2woMzQ4LCA3OCUsIDQxJSk7XG4kcHJpbWFyeS1hY2NlbnQtY29sb3ItZGlzYWJsZWQtZmlsdGVyOiBzYXR1cmF0ZSgzMCUpIGJyaWdodG5lc3MoMS41KTtcbiRzZWNvbmRhcnktYWNjZW50LWNvbG9yOiAjOTk5N2ZmO1xuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2ZmZmZmZjtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1saWdodDogI2Y2ZjZmNjtcbiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3ItZGFyazogIzJhMmEyYTtcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjM2EzYTNhO1xuJG92ZXJsYXktY29sb3I6IGhzbGEoMCwgMCwgMCwgMC43KTtcbiRtdXRlZC1jb2xvcjogI2M0YzRjNDtcbiRlcnJvci1jb2xvcjogaHNsKDAsIDc3JSwgNTglKTtcblxuLy8gQm9vdHN0cmFwIGJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHgsXG4pO1xuXG4kY29udGFpbmVyLXdpZHRoczogKFxuICBcInhzXCI6IDEwMCUsXG4gIFwic21cIjogNTQwcHgsXG4gIFwibWRcIjogNzIwcHgsXG4gIFwibGdcIjogOTYwcHgsXG4gIFwieGxcIjogMTE0MHB4LFxuICBcInh4bFwiOiAxMzIwcHgsXG4pO1xuXG4vLyBCb290c3RyYXAgZ3JpZFxuJGNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcteHM6IDAuNzVyZW07XG5cbi8vIEZvbnQtZmFtaWxpZXNcbiRwcmltYXJ5LWZvbnQtbGlnaHQ6IFwiUG9wcGlucy1MaWdodFwiO1xuJHByaW1hcnktZm9udC1yZWd1bGFyOiBcIlBvcHBpbnMtUmVndWxhclwiO1xuJHByaW1hcnktZm9udC1ib2xkOiBcIlBvcHBpbnMtQm9sZFwiO1xuXG4kc2Vjb25kYXJ5LWZvbnQtbGlnaHQ6IFwiUmFpbHdheS1MaWdodFwiO1xuJHNlY29uZGFyeS1mb250LXJlZ3VsYXI6IFwiUmFpbHdheS1SZWd1bGFyXCI7XG4kc2Vjb25kYXJ5LWZvbnQtYm9sZDogXCJSYWlsd2F5LUJvbGRcIjtcblxuLy8gTWlzY1xuJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogMTJweDtcbiRkZWZhdWx0LWJ1dHRvbi1oaXRib3g6IDAuNXJlbTtcbiRkZWZhdWx0LWJveC1zaGFkb3c6IDAgNHB4IDRweCAwIGhzbGEoMCwgMCwgMCwgMC4yNSk7XG5cbi8vIFRyYW5zaXRpb25zXG4kZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiRkZWZhdWx0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiJdfQ== */"] });


/***/ }),

/***/ 8271:
/*!**************************************************************!*\
  !*** ./src/app/shared/enums/header-background-color.enum.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderBackgroundColor": () => (/* binding */ HeaderBackgroundColor)
/* harmony export */ });
var HeaderBackgroundColor;
(function (HeaderBackgroundColor) {
    HeaderBackgroundColor["WHITE"] = "white";
    HeaderBackgroundColor["TRANSPARENT"] = "transparent";
})(HeaderBackgroundColor || (HeaderBackgroundColor = {}));


/***/ }),

/***/ 4087:
/*!*************************************************!*\
  !*** ./src/app/shared/enums/section-id.enum.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionId": () => (/* binding */ SectionId)
/* harmony export */ });
var SectionId;
(function (SectionId) {
    SectionId["HOME"] = "home";
    SectionId["ABOUT"] = "about";
    SectionId["SERVICES"] = "services";
    SectionId["PROJECTS"] = "projects";
    SectionId["CLIENTS"] = "clients";
    SectionId["TESTIMONIALS"] = "testimonials";
    SectionId["NEWS"] = "news";
    SectionId["CONTACT"] = "contact";
})(SectionId || (SectionId = {}));


/***/ }),

/***/ 221:
/*!**********************************************************!*\
  !*** ./src/app/shared/pipes/crop-text/crop-text.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropTextPipe": () => (/* binding */ CropTextPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CropTextPipe {
    transform(text, wordCount = 10) {
        const words = text.split(' ');
        const croppedText = words.slice(0, wordCount).join(' ');
        return `${croppedText}...`;
    }
}
CropTextPipe.ɵfac = function CropTextPipe_Factory(t) { return new (t || CropTextPipe)(); };
CropTextPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cropText", type: CropTextPipe, pure: true });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pipes_crop_text_crop_text_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/crop-text/crop-text.pipe */ 221);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 5070);
/* harmony import */ var _components_social_media_channels_social_media_channels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/social-media-channels/social-media-channels.component */ 4267);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 6290);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








/**
 * This module contains all components, pipes etc. that are shared across the
 * application.
 * The shared module can be imported in any other module that needs a component, pipe
 * etc. from the shared module.
 */
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([]),
            // Should not import other modules of this application
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_crop_text_crop_text_pipe__WEBPACK_IMPORTED_MODULE_0__.CropTextPipe,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent,
        _components_social_media_channels_social_media_channels_component__WEBPACK_IMPORTED_MODULE_2__.SocialMediaChannelsComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_pipes_crop_text_crop_text_pipe__WEBPACK_IMPORTED_MODULE_0__.CropTextPipe,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent,
        _components_social_media_channels_social_media_channels_component__WEBPACK_IMPORTED_MODULE_2__.SocialMediaChannelsComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8202), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map