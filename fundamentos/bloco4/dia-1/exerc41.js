// const myName = "Dayana";
// const birthCity = "São Paulo";
// birthCity = "Itapecerica da Serra"
// let birthYear = 1996;
// birthYear = 2030;
// console.log(myName, birthCity, birthYear);

// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {firstName: 'Ana', lastName: 'Santos'}
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId)
// console.log(typeof isEnrolled)
// console.log(typeof patientEmail)
// console.log(typeof patientInfo)
// console.log(typeof patientAge)

// const base = 5;
// let heigth = 8;
// const area = (base*heigth);
// const perimeter = (base +heigth +base + heigth);
// console.log(perimeter, area)

// const nota = 75;

//   if(nota >= 80){
//     console.log("Parabéns, você foi aprovado!");
//   }else if(nota < 80 && nota >= 60){
//     console.log("Você está na nossa lista de espera!");
//   }else if(nota < 60){
//     console.log("Você foi reprovado!");
//   }else{
//     console.log("A nota precisa está entre 1 e 100");
//   }

// const comida = 'pão na chapa';
// const bebida = 'suco de maçã';

// if (bebida === 'cafézinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// const conditionOne = true;
// const conditionTwo = false;

// console.log(conditionOne && conditionTwo);

// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false


// currentHour = 20;
// let message = "";

// if(currentHour >= 22){
//   message = "Não deveríamos comer nada, é hora de dormir";
// }else if(currentHour >= 18 && currentHour < 22){
//   message = "Rango da noite, vamos jantar :D";
// }else if(currentHour >= 14 && currentHour < 18){
//   message = "Vamos fazer um bolo pro café da tarde?";
// }else if( currentHour >= 11 && currentHour <= 14){
//   message = "Hora do almoço!!!";
// }else if(currentHour >= 4 && currentHour <= 11){
//   message = "Hmmm, cheiro de café recém passado";
// }
// console.log(message);

// let weekDay  = "sábado";

// if(weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira"){
//   console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// }else{
//   console.log("FINALMENTE, descanso merecido UwU");
// }


// let estado = "aprovado";

// switch(estado){
//   case "aprovado":
//     console.log("Aprovado!");
//     break;
//   case "reprovado":
//     console.log("Reprovado!");
//     break;
//   case "lista":
//     console.log("Lista de espera!");
//     break;
//   default:
//     console.log("Não se aplica");
// }




let a = 5;
let b = 5;

let adicao = a+b;
let subtracao = a-b;
let multiplicacao = a*b;
let divisao = a/b;
let modulo = a**b;
console.log(adicao, subtracao, multiplicacao, divisao, modulo);

if(a > b){
  console.log("O maior é o valor de a:" + a);
}else if(a < b){
  console.log("O maior é o valor de b: " + b);   
}else if (a == b){
  console.log ("valores iguais!!!");
}
