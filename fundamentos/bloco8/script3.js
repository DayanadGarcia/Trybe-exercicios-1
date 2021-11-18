const techProducts = [
  {
      id: 1, // numérico
      name: 'computer', // string
      price: 2100, // number
  },
  {
      id: 2,
      name: 'mouse',
      price: 56,
  },
  {
      id: 3,
      name: 'monitor',
      price: 589,
  },
  {
      id: 4,
      name: 'keyboard',
      price: 78,
  },
  {
      id: 5,
      name: 'HD',
      price: 350,
  },
  {
      id: 6,
      name: 'webcam',
      price: 187,
  },
  {
      id: 7,
      name: 'mic',
      price: 69,
  },
  {
      id: 8,
      name: 'headset',
      price: 216,
  },
];
/*
* 1 - // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
* 2 - // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
* 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
// ex: id: 8 e quantidade: 2 preço total: 432
*/
let arrProdutos = [];
techProducts.forEach(produtos => {
  if (produtos.id % 2 == 0) {
    arrProdutos.push(produtos.name);
  }
  return console.log(arrProdutos);
});
//-------------------------------------------------------------------
let preco = false;
let precoProduto = techProducts.some((elementos)=>{
  if(elementos.price > 300){
    preco = true; 
    }
  return preco;
});
console.log(precoProduto);

//----------------------------------------------------------------------
//outra forma de fazer o de cima, precisa de ajustes:
// let precoProduto = techProducts.some((elementos)=> {elementos.price > 300;});
// console.log(precoProduto);
