import { assert, expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

// Add a master test here

describe('Golden Master Test', function () {

    it('Test Update Quality', function () {
        const inputItems = [new Item('Apple', 10, 20), new Item('Aged Brie', 28, 40),
            new Item('Apple', 14, 32), new Item('Sulfaras', 99, 39),
            new Item('Backstage passes', 54, 67), new Item('Backstage passes to a TAFKAL80ETC concert', 5, 42),
            new Item('Sulfuras, Hand of Ragnaros', -25, 32), new Item('Aged Brie', -8, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', -4, 23), new Item('Random', -10, 34)
        ];

        const gildedRose = new GildedRose(inputItems);
        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Apple');
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(19);

        expect(items[1].name).to.equal('Aged Brie');
        expect(items[1].sellIn).to.equal(27);
        expect(items[1].quality).to.equal(41);
        
        expect(items[2].name).to.equal('Apple');
        expect(items[2].sellIn).to.equal(13);
        expect(items[2].quality).to.equal(31);

        expect(items[3].name).to.equal('Sulfaras');
        expect(items[3].sellIn).to.equal(98);
        expect(items[3].quality).to.equal(38);

        expect(items[4].name).to.equal('Backstage passes');
        expect(items[4].sellIn).to.equal(53);
        expect(items[4].quality).to.equal(66);

        expect(items[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[5].sellIn).to.equal(4);
        expect(items[5].quality).to.equal(45);

        expect(items[6].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[6].sellIn).to.equal(-25);
        expect(items[6].quality).to.equal(32);

        expect(items[7].name).to.equal('Aged Brie');
        expect(items[7].sellIn).to.equal(-9);
        expect(items[7].quality).to.equal(22);

        expect(items[8].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[8].sellIn).to.equal(-5);
        expect(items[8].quality).to.equal(0);

        expect(items[9].name).to.equal('Random');
        expect(items[9].sellIn).to.equal(-11);
        expect(items[9].quality).to.equal(32);
    }) 
})

