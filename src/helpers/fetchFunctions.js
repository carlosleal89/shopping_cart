export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const endpoint = 'https://api.mercadolibre.com/items/';
  // return fetch(`${endpoint}${id}`)
  //   .then((response) => response.json()).then((data) => data);
  const response = await fetch(`${endpoint}${id}`);
  const data = response.json();
  return data;
};

export const fetchProductsList = (product) => {
  if (!product) {
    throw new Error('Termo de busca não informado');
  }
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  return fetch(`${endpoint}${product}`)
    .then((response) => response.json()).then((data) => data.results);
};
