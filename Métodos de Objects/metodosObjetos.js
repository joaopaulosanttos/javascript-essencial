// Objects
const product = {
    name: 'Camisa',
    price: 25.99,
    inStock: true,
    sizes: ['P', 'M', 'G'],
    'Main color' : 'Blue'
}

// Anotação de ponto - Acessando itens de um objeto
console.log(product.name);

// Anotação por cochetes - Acessando itens de um objeto 
console.log(product['name']);
console.log(product["Main color"]); 

// Destructuring - Possibilita extrair dados de arrays ou objetos em variáveis distintas.
const {price, inStock} = product;

console.log(price);
console.log(inStock);

// JSON - JavaScript Object Notation
const dog = {
    name: 'Bily',
    age: 1
}

// JSON.stringify() - Convertendo o object em json 
const json = JSON.stringify(dog);
console.log(json);

// JSON.parse() - Convertendo o json em object 
const obj = JSON.parse(json);
console.log(obj);


