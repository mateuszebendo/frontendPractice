document.getElementById("nomeBotao").onclick = () => {
    let nome = document.getElementById("nomeTexto").value;
    document.getElementById("nomeMostrar").textContent = `Seu nome é ${nome}`;
    if(Boolean(nome) === true){
        document.getElementById("nomeMostrar").textContent = `Seu nome é ${nome}`;
    } else {
        document.getElementById("nomeMostrar").textContent = `Nome inválido!`;
    }
}



document.getElementById("idadeBotao").onclick = () => {
    let idade = document.getElementById("idadeTexto").value; 
    if(Boolean(idade) === true){
        let idadeFutura = Number(idade) + 5;
        document.getElementById("idadeMostrar").textContent = `Sua idade em 5 anos será ${idadeFutura}`;
     } else {
        document.getElementById("idadeMostrar").textContent = `Idade inválida!`;
    }
}


