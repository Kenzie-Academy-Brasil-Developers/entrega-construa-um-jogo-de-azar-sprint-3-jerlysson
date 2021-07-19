const nick = prompt("Ola, Visitante, Insira um NickName");

const playSelect = document.getElementById('playSelect');
const pcSelect = document.getElementById('pcSelect');
const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const btnJogar = document.getElementById('botao');
const resultFinal = document.getElementById('resultado');

// ====================================================

let resultadoPlay =0;
let resultadoPc = 0;
const pcPlay = () =>{
    resultadoPc = Math.floor(Math.random() * (3-1+1) +1);
    if(resultadoPc === 1){
        pcSelect.innerText="Pedra!!"
    }
    if(resultadoPc === 2){
        pcSelect.innerText="Papel!!"
    }
    if(resultadoPc === 3){
        pcSelect.innerHTML = "Tesoura!!"
    }
    return resultadoPc;
}
const resultadoFinal = () =>{
    pcPlay();

    if(resultadoPc == resultadoPlay){
        resultFinal.style.background= "yellow";
        resultFinal.innerHTML = `${nick} você Empatou com a maquina!`
    }

    if(resultadoPc == 1 && resultadoPlay == 2){
        resultFinal.style.background="green";
        resultFinal.innerHTML= `${nick} você ganhou`;
    }

    if(resultadoPc == 1 && resultadoPlay == 3){
        resultFinal.style.background="red";
        resultFinal.innerHTML= `${nick} você Perdeu!`;
    }

    if(resultadoPc == 2 && resultadoPlay == 1){
        resultFinal.style.background= "red";
        resultFinal.innerHTML= `${nick} você Perdeu!`;
    }

    if(resultadoPc == 2 && resultadoPlay == 3){
        resultFinal.style.background="green";
        resultFinal.innerHTML= `${nick} você Ganhou!`;
    }

    if(resultadoPc == 3 && resultadoPlay == 1){
        resultFinal.style.background= "green";
        resultFinal.innerHTML= `${nick} você Ganhou!`;
    }

    if(resultadoPc == 3 && resultadoPlay == 2){
        resultFinal.style.background="red";
        resultFinal.innerHTML= `${nick} você Perdeu!`;
    }

}

// ========================================================
pedra.addEventListener('click',function(){
    resultadoPlay = 1;
    tesoura.style.border="";
    papel.style.border="";
    pedra.style.border="3px Solid Green";
    playSelect.innerText="Pedra!";
});
papel.addEventListener('click', function(){
    resultadoPlay = 2;
    tesoura.style.border="";
    pedra.style.border="";
    papel.style.border="3px Solid Green";
    playSelect.innerText="Papel!";
});
tesoura.addEventListener('click',function(){
    resultadoPlay = 3;
    pedra.style.border="";
    papel.style.border="";
    tesoura.style.border="3px Solid Green";
    playSelect.innerText="Tesoura!";
});
btnJogar.addEventListener('click',resultadoFinal)