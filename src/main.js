import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

const productsEl = document.querySelector('.products');
const welcome = document.createElement('h1');

function welcomeMsg() {
  welcome.innerHTML = 'Digite seu produto na barra de busca.';
  welcome.className = 'welcome-msg';
  productsEl.append(welcome);
}

function insertLoadingText() {
  const loadingTextEl = document.createElement('p');
  loadingTextEl.innerHTML = 'carregando...';
  loadingTextEl.className = 'loading';
  productsEl.append(loadingTextEl);
}

function removeLoadingText() {
  productsEl.innerHTML = '';
}

function removeWelcomMsg() {
  welcome.innerHTML = '';
}

async function renderProducts() {
  removeWelcomMsg();
  insertLoadingText();
  try {
    const { value } = document.getElementById('search-input');
    const productsArray = await fetchProductsList(value);
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

welcomeMsg();

const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', renderProducts);

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
