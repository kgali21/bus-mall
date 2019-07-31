import store from './data/store.js';
import ProductSet from './product-set.js';
import { getRandomInt } from './utility.js';
import displayProducts from './display-products.js';

const productDisplays = document.querySelectorAll('.item-image');
const productName = document.getElementById('item-image');
const choiceContainer = document.getElementById('button-container');
const nextContainer = document.getElementById('next-container');
const buttonClicked = document.querySelectorAll('click');

let live = true;

const products = store.getProducts();
const masterProductSet = new ProductSet(products);
let chosenProduct = null;

pickProduct();

function pickProduct() {
    let productSet = masterProductSet;

    if(chosenProduct && masterProductSet.list.length > 1) {
        productSet = new ProductSet(masterProductSet.list);
        productSet.removeById(chosenProduct.id);
    }

    chosenProduct = productSet.getRandomProduct();
    const otherProducts = new ProductSet(products);
    otherProducts.removeById(chosenProduct.id);

    const unchosenProduct = otherProducts.getRandomProduct();
    const productIndex = getRandomInt(3);
    const chosenProductDisplay = productDisplays[productIndex];
    const unchosenProductDisplay = productDisplays[2 - productIndex];

    productName.textContent = chosenProduct.name;
    displayProducts(chosenProduct, chosenProductDisplay, true);
    displayProducts(unchosenProduct, unchosenProductDisplay, false);

    for(let i = 0; i < buttonClicked.length; i++){
        const buttonClick = buttonClicked[i];
        buttonClick.addEventListener('click', handleUserChoice);
    }

    function handleUserChoice(event) {
        if(!live) return;

        const button = event.target;

        choiceContainer.classList.add('reveal');
        button.parentNode.classList.add('choice');

        const userChosen = chosenProduct.id === button.value;

        if(userChosen) {
            masterProductSet.removeById(chosenProduct.id);
        }
        else {
            return;
        }

        nextContainer.classList.remove('hidden');
        live = false;
    }

}
