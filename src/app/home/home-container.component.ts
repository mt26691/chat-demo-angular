import { Component } from '@angular/core';

@Component({
    selector: 'app-home-container',
    template: `
              <app-header></app-header>
                <router-outlet></router-outlet>
                <app-footer></app-footer>
            `
})
export class HomeContainerComponent {
    constructor() {
    }
}
