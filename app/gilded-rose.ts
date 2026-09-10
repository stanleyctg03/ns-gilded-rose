export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let itemName = this.items[i].name;
            let itemSellIn = this.items[i].sellIn;
            let itemQuality = this.items[i].quality;

            let isSulfares = itemName === 'Sulfuras, Hand of Ragnaros';
            let isAgedBrie = itemName === 'Aged Brie';
            let isBackstage = itemName === 'Backstage passes to a TAFKAL80ETC concert'

            if (!isAgedBrie && !isBackstage && !isSulfares) {
                if (itemQuality > 0) {
                    itemQuality -=1;
                }
                itemSellIn -= 1;
                if (itemSellIn < 0) {
                    if (itemQuality > 0) {
                        itemQuality -= 1;
                    }
                }
            } else if (isBackstage) {
                if (itemQuality < 50) {
                    itemQuality += 1
                }
                itemSellIn -= 1;
                if (itemQuality < 50) {
                    if (itemSellIn < 6) {
                        itemQuality += 2;
                    } else if (itemSellIn < 11) {
                        itemQuality += 1;
                    } 
                }
                if (itemSellIn < 0) {
                    itemQuality = 0;
                }
            }  else if (isAgedBrie) {
                if (itemQuality < 50) {
                    itemQuality += 1;
                }
                itemSellIn -= 1
                if (itemSellIn < 0 && itemQuality < 50) {
                    itemQuality += 1;
                }
            }

            this.items[i].sellIn = itemSellIn;
            this.items[i].quality = itemQuality;
        }

        return this.items;
    }
}
