import store from './data/store.js';
import ProductSet from './product-set.js';
import displayProducts from './display-products.js';
import renderChoices from './render-choices.js';

const buttons = document.querySelectorAll('button');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
let live = true;

const products = store.getProducts();
let masterProductSet = new ProductSet(products);
let chosenProduct1 = null;
let chosenProduct2 = null;
let chosenProduct3 = null;
let turns = 0;

let oldChoices = [];
let newChoices = [];

pickProduct();

function pickProduct() {
    let productSet = masterProductSet;

    chosenProduct1 = productSet.getRandomProduct();
    const otherProducts = new ProductSet(products);
    otherProducts.removeById(chosenProduct1.id);
    productSet.removeById(chosenProduct1.id);
    displayProducts(chosenProduct1, button1);
    oldChoices.push(chosenProduct1);
    
    chosenProduct2 = productSet.getRandomProduct();
    otherProducts.removeById(chosenProduct2.id);
    productSet.removeById(chosenProduct2.id);
    displayProducts(chosenProduct2, button2);
    oldChoices.push(chosenProduct2);

    chosenProduct3 = productSet.getRandomProduct();
    otherProducts.removeById(chosenProduct3.id);
    productSet.removeById(chosenProduct3.id);
    displayProducts(chosenProduct3, button3);
    oldChoices.push(chosenProduct3);
   
    for(let i = 0; i < buttons.length; i++){
        const buttonClick = buttons[i];
        buttonClick.addEventListener('click', handleUserChoice);
    }
}

function handleUserChoice(event) {
    if(!live) return;
    let productSet = masterProductSet;
   
    turns++;
    
    if(turns > 24) {
        button1.classList.add('hidden');
        button2.classList.add('hidden');
        button3.classList.add('hidden');
        // button1.disable = true;
        // button2.disable = true;
        // button3.disable = true;
        
    } else {
       
        masterProductSet.list = [...masterProductSet.list, ...newChoices];
        
        const otherProducts = new ProductSet(products);

        chosenProduct1 = productSet.getRandomProduct();
        otherProducts.removeById(chosenProduct1.id);
        productSet.removeById(chosenProduct1.id);
        displayProducts(chosenProduct1, button1);
        oldChoices.push(chosenProduct1);

        store.productClick(event.currentTarget.value);

        chosenProduct2 = productSet.getRandomProduct();
        otherProducts.removeById(chosenProduct2.id);
        productSet.removeById(chosenProduct2.id);
        displayProducts(chosenProduct2, button2);
        oldChoices.push(chosenProduct2);

        store.productClick(event.currentTarget.value);

        
        chosenProduct3 = productSet.getRandomProduct();
        otherProducts.removeById(chosenProduct3.id);
        productSet.removeById(chosenProduct3.id);
        displayProducts(chosenProduct3, button3);
        oldChoices.push(chosenProduct3);

        store.productClick(event.currentTarget.value);

        newChoices = oldChoices.splice(0, 3);

    }
}



