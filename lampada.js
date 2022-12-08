const turnOnOff = document.getElementById("turnOnOff");
const lamp = document.getElementById("lamp");

turnOnOff.addEventListener("click", lampOnOff);

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampQuebra)

//cria uma funcao que troca o nome do botao e liga e desliga a lampada
function lampOnOff (){
    if ( turnOnOff.textContent == "Ligar"){
        lampOn();
        turnOnOff.textContent = "Desligar";
    }else{
        lampOff();
        turnOnOff.textContent = "Ligar"
    }

}
//cria uma funcao que busca dentro de lamp uma string com nome "quebrada" neste caso a string quebrada é o nome de imagem,quando encontra tras um numero maior que -1 e quando nao encontra tras -1
function isLampBroken () {
    return lamp.src.indexOf ("quebrada") > -1;
}

// quando a lampada NAO estiver quebrada (!isLampBroken) ele executa a funcao
function lampOn (){
    if (!isLampBroken () ){
      lamp.src = "./img/ligada.jpg";  
    }
    
}
function lampOff (){
    if (!isLampBroken () ){
     lamp.src = "./img/desligada.jpg";   
    }
    
}
function lampQuebra (){
    lamp.src = "./img/quebrada.jpg";
}