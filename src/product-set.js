import { getRandomInt } from './utility.js';

class ProductSet {
    constructor(products) {
        this.list = products.slice();
    }

    getRandomProduct() {
        const index = getRandomInt(this.list.length);
        const product = this.list[index];
        product.views += 1;
        return product;
    }

    removeById(productId) {
        const list = this.list;
        for(let i = 0; i < list.length; i++){
            const product = list[i];
            if(product.id === productId) {
                list.splice(i, 1);
                return;
            }
        }
    }

    hasProduct() {
        return this.list.length > 0;
    }
}

export default ProductSet;