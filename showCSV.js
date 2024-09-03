//// Função Principal
const fs = require('fs');
const csv = fs.readFileSync('./sample.csv').toString();
const {
    quebraLinhas, separaColunas, separaConteudo, constroiListaDeObjetos
} = require('csv');

const linhas = quebraLinhas(csv);
const primeiraLinha = linhas.shift();
const headers = separaColunas(primeiraLinha);
const conteudo = separaConteudo(linhas);

console.log(headers);
console.log(conteudo);
const json = constroiListaDeObjetos(headers, conteudo);

console.table(json, ["Filme", "Ano", "Gênero"]);

/////////////////////////////
