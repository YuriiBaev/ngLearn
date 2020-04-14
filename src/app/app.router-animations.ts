import {
  query,
  trigger,
  transition,
  style,
  group,
  animate,
  animateChild,
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      group([
        query(
          ':enter',
          [
            style({
              display: 'flex',
              opacity: 0,
              transform: 'translateY(9rem) rotate(-10deg)'
            }),
            animate(
              '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
              style({
                opacity: 1,
                transform: 'translateY(0) rotate(0)'
              })
            ),
            animateChild()
          ],
          {optional: true}
        ),
      ])
    ])
  ]);
