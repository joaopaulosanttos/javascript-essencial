/* 

JSON siginifica JavaScript Object Notation que traduzido 
para o português fica algo como notação de objeto JavaScript

Explicando de um modo simples JSON é basicamente uma forma de converter
um objeto em texto e o contrário também, um texto em um objeto. 

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, 
já que o formato de texto é lido por praticamente toda liguagem de programação.

Para trabalhar com JSON no Javascript usamos dois métodos:

JSON.parse() -> Converte texto no padrão JSON em objetos;
JSON.stringify() -> Converte objetos em texto padrão JSON;

*/

// Objeto carro
const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2001,
    motor: ['1.6', '1.4', '1.0']
}

// Converteu para texto json
let texto = JSON.stringify(carro)
console.log(texto);

// Converteu para objeto json 
let obj = JSON.parse(texto);
console.log(obj.motor[2]);

