/* EVENTOS DE TEMPO COM JAVASCRIPT 

Os eventos de tempo permitem a execução do código em intervalos de tempo
especificados. Esses intervalos de tempo são chamados de eventos de cronometragem

Os dois métodos-chave para usar com Javascript são:

setTimeout(function, tempo em milisegundos) 
-> Ececuta uma função, depois de esperar um número especificado de milissegundos. 

setInterval(function, milissegundos)
-> É o mesmo que serTimeout(), mas repete a execução da função continuamente.

*/

// setTimeout() - método chama uma função após alguns milissegundos. Ativa a funnção apenas uma vez após o tempo especificado! 


function ativarContagem() {
    document.getElementById('time').innerHTML = 'Começou a contar!';
    tempo = setTimeout(() => {
        document.getElementById('time').innerHTML = "Executou o setTimeout!";
        document.body.style.backgroundColor = "red";
    }, 5000);
}

// clearTimeout() - método limpa um timer definido com o método setTimeout().

function pararContagem() {
    clearTimeout(tempo);
    document.getElementById('time').innerHTML = "Parou a contagem!";
    document.body.style.backgroundColor = 'white';
}

// setInterval() - método chama uma função em intervalos especificados (em milissegundos), 
// método continua chamando a função até clearInterval() ser chamado ou a janela ser fechada.
function ativarContagem2() {
    Tempo2 = setInterval(() => {
        var cronometro = document.getElementById('time2').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('time2').innerHTML = soma; 
    }, 1000);
}

// clearInterval() - método limpa um timer definido com o método setInterval().
function pararContagem2() {
    clearInterval(Tempo2);
}