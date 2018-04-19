// import {Ingredient} from '../shared/ingredient.model';
export class MenuItem {
  public name: string;
  public description: string;
  public imagePath: string;
  public itemIcon : string;
  // public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, itemIcon: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.itemIcon = itemIcon;
   // this.ingredients = ingredients;
  }
}
