// Classes
class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productDetails() {
        return `O nome do produto é ${this.name} e o preço é R$${this.price}`;
    }
}


const socks = new Product('Meia branca', 10.99);
const shirt = new Product('Camisa Lacoste', 99.99);

console.log(socks.name);
console.log(socks.price);

console.log(shirt.name);
console.log(shirt.price);

console.log(socks.productDetails());
console.log(shirt.productDetails());

// herança 
class superProduct extends Product {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    showAdjective(adjective) {
        return `Este ${this.name} é muito ${adjective}`;
    }

    // static 
    static sayHello() {
        console.log('Hello');
    }
}

const tenis = new superProduct('Tenis Vermelho Adiddas', 280.90, '42');

console.log(tenis.name);
console.log(tenis.price);
console.log(tenis.size);
console.log(tenis.showAdjective('Confortável'));

superProduct.sayHello();