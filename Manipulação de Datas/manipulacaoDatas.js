// Manipulação de datas em Javascript 

// new Date() - Método base para pegar a data completa
let data = new Date();
console.log(data);

// getFullYear() - Método para pegar o ano completo
let ano = data.getFullYear();
console.log(ano);

// getMonth() - Método para pegar o mês atual - de 0 ate 11 sendo 0 janeiro e 11 dezembro
let mes = data.getMonth();
console.log(mes);

// Mostrar o mês no formato escrito
const mesesDoAno = [
    'Janeiro', 
    'Fevereiro', 
    'Março', 
    'Abril', 
    'Maio', 
    'Junho', 
    'Julho', 
    'Agosto', 
    'Setembro', 
    'Outubro', 
    'Novembro', 
    'Dezembro'
];

let mesEscrito = mesesDoAno[data.getMonth()]
console.log(mesEscrito);

// getDate() - Pegar dia do mês - 1 até 31
let diaMes = data.getDate();
console.log(diaMes)

// Pegar o dia da semana - 0 até 6
let diaSemana = data.getDay();
console.log(diaSemana);

const diasDaSemana = [
    'Domingo',
    'Segunda-feira', 
    'Terça-feira', 
    'Quarta-feira', 
    'Quinta-feira', 
    'Sexta-feira', 
    'Sábado'
];

let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito);

// getHours() - Pegar a hora - de 0 até 23
let hora = data.getHours();
console.log(hora);

// getMinutes() -  Pegar os minutos - de 0 até 59
let minutos = data.getMinutes();
console.log(minutos);

// getSeconds() - Pegar os segundos - de 0 até 59
let segundos = data.getSeconds();
console.log(segundos);

// Pegar os milisegundos - de 0 até 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// toLocaleString() - retorna um objeto Date como uma string, usando as configurações de localidade.
//Pegar a data no padrão brasileiro - dia / mês / ano
let dataBr = data.toLocaleString('pt-br');
console.log(dataBr)

// mostrar apenas a data curta
let dataBrCurta = data.toLocaleString('pt-br', {dateStyle: 'short'});
console.log(dataBrCurta);

// mostrar apenas a hora 
let dataBrTime = data.toLocaleString('pt-br', {timeStyle: 'short'});
console.log(dataBrTime);

// pegar os valores separados e concatenar 
d = new Date();
dia_mes_separado = d.getDate();
mes_separado = d.getMonth() + 1;
ano_separado = d.getFullYear();

function addZero(x) { return x < 10 ? '0' + x : '' + x}

let dataPadraoBR = addZero(dia_mes_separado) + '/' + addZero(mes_separado) + '/' + ano_separado;
console.log(dataPadraoBR);

// Comparar datas - Maior ou Menor. Ex: Vencimentos 
let hoje = new Date();
let vencimento = new Date(2022, 7, 15);

if(hoje > vencimento) {
    console.log('Sua conta está vencida!');
} else {
    console.log('Sua conta ainda não venceu, tudo certo!');
}

// Diferença entre duas datas em dias
let dataInicial = new Date();
let dataFinal = new Date(2022, 11, 31);

// getTime() - retorna o número de milissegundos desde 1º de janeiro de 1970 00:00:00.
let diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

let diferencaDias = Math.ceil( diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias + ' dias');
