import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { transition, trigger, animate, style, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition('* => *', [

        query(':enter', [
          style({ opacity: 0 })
        ], { optional: true }),

        query(':leave', [
          style({
            display: 'block'
          }),
          animate(1000, style ({
            opacity: 0
          }))
        ], { optional: true }),

        query(':enter', [
          style({
            opacity: 0,
            display: 'block',
            height: '100%'
          }),
          animate(1000, style({
            opacity: 1
          }))
        ], { optional: true})
      ])
    ]) 
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      return outlet.activatedRoute.snapshot.url
    }

    return null;
  
  }

}
