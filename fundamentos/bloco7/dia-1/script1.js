/*
Análise de preços da lista de compras
Escreva um algoritmo que irá receber um array de produtos e retorne uma string no formato da saída que contem:
* O produto com maior preço;
* O preço do produto;
* A média do preços dos produtos.

Saída:
"O produto mais caro é teclado gamer e custa: R$ 180, a média de preços dos produtos é de: R$36.11."
----------------------------------------------------------------------------------------------------
*/

const produtos = [
  { name: 'lápis', price: 2 },
  { name: 'borracha', price: 4 },
  { name: 'caneta', price: 5 },
  { name: 'régua', price: 6 },
  { name: 'apontador', price: 3 },
  { name: 'teclado gamer', price: 5000 },
  { name: 'mochila', price: 33 },
  { name: 'fone de ouvido', price: 57 },
  { name: 'mousepad', price: 35 },
]
function productAnalysis(produtos){ // corrigir nome
  let preco = produtos[0].price;
  let nome;
  let total = 0;
  for (let index = 0; index < produtos.length; index++) {
    if(produtos[index].price > preco){
      preco = produtos[index].price;
      nome = produtos[index].name;
    }
    total += produtos[index].price;
  }
   let media = (total/produtos.length).toFixed(2);

  return `O produto mais caro é ${nome} e custa: R$ ${preco}, a média de preços dos produtos é de: R$ ${media}`
}
console.log(productAnalysis(produtos));
