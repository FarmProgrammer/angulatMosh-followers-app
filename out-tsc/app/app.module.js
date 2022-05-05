import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './github-followers/github-followers.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        GithubFollowersService
    ], imports: [[
            BrowserModule,
            HttpClientModule,
            RouterModule.forRoot([
                { path: '', component: HomeComponent },
                { path: 'followers', component: GithubFollowersComponent }
            ])
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    HomeComponent,
                    GithubFollowersComponent,
                    AboutComponent,
                    NavbarComponent
                ],
                imports: [
                    BrowserModule,
                    HttpClientModule,
                    RouterModule.forRoot([
                        { path: '', component: HomeComponent },
                        { path: 'followers', component: GithubFollowersComponent }
                    ])
                ],
                providers: [
                    GithubFollowersService
                ],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        HomeComponent,
        GithubFollowersComponent,
        AboutComponent,
        NavbarComponent], imports: [BrowserModule,
        HttpClientModule, i1.RouterModule] }); })();
//# sourceMappingURL=app.module.js.map