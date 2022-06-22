// Variáveis
var x = 10;
// mais modernas 
let y = 20;
const z = 30; // O valor de const não pode mudar

if(true) {
    // variável do escopo
    let y = 55;
}

console.log(x);
console.log(y);
console.log(z);

x = 15;

console.log(x);