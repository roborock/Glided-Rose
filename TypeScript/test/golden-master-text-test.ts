import { Item, GildedRose } from '../app/gilded-rose';

const items = [
  new Item("+5 Dexterity Vest", 10, 20,"Vest"), //
  new Item("Aged Brie", 2, 0,"Book"), //
  new Item("Elixir of the Mongoose", 5, 7,"Elixir"), //
  new Item("Sulfuras, Hand of Ragnaros", 0, 80,"Weapon"), //
  new Item("Sulfuras, Hand of Ragnaros", -1, 80,"Weapon"),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20,"Other"),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49,"Other"),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49,"Other"),
  // this conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6,"Food")];


const gildedRose = new GildedRose(items);

let days: number = 3;

if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality , category");
  items.forEach(element => {
    console.log(element.name + ' ' + element.sellIn + ' ' + element.quality + ' ' + element.category);

  });
  console.log();
  gildedRose.updateQuality();
}
