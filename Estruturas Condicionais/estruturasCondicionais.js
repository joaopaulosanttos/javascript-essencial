// Estruturas condicionais
const a = 10;

// if...else - A condicional if  é uma estrutura condicional que executa a afirmação, 
// dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.
if(a > 8) {
    console.log('a maior que 8');
} else {
    console.log('a menor que 8');
}

// >, <, >=, <= 

const b = 'Paulo Henrique';
// == Verifica se os valores da varáveis é iguais 
// === Verifica se os valores e os tipos das varivais são estritamente iguais 

// if... else if
if(b === 'João') {
    console.log('O nome é João');
} else if (b === 'Paulo Henrique') {
    console.log('O nome é Paulo Henrique');
} else {
    console.log('Não é nenhuma das opções!');
}

const someNumber = 14;

// if ternário - Este operador é frequentemente usado como um atalho para a instrução if. EX. condition ? expr1 : expr2 
let testingANumber = someNumber < 20 ? 'Yes' : 'No';
console.log(testingANumber);



