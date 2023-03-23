export const fetchProduct = (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const endpoint = 'https://api.mercadolibre.com/items/';
  return fetch(`${endpoint}${id}`)
    .then((response) => response.json()).then((data) => data);
};

export const fetchProductsList = (product) => {
  if (!product) {
    throw new Error('Termo de busca não informado');
  }
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  return fetch(`${endpoint}${product}`)
    .then((response) => response.json()).then((data) => data.results);
};
