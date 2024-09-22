import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({
    border: '2px solid #B2B6FF',
  })),
  state('highlighted', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(82%)'
  })),
  transition('default => highlighted', [
    animate('200ms ease-out', style({
      transform: 'scale(1.02)'
    }))
  ])
]);

export const showStateTrigger = trigger('showState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(300, style({
      opacity: 0
    }))
  ])
]);

export const toogleCheckStateTrigger = trigger('toogleCheckState', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)'
    }))
  ])
]);

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      width: 0
    }),
    animate('400ms ease-out', keyframes([
      style({
        offset: 0,
        opacity: 0,
        width: 0
      }),
      style({
        offset: 0.08,
        opacity: 0.5,
        width: '*'
      }),
      style({
        offset: 1,
        opacity: 1,
        width: '*'
      })
    ]))
  ]),
  transition(':leave', [
    animate('400ms cubic-bezier(.21,1.01,.99,.06)', style({
      opacity: 0,
      width: 0
    }))
  ])
]);
