import store from './data/store.js';
import ProductSet from './product-set.js';
import { getRandomInt } from './utility.js';
import displayProducts from './display-products.js';

const productDisplays = document.querySelectorAll('.item-image');
const productName = document.getElementById('item-image');
const choiceContainer = document.getElementById('button-container');
const nextContainer = document.getElementById('next-container');
const buttons = document.querySelectorAll('button');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

let live = true;

const products = store.getProducts();
const masterProductSet = new ProductSet(products);
let chosenProduct1 = null;
let chosenProduct2 = null;
let chosenProduct3 = null;
let turns = 0;
let userChoices = [];

pickProduct();

function pickProduct() {
    let productSet = masterProductSet;

    
    productSet = new ProductSet(masterProductSet.list);
    // productSet.removeById(chosenProduct.id);
    console.log(productSet);

    chosenProduct1 = productSet.getRandomProduct();
    const otherProducts = new ProductSet(products);
    otherProducts.removeById(chosenProduct1.id);
    productSet.removeById(chosenProduct1.id);
    console.log(otherProducts);
    displayProducts(chosenProduct1, button1);

    chosenProduct2 = productSet.getRandomProduct();
    otherProducts.removeById(chosenProduct2.id);
    productSet.removeById(chosenProduct2.id);
    displayProducts(chosenProduct2, button2);
    
    chosenProduct3 = productSet.getRandomProduct();
    otherProducts.removeById(chosenProduct3.id);
    productSet.removeById(chosenProduct3.id);
    displayProducts(chosenProduct3, button3);

    // const unchosenProduct = otherProducts.getRandomProduct();
    // const productIndex = getRandomInt(2);
    // const chosenProductDisplay = productDisplays[productIndex];
    // const unchosenProductDisplay = productDisplays[1 - productIndex];

    // productName.textContent = chosenProduct.name;
    // displayProducts(chosenProduct, chosenProductDisplay, true);
    // displayProducts(unchosenProduct, unchosenProductDisplay, false);
    // let buttonClick;
    for(let i = 0; i < buttons.length; i++){
        const buttonClick = buttons[i];
        buttonClick.addEventListener('click', handleUserChoice);
        console.log(userChoices);
    }
    
    function handleUserChoice(event) {
        // increment turns
        turns++;
        // store choice value
        // userChoices.push(buttonClick.value);
        // display 3 new images


        chosenProduct1 = productSet.getRandomProduct();
        const otherProducts = new ProductSet(products);
        otherProducts.removeById(chosenProduct1.id);
        productSet.removeById(chosenProduct1.id);
        console.log(otherProducts);
        displayProducts(chosenProduct1, button1);
    
        chosenProduct2 = productSet.getRandomProduct();
        otherProducts.removeById(chosenProduct2.id);
        productSet.removeById(chosenProduct2.id);
        displayProducts(chosenProduct2, button2);
        
        chosenProduct3 = productSet.getRandomProduct();
        otherProducts.removeById(chosenProduct3.id);
        productSet.removeById(chosenProduct3.id);
        displayProducts(chosenProduct3, button3);
        
        console.log(event);
        // const userChosen = chosenProduct.id === button.value;

        // if(userChosen) {
        //     masterProductSet.removeById(chosenProduct.id);
        // }
        // else {
        //     return;
        // }
        //     console.log(masterProductSet);
        // nextContainer.classList.remove('hidden');
        // live = false;
    }

}
