const min = 1; 
const max = 6;

const botao = document.getElementById("meuBotao");
const label = document.getElementById("meuLabel");
const dado = document.getElementById("minhaImagem");

botao.onclick = () => {
    let randomNum = Math.floor(Math.random() * max) + min;
    setarDado(randomNum);
}

function setarDado (resultado){
    if(resultado == 1) dado.setAttribute('src', 'imagens/dice-1.png');
    if(resultado == 2) dado.setAttribute('src', 'imagens/dice-2.png');
    if(resultado == 3) dado.setAttribute('src', 'imagens/dice-3.png');
    if(resultado == 4) dado.setAttribute('src', 'imagens/dice-4.png');
    if(resultado == 5) dado.setAttribute('src', 'imagens/dice-5.png');
    if(resultado == 6) dado.setAttribute('src', 'imagens/dice-6.png');
}