import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const productsEl = document.querySelector('.products');
const productsArray = await fetchProductsList('computador');
productsArray.forEach((product) => {
  const productEl = createProductElement(product);
  productsEl.append(productEl);
});

document.querySelector('.cep-button').addEventListener('click', searchCep);
