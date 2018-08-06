import { Component } from '@angular/core';

import {
  trigger,
  state,
  animate,
  style,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800))
    ]),

    trigger('wildState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(1000)),
      transition('shrunken <=> *', [style({
        backgroundColor: 'orange'
      }),
      animate(1000, style({
        borderRadius: '50px'
      })),
      animate(500)
      ])
    ]),

    trigger('list1', [
      transition("void=>*", [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ])
    ]),

    trigger('list2', [
      transition("*=>void", animate(1000,style({
          opacity: 0,
          transform: 'translateX(100px)'
        })))
    ])
  ]
})
export class AppComponent {
  state = "normal"
  wildState = "normal"
  title = 'app';
  list = []

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal'
    this.wildState = this.wildState === 'normal' ? 'highlighted' : 'normal'
  }

  onShrunk() {
    this.wildState = 'shrunken'
  }

  onAdd(item) {
    this.list.push(item)
  }

  onDelete(item){
  
  this.list=  this.list.filter(x=>x!==item)
  }
}
