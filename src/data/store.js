import productItems from './products.js';
import { findById } from '../utility.js';

const PRODUCT_KEY = 'PRODUCT';
const PRODUCT_CLICKS = 'CLICKS';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let products = store.get(PRODUCT_KEY);
        if(!products) {
            store.save(PRODUCT_KEY, products);
            products = productItems; 
        }
        return products;
    },

    addProduct(productItems){
        const products = store.getProducts();
        products.push(productItems);
        store.save(PRODUCT_KEY, products);
    },

    getClickedItem() {
        let productsClicked = store.get(PRODUCT_CLICKS);

        if(!productsClicked){
            productsClicked = [];
        }
        return productsClicked;
    },

    productClick(id) {
        const productItems = store.getClickedItem();

        const lineItem = findById(productItems, id);

        if(lineItem) {
            lineItem.clicks++;
        } else {
            const lineItem = {
                id: id,
                clicks: 0
            };
            productItems.push(lineItem);
        }
        store.save(PRODUCT_CLICKS, productItems);
    }
};



export default store;