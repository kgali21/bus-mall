
function displayProducts(product, productDisplay) {
    const img = productDisplay.querySelector('img');
    img.src = product.image;
    img.alt = 'product-choice';

    productDisplay.value = product.name;
}

export default displayProducts;