/*
12 - Fatorial
Escreva um algoritmo que recebe um número n e calcule e retorne o seu fatorial.
*/

function factorial(n) {
  let result = 1;
  for (let index = 1; index <= n; index++) {
    result = result * index;
  }
  return result;
}

  result = 1; // inicializa em 1 pois 0*n = 0
  for(n; n>0; n--){ // vai decrementando o valor recebido como parametro
    result *= n; // multiplica o decrementado por 1, a cada loop
}
factorial(5);