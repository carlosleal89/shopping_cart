import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

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
  const productsArray = await fetchProductsList('computador');
  removeLoadingText();
  productsArray.forEach((product) => {
    const productEl = createProductElement(product);
    productsEl.append(productEl);
  });
}

renderProducts();

document.querySelector('.cep-button').addEventListener('click', searchCep);
