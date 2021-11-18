const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'), 
    id3: callback('Carla Paiva'),
    id4: callback('Dayana Dias'),
  };
  return employees;
};


const funcionarios = (nomeCompleto) => {
  const email = `${nomeCompleto.replace(' ','_').toLowerCase()}@trybe.com`;
  return {nomeCompleto, email};
}

console.log(newEmployees(funcionarios));
console.log(newEmployees(funcionarios));