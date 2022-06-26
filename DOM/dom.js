// DOM - Document Object Model 


// seleção de elementos 

//getElementById()
const title = document.getElementById('titulo');

console.log(title);

// querySelector()
const sameTitle = document.querySelector('#titulo')

console.log(sameTitle);

// querySelectorAll()
const texts = document.querySelectorAll('.text');

console.log(texts);
console.log(texts[1])

texts.forEach((text) => {
    console.log(text.textContent.toUpperCase());
})

// Manipulação de elementos 

// textContent - Altere o conteúdo textual de um elemento
title.textContent = 'Mudei o texto'


// innerHTML - Modifica o HTML incluindo o seu conteúdo 
texts[0].innerHTML = '<span>Alteramos o HTML deste elemento</span>'

// style - Permite adicionar estilos a um elemento 
texts[3].style.backgroundColor = 'red';

// classList.add()
texts[2].classList.add('my-class');

// classList.remove()
texts[2].classList.remove('text');

// remove() - Remover um elemento do DOM 
texts[1].remove()

// Eventos 
const btn = document.querySelector('#btn');

// addEventListener() - 
btn.addEventListener('click', () => {
    console.log('clicou!!');
})
