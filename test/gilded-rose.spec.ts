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
});
