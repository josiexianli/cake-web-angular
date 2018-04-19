import {Component, OnInit} from '@angular/core';
import {MenuItem} from './MenuItem';
import {Ingredient} from '../shared/Ingredient.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuItems = [
    new MenuItem('cake1', 'mango cake', '/assets/img/milk-shake.jpg', '/assets/img/item-icon.png'),
      new MenuItem('cake2', 'pineapple cake', '/assets/img/milk-shake.jpg',
        '/assets/img/item-icon.png'),
      new MenuItem('cake3', 'strawberry cake', '/assets/img/milk-shake.jpg',
        '/assets/img/item-icon.png'),
    new MenuItem('cake3', 'strawberry cake', '/assets/img/milk-shake.jpg',
      '/assets/img/item-icon.png'),
    new MenuItem('cake3', 'strawberry cake', '/assets/img/milk-shake.jpg',
      '/assets/img/item-icon.png'),
    new MenuItem('cake3', 'strawberry cake', '/assets/img/milk-shake.jpg',
      '/assets/img/item-icon.png'),
    new MenuItem('cake3', 'strawberry cake', '/assets/img/milk-shake.jpg',
      '/assets/img/item-icon.png')
    ];

  constructor() {
  }

  ngOnInit() {
  }

}
