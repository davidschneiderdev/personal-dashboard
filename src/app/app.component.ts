import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { transition, trigger, animate, style, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition('* => *', [

        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),

        group([
          query(':leave', [
            animate('200ms ease-in', style ({
              opacity: 0,
              transform: 'translateX(-80px)'
            }))
          ], { optional: true }),
  
          query(':enter', [
            style({
              transform: 'translateX(80px)',
              opacity: 0
            }),
            animate(200, style({
              opacity: 1,
              transform: 'translateX(0)'
            }))
          ], { optional: true})
        ])

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
