import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { combineLatest } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./github-followers.service";
import * as i3 from "@angular/common";
const _c0 = function (a1, a2) { return ["/followers", a1, a2]; };
function GithubFollowersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "h4", 3)(3, "a", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "a", 5);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const follower_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(4, _c0, follower_r1.id, follower_r1.login));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(follower_r1.login);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", follower_r1.html_url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(follower_r1.html_url);
} }
export class GithubFollowersComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ]).pipe(switchMap(combined => {
            let id = combined[0].get('id');
            let page = combined[1].get('page');
            return this.service.getFollowers();
        }))
            .subscribe((followers) => this.followers = followers);
    }
}
GithubFollowersComponent.ɵfac = function GithubFollowersComponent_Factory(t) { return new (t || GithubFollowersComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.GithubFollowersService)); };
GithubFollowersComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GithubFollowersComponent, selectors: [["github-followers"]], decls: 1, vars: 1, consts: [["class", "media", 4, "ngFor", "ngForOf"], [1, "media"], [1, "media-body"], [1, "media-heading"], [3, "routerLink"], [3, "href"]], template: function GithubFollowersComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, GithubFollowersComponent_div_0_Template, 7, 7, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.followers);
    } }, directives: [i3.NgForOf, i1.RouterLinkWithHref], styles: [".media[_ngcontent-%COMP%] { \n    margin-bottom: 30px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubFollowersComponent, [{
        type: Component,
        args: [{ selector: 'github-followers', template: "<div *ngFor=\"let follower of followers\" class=\"media\">\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">\n      <a [routerLink]=\"['/followers', follower.id, follower.login]\">{{ follower.login }}</a>\n    </h4>\n    <a href=\"{{ follower.html_url }}\">{{ follower.html_url }}</a>\n  </div>\n</div>", styles: ["\n.media { \n    margin-bottom: 30px;\n}"] }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.GithubFollowersService }]; }, null); })();
//# sourceMappingURL=github-followers.component.js.map