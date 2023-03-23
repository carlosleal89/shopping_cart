import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('testa se fetchFunctions é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('fetch é chamado ao executar fetchProduct', () => {
    expect(fetchProduct('MLB1405519561')).toHaveBeenCalled;
  });
  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1405519561';
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it('verifica se o retorno da função fetchProduct é o esperado', async () => {
    const expectedReturn = await fetchProduct('MLB1405519561');
    expect(expectedReturn).toEqual(product);
  });
  it('verifica se a função retorna um erro quando não é passado um argumento de busca', () => {
    expect(() => fetchProduct()).toThrow(new Error ('ID não informado'));
  });
});
