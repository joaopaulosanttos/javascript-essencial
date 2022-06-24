// Estruturas de Repetição - Loop 

const myList = [1, 2, 3, 4, 5];
let counter = 0;

// while
while(counter < myList.length) {
    console.log('Imprimindo: ' + myList[counter]);

    counter++ // counter = counter + 1
}

const mySecondList = ['a', 'b', 'c', 'd', 'e'];

// for
for(let counter = 0; counter < mySecondList.length; counter++) {
    console.log(`Imprimindo: ${mySecondList[counter]}`); // template literals
}

// Métodos de array -> repetição 
const names = ['João', 'Mateus', 'Carlos', 'Ana Clara', 'Amanda'];

// forEach() - O método que executa uma dada função em cada elemento de um array.
names.forEach(function(name) {
    console.log(`O nome é: ${name}`);
})

// map() - invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
const modifiedNames = names.map(function(name) {
    if(name === 'João') {
        return name = 'Sr. João Paulo Santos';
    } else {
        return name; 
    }
});

console.log(modifiedNames);

// filter() - cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
const bigNumbers = [1, 2, 3, 4, 5, 10, 100].filter(function(number) {
    return number >= 5;
})
console.log(bigNumbers);

// reduce() - 
const sumAll = [10, 20, 30, 40, 50].reduce(function(total, number) {
    return total + number;
});

console.log(sumAll);


