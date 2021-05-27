var numero = prompt('Insira o número para calcular o factorial');
var factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

document.querySelector('#mensagem').innerHTML = `O factorial de ${numero} é ${factorial}`;