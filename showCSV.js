//// Função Principal
const fs = require('fs');
const csv = fs.readFileSync('./sample.csv').toString();

const linhas = quebraLinhas(csv);
const primeiraLinha = linhas.shift();
const headers = separaColunas(primeiraLinha);
const conteudo = separaConteudo(linhas);

console.log(headers);
console.log(conteudo);
const json = constroiListaDeObjetos(headers, conteudo);

console.table(json, ["Filme", "Ano", "Gênero"]);

/////////////////////////////

function quebraLinhas(csv) {
    let linhas = csv.trim().split('\n');
    return linhas;
}

function separaColunas(linha) {
    let colunas = linha.trim().split(';')
    return colunas;
}

function separaConteudo(lines) {
    const conteudo = [];

    for(let i=0; i<lines.length; i++) {
        let linha = lines[i];
        let colunas = separaColunas(linha);

        conteudo.push(colunas);
    }

    return conteudo;
}

function constroiObjeto(headers, linhaTabela) {
    let obj = {};

    for(let j=0; j<headers.length; j++){
        let titulo = headers[j];
        let coluna = linhaTabela[j];

        obj[titulo] = coluna;
    }

    return obj;
}

function constroiListaDeObjetos(headers, conteudo) {
    const listaDeObjetos = [];

    for(let i=0; i<conteudo.length; i++) {
        const linhaTabela = conteudo[i];
        const obj = constroiObjeto(headers,linhaTabela);

        listaDeObjetos.push(obj);
    }

    return listaDeObjetos;
}
