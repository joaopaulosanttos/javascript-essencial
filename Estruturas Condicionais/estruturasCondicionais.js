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
// == Verifica se os valores das varáveis são iguais 
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

// switch - É usado para realizar diferentes ações com base em diferentes condiçoes no mesmo bloco de verificação. 
// Caso a condição não seja compátivel não será executada e o valor padrão sera acionado. 
let expressao = 'z';

switch(expressao) {
    case 'a':
        console.log('A expressão é igual a letra "A"');
        break;
    case 'b':
        console.log('A expressão é igual a letra "B"');
        break;
    case 'c':
        console.log('A expressão é igual a letra "C"');
        break;
    default:
        console.log('Nenhuma das opções');
}




