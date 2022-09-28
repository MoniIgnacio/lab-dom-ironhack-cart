// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price.innerHTML * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let counter = 0;
  allProducts.forEach((eachProduct) => {
    updateSubtotal(eachProduct);
    // obtengo subtotal de cada elemento
    let eachSubtotal = eachProduct.querySelector('.subtotal span');
    // coercion a Number
    eachSubtotal = +eachSubtotal.innerHTML;
    return eachSubtotal;
  });
  
  // ITERATION 3
  allProducts.forEach((element) => {
    // console.log(element.querySelector('.subtotal span').innerHTML)
    counter += +element.querySelector('.subtotal span').innerHTML;
    return counter
  });
  // accedo por id al h2 que contiene el span ($0)
  let totalPriceDOM = document.querySelector('#total-value span');
  // accedo al valor 0 y coercion a Number
  totalPriceDOM.innerHTML =  +counter
  totalPriceDOM = +totalPriceDOM
  // console.log(typeof totalPriceDOM)
  return totalPriceDOM
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
