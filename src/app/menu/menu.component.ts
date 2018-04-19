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
    // new MenuItem('cake1', 'mango cake', '/assets/img/milk-shake.jpg', '/assets/img/item-icon.png'),
    //   new MenuItem('cake2', 'pineapple cake', '/assets/img/milk-shake.jpg',
    //     '/assets/img/item-icon.png'),
    //   new MenuItem('cake3', 'strawberry cake', '/assets/img/milk-shake.jpg',
    //     '/assets/img/item-icon.png'),
    // new MenuItem('cake3', 'strawberry cake', '/assets/img/milk-shake.jpg',
    //   '/assets/img/item-icon.png'),
    // new MenuItem('cake3', 'strawberry cake', '/assets/img/milk-shake.jpg',
    //   '/assets/img/item-icon.png'),
    // new MenuItem('cake3', 'strawberry cake', '/assets/img/milk-shake.jpg',
    //   '/assets/img/item-icon.png'),
    // new MenuItem('cake3', 'strawberry cake', '/assets/img/milk-shake.jpg',
    //   '/assets/img/item-icon.png')

    new MenuItem(
       '草莓千层', 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-0.png',
       'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-0.jpg',
        '6\'\' $39  |  8\'\' $59  | 10\'\' $79'
  ),
  new MenuItem(
    '红豆抹茶千层',
     'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-1.png',
     'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-1.jpg',
    '6\'\' $42  |  8\'\' $62  |  10\'\' $82'
  ),
  new MenuItem(
     '榴莲千层',
     'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-2.png',
     'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-2.jpg',
     '6\'\' $45  |  8\'\' $72  | 10\'\' $98'
  ),
  new MenuItem(
     '椰子千层',
     'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-3.png',
     'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-3.jpg',
     '6\'\'  $39  | 8\'\' $59  | 10\'\' $79'
  ),
  new MenuItem(
    '提拉米苏千层',
     'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-4.png',
    'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-4.jpg',
     '6\'\' $42  | 8\'\' $62 | 10\'\' $82'
  ),
  new MenuItem(
    '巧克力千层',
    'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-5.png',
   'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-5.jpg',
    '6\'\' $42  |  8\'\' $62  |  10\'\' $82'
  ),
  new MenuItem(
    '特调奶昔',
     'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-6.png',
    'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-6.jpg',
   '$ 9')];

  constructor() {
  }
  ngOnInit() {
  }
}
