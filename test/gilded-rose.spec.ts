import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('should decrease twice as fast when sell by date has passed for normal items', function () {
        const items = [new Item('Apple', 0, 20)];
        const gildedRose = new GildedRose(items);
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].quality).to.equal(18);
    });

    it('should never be sold or decrease in quality for Sulfaras', function () {
        const items = [new Item('Sulfuras, Hand of Ragnaros', 12, 20)];
        const gildedRose = new GildedRose(items);
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].quality).to.equal(20);
        expect(updatedItems[0].sellIn).to.equal(12);        
    });

    it('should not be negative for quality', function () {
        const items = [new Item('Apple', 12, 0), new Item('Apple', 0, 1)];
        const gildedRose = new GildedRose(items);
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].quality).to.equal(0);
        expect(updatedItems[1].quality).to.equal(0);
    });

    it('should increase in quality for Aged Brie as it gets older', function () {
        const items = [new Item('Aged Brie', 20, 20)];
        const gildedRose = new GildedRose(items);
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].quality).to.equal(21);     
    });

    it('should not be more than 50 for quality', function () {
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49), 
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50)];
        const gildedRose = new GildedRose(items);
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].quality).to.equal(50);
        expect(updatedItems[1].quality).to.equal(50);    
    });

    it('should increase in quality by 2 when there are 10 days or less and by 3 when its 5 then goes to 0 after concert for backstage pass', function () {
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 25), 
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 14),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 14)];
        const gildedRose = new GildedRose(items);
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].quality).to.equal(27);
        expect(updatedItems[1].quality).to.equal(17); 
        expect(updatedItems[2].quality).to.equal(0);  
    })

});
