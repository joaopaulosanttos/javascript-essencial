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

// join() - junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
let pessoa = ['João Paulo', 'Carlos', 'Mateus', 'Ana', 'Beatriz'];
document.querySelector('#teste').innerHTML = pessoa.join(' - ');

// splice() -  altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
const produtos = ['Notebook', 'Celular', 'SmartTV', 'VideoGame', 'Microondas'];
produtos.splice(2, 0, 'Item adicionado 1', 'Item adicionado 2');
console.log(produtos);

// concat() - método concatena (junta) dois ou mais arrays, método retorna uma nova matriz, 
// contendo as matrizes unidas e  método não altera as matrizes existentes.
const list1 = ['Lidia', 'Bruna', 'Amanda', 'Júlia', 'Eduarda'];
const list2 = ['Jorge', 'Adson', 'Luiz', 'Pedro', 'João'];
const list3 = ['Carlos', 'João Paulo', 'Raimundo'];
console.log(list1, list2, list3);

// sempre tem que ser atribuido a uma nova variável
const superLista = list1.concat(list2, list3);
console.log(superLista);

// slice() - retorna elementos selecionados em um array, como um novo array, 
// seleciona de um determinado start (início) , até um determinado end (fim) e não altera a matriz original.
const jogadores = ['Neymar', 'Vinicius Jr', 'Messi', 'Cristiano Ronaldo', 'Mbappé', 'Ronaldinho Gaúcho'];
console.log(jogadores);
const jogadoresNãoBr = jogadores.slice(2, 5);
console.log(jogadoresNãoBr);

// sort() - ordena os elementos de um array, sobrescreve a matriz original 
// e classifica os elementos como strings em ordem alfabética e crescente.
const jogadoresOrdenados = jogadores.sort();
console.log(jogadoresOrdenados);

// solução para ordenar números usando sort()
const numeros = [25, 100, 13, 60, 300, 400, 650, 11];
numeros.sort(function(a,b){
    return a - b;
})
console.log(numeros);

//
const Maior100 = numeros.filter((value, index, array)=> {
    return value > 100;
})
console.log(Maior100);

// solução para pegar o MAIOR número de um array 
function MaiorNumero(array) {
    return Math.max.apply(null, array);
}
console.log(MaiorNumero(numeros));

// solução para pegar o MAIOR número de um array 
function MenorNumero(array) {
    return Math.min.apply(null, array);
}
console.log(MenorNumero(numeros));

// reverse() - método inverte a ordem dos elementos em uma matriz e método substitui a matriz original.
const jogaoresNaoOrdenados = jogadores.reverse();
console.log(jogaoresNaoOrdenados);

// solução para ordenar números usando reverse()
numeros.sort(function(a,b){
    return b - a; // inverte
})
console.log(numeros);

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

