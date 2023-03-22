export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = (product) => {
  if (!product) {
    throw new Error('Termo de busca não informado');
  }
  try {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=';
    return fetch(`${endpoint}${product}`)
      .then((response) => response.json()).then((data) => data.results);
  } catch (error) {
    return error.message;
  }
};
