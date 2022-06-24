// Métodos de String 

const fullName = 'João Paulo Santos';

// length - O valor da quantidade de caracteris de uma string
console.log(fullName.length); 

// split() - Separa uma string em lista (array)
const stringToArray = fullName.split(' ');

console.log(stringToArray);

// toUpperCase() - Transforma a string em letras CAIXA ALTA
console.log(fullName.toUpperCase()); 

// toLowerCase() - Tranforma a string em letras caixa baixa 
console.log(fullName.toLowerCase());

// indexOf() - retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
console.log(fullName.indexOf('P'));

// slice() - Resgatar uma parte de uma string - 
// retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.
console.log(fullName.slice(0, 4));

