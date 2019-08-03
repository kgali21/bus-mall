import store from '../src/data/store.js';
import productItems from '../src/data/products.js';

const test = QUnit.test;

QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('get and save', (assert) =>{
    const key = 'mouse';
    const mouse = { name: 'mickey' };

    store.save(key, mouse);
    const got = store.get(key);

    assert.deepEqual(got, mouse);

});

test('get products uses bootstrapped products', (assert) => {

    const products = store.getProducts();

    assert.deepEqual(products, productItems);

});

test('get product click data', (assert) =>{
    const clickedItem = store.getClickedItem();

    assert.deepEqual(clickedItem, []);
});

test('add to button click', (assert) => {
    const id = 'usb-octopus';
    const expected = [{
        id: 'usb-octopus',
        clicks: 0,
    }];

    store.productClick(id);
    const productClick = store.getClickedItem();

    assert.deepEqual(productClick, expected);

});