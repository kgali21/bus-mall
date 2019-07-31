
function displayProducts(product, productDisplay, clicked) {
    if(clicked) {
        productDisplay.classList.add('clicked');
        productDisplay.classList.remove('unclicked');
    } else {
        productDisplay.classList.add('unclicked');
        productDisplay.classList.remove('clicked');
    }
    productDisplay.classList.remove('choice');

    const button = productDisplay.querySelector('button');
    button.clicked = false;
    button.value = product.id;

    const img = productDisplay.querySelector('img');
    img.src = product.image;
    img.alt = 'product-choice';

    const p = productDisplay.querySelector('p');
    p.textContent = product.description; 
}

export default displayProducts;