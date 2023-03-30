export const getAddress = async (cep) => {
  const endpointAwesomeApi = 'https://cep.awesomeapi.com.br/json/';
  const endpointBrasilApi = 'https://brasilapi.com.br/api/cep/v2/';

  const response = await Promise.any([
    fetch(`${endpointAwesomeApi}${cep}`), fetch(`${endpointBrasilApi}${cep}`),
  ]);
  const data = await response.json();
  if (!data.cep) {
    throw new Error('CEP não encontrado');
  }
  return data;
};

export const searchCep = async () => {
  const inputValue = document.querySelector('.cep-input');
  const adressEl = document.querySelector('.cart__address');
  try {
    const {
      address, street, district, neighborhood, city, state,
    } = await getAddress(inputValue.value);
    adressEl.innerHTML = `${address || street} - ${district
    || neighborhood} - ${city} - ${state}`;
  } catch {
    adressEl.innerHTML = 'CEP não encontrado';
  }
};
