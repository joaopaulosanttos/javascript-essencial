// Funções 
function minhaFuncao() {
    console.log('Olá função!');
}

minhaFuncao(); // invocando/chamar a função!!

// argumentos e/ou parametros de função 
function fullName(firstname, lastname) {
    return `O seu primeiro nome é: ${firstname} e o seu sobrenome é: ${lastname}`;
}

console.log(fullName('João Paulo', 'Santos'));

// Usando variável
const myFullName = fullName('Davina', 'Gonçalo');
console.log(myFullName);

const firstname = 'Paulo Henrique';
const secondName = 'dos Santos Silva';

console.log(fullName(firstname, secondName));

// arrow functions
const myArrowFunction = (a, b) => {
    return a + b;
}

console.log(myArrowFunction(10, 35));

const result = myArrowFunction(20, 45);
console.log(result);

// arrow funtion simple
const mySimpleArrowFunction = (a, b) => a + b; 

console.log(mySimpleArrowFunction(5, 5));




