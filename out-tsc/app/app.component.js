import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./navbar/navbar.component";
import * as i2 from "@angular/router";
export class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "navbar");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelement(2, "router-outlet");
        i0.ɵɵelementEnd();
    } }, directives: [i1.NavbarComponent, i2.RouterOutlet], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<navbar></navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>", styles: [""] }]
    }], null, null); })();
//# sourceMappingURL=app.component.js.map