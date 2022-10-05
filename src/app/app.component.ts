import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { transition, trigger, animate, style, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [

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
              transform: 'translateX(-50px)'
            }))
          ], { optional: true }),
  
          query(':enter', [
            style({
              transform: 'translateX(50px)',
              opacity: 0
            }),
            animate('250ms 100ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0)'
            }))
          ], { optional: true})
        ])

      ]),

      transition(':decrement', [

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
              transform: 'translateX(50px)'
            }))
          ], { optional: true }),
  
          query(':enter', [
            style({
              transform: 'translateX(-50px)',
              opacity: 0
            }),
            animate('250ms 100ms ease-out', style({
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
      // console.log(outlet.activatedRouteData);
      return outlet.activatedRouteData['tab'] }

    return null;
  
  }

}
