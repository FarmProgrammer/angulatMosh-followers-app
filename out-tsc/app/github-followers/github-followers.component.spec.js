import { TestBed, waitForAsync } from '@angular/core/testing';
import { GithubFollowersComponent } from './github-followers.component';
describe('GithubFollowersComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [GithubFollowersComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GithubFollowersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=github-followers.component.spec.js.map