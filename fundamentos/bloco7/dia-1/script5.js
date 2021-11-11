/*
10 - Nega Números
Escreva uma algoritmo que recebe um array de números, retorne uma cópia do array com todos os números negados.
Por exemplo:
--------------
Entrada:
[2 ,-3 ,4 ]
Saída:
[-2, 3 ,-4 ]
--------------
*/

function negateNumbers(numbers){
let arrNegado = [];
  for (let index = 0; index < array.numbers; index++) {
    numbers[index] = numbers[index] * (-1);
    arrNegado.push(numbers[index]);
  }
  return arrNegado;
  // Desenvolva seu código nessa função
}
negateNumbers([2,-3,4]);