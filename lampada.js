const turnOnOff = document.getElementById("turnOnOff");
const lamp = document.getElementById("lamp");

turnOnOff.addEventListener("click", lampOnOff);

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampQuebra)


function lampOnOff (){
    if ( turnOnOff.textContent == "Ligar"){
        lampOn();
        turnOnOff.textContent = "Desligar";
    }else{
        lampOff();
        turnOnOff.textContent = "Ligar"
    }

}

function isLampBroken () {
    return lamp.src.indexOf ("quebrada") > -1;
}


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