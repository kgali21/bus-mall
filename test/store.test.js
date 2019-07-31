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