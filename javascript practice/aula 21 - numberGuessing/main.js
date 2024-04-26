const min = 1
const max = 10;
let resposta = 0;
let escolha = -1;

const numero = document.getElementById("nmr");
const numeroEscolhido = document.getElementById("numeroEscolhido").value;
const botao = document.getElementById("botao");
const textoFinal = document.getElementById("textoFinal");

escolha = Number(numeroEscolhido);

botao.onclick = () => {

    resposta = Math.floor((Math.random() * (max - min + 1)));
    numero.textContent = `${resposta}`;
    
    if(isNaN(numeroEscolhido)){
        window.alert(`Digite um número válido! ${numeroEscolhido}`);
        numero.textContent = `?`;

    } else if(escolha == resposta){

        textoFinal.setAttribute('style', 'color: green;');
        textoFinal.textContent = `Número correto!`;
        resposta = Math.round((Math.random * max) - min);

    } else {

        textoFinal.setAttribute('style', 'color: red;');
        textoFinal.textContent = `Número errado!`;
        resposta = Math.round((Math.random * max) - min);

    }
}

