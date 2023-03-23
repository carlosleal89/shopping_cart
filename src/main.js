import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

const productsEl = document.querySelector('.products');

function insertLoadingText() {
  const loadingTextEl = document.createElement('p');
  loadingTextEl.innerHTML = 'carregando...';
  loadingTextEl.className = 'loading';
  productsEl.append(loadingTextEl);
}

function removeLoadingText() {
  productsEl.innerHTML = '';
}

async function renderProducts() {
  insertLoadingText();
  try {
    const productsArray = await fetchProductsList('computador');
    removeLoadingText();
    productsArray.forEach((product) => {
      const productEl = createProductElement(product);
      productsEl.append(productEl);
    });
  } catch {
    const errorTextEl = document.createElement('p');
    errorTextEl.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    errorTextEl.className = 'error';
    productsEl.append(errorTextEl);
  }
}

renderProducts();

document.querySelector('.cep-button').addEventListener('click', searchCep);
window.onload = () => {
  if (localStorage) {
    const productIds = getSavedCartIDs();
    const productPromisses = productIds.map((id) => fetchProduct(id));
    Promise.all(productPromisses).then((values) => {
      const productContainerEl = document.querySelector('.cart__products');
      values.forEach((element) => {
        const cartElement = createCartProductElement(element);
        productContainerEl.append(cartElement);
      });
    });
  }
};
