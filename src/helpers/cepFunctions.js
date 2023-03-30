export const getAddress = async (cep) => {
  const endpointAwesomeApi = 'https://cep.awesomeapi.com.br/json/';
  const endpointBrasilApi = 'https://brasilapi.com.br/api/cep/v2/';

  const response = await Promise.any([
    fetch(`${endpointAwesomeApi}${cep}`), fetch(`${endpointBrasilApi}${cep}`),
  ]);
  const data = response.json();
  return data;
};

// export const searchCep = async () => {
//   const inputValue = document.querySelector('.cep-input');
//   const {
//     address, street, district, neighborhood, city, state,
//   } = await getAddress(inputValue.value);
//   const adressEl = document.querySelector('.cart__address');
//   adressEl.innerHTML = `${address || street} - ${district
//     || neighborhood} - ${city} - ${state}`;
// };

export const searchCep = async () => {
  const inputValue = document.querySelector('.cep-input');
  const adressEl = document.querySelector('.cart__address');
  const cepLength = 8;
  if (inputValue.value.length !== cepLength) {
    adressEl.innerHTML = 'CEP não encontrado';
  } else {
    const {
      address, street, district, neighborhood, city, state,
    } = await getAddress(inputValue.value);
    adressEl.innerHTML = `${address || street} - ${district
    || neighborhood} - ${city} - ${state}`;
  }
};
