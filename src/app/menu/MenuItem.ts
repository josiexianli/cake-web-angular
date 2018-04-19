// import {Ingredient} from '../shared/ingredient.model';
export class MenuItem {
  public name: string;
  public imagePath: string;
  public itemIcon : string;
  public price: string;
  // public ingredients: Ingredient[];

  constructor(name: string,  itemIcon: string, imagePath: string, price: string ) {
    this.name = name;
    this.imagePath = imagePath;
    this.itemIcon = itemIcon;
    this.price = price;
   // this.ingredients = ingredients;
  }
}
