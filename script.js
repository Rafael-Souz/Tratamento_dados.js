//--- JavaScript ----------

var nome = window.prompt('Qual e o seu nome?');
window.alert('E um prazer em te conhecer ' + nome + '!');


/*---------- CONVERTER DE STRING/NÚMERO usar - parseInt  (se for de NÚMERO/STRING usar ToString ---------*/

var n1 = Number.parseInt(window.prompt('Digite um número!'))
var n2 = Number.parseInt(window.prompt('Digite um número!'))
var soma = n1 + n2;
window.alert('A soma é ' + soma);

//--- JavaScript ----------
var nome = window.prompt(' Digite seu nome?');
var idade = window.prompt(' Digite a sua idade?');
var cidade =  window.prompt(' Digite o nome da sua cidade?');

window.alert('Eu sou ' + nome + ' tenho '   + idade + ' anos de idade  é moro ' + cidade);

/* -- Usando length / toUpperCase() para maiúsculo /  toLowerCase() para minúsculo  */

var nome = window.prompt('Digite seu nome?');
document.write('Óla, ${nome}! Seu nome tem ${nome.length} letras.<br>')
document.write('Seu nome em maiúsculo é ${nome.toUpperCase()}<br>')
document.write('Seu nome em minúsculo é ${nome.toLowerCase()}')