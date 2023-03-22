import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    expect(fetchProductsList('computador')).toHaveBeenCalled;
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetchProductsList('computador')).toHaveBeenCalledWith(endpoint);
  });

  it('verifica se o retorno da função fetchProductsList é o esperado', async () => {
    const expectedReturn = await fetchProductsList('computador');
    expect(expectedReturn).toEqual(computadorSearch);
  })

  it('verifica se a função retorna um erro quando não é passado um argumento de busca', () => {
    expect(() => fetchProductsList()).toThrowError(error);
  })

  // it('...', () => {
  // });
});
