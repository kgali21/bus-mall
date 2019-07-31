import ProductSet from '../src/product-set.js';
import productsData from '../src/data/products.js';


const test = QUnit.test;

QUnit.module('Product Set');

test('copies source list', assert => {

    const productSet = new ProductSet(productsData);

    assert.deepEqual(productSet.list, productsData);
    assert.notEqual(productSet.list, productsData);
});

test('Get a random product', (assert) => {
    const productSet = new ProductSet(productsData);

    const product = productSet.getRandomProduct();

    assert.ok(productsData.includes(product));
});

test('Remove product from list', (assert) => {
    const productSet = new ProductSet(productsData);
    const productToRemove = productsData[0];

    productSet.removeById(productToRemove.id);

    assert.notOk(productSet.list.includes(productToRemove));
});