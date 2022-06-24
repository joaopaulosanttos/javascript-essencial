// Métodos de Array 

const list = ['a', 'b', 'c', 'd', 'e'];

// length - A propriedade length representa um inteiro de 32-bit sem sinal, 
// que especifíca o número de elementos em um array.
console.log(list.length);

// Acessando um elemento específico de um array à partir do seu index
console.log(list[2]); 

// Adicionando um novo elemento ao array por meio do index
list[5] = 'f';
console.log(list);

// Acessando o último elemento de um array
console.log(list[list.length - 1]);

// push() - Adiciona um elemento no fim do array 
list.push('g');
console.log(list);

// pop() - Remove um elemento do fim do array 
list.pop();
console.log(list);

// unshift() - Adiciona um elemento no início do array 
list.unshift('j');
console.log(list);

// shift() - Remove um elemento do início do array 
list.shift();
console.log(list);

// Destructuring - Possibilita extrair dados de arrays ou objetos em variáveis distintas.
const [n1, n2] = list;

console.log(n1);
console.log(n2);

