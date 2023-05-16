
document.addEventListener("DOMContentLoaded", Empezar);
//Creamos una función empezar
function Empezar(){
    document.getElementById("grid").style.visibility="hidden";
    document.getElementById("goBtn").addEventListener("click", continua);
}

function continua(){
    document.getElementById("grid").style.visibility = "visible";
    document.getElementById("goBtn").style.visibility = "hidden";
    //creo un elemento que al iniciar la partida sea opaco al 0.5
    document.getElementById("Hierro").style.opacity = "0.5";
    document.getElementById("Bronce").style.opacity = "0.5";
    document.getElementById("Plata").style.opacity = "0.5";
    document.getElementById("Oro").style.opacity = "0.5";
    document.getElementById("Platino").style.opacity = "0.5";
    document.getElementById("Diamante").style.opacity = "0.5";
    document.getElementById("Master").style.opacity = "0.5";
    document.getElementById("GrandMaster").style.opacity = "0.5";
    document.getElementById("Challenger").style.opacity = "0.5";
    //creo un elemento que al iniciar la partida sea opaco al 0.5
    

    const vectorcartas= [
    {
        name: "vegeta",
        img: "img/1.png"

    }
    ,
    {
        name: "vegeta",
        img: "img/1.png"

    }
    ,
    {
        name: "goku",
        img: "img/2.png"

    }
    ,
    {
        name: "goku",
        img: "img/2.png"

    }
    ,
    {
        name: "freezer",
        img: "img/3.png"

    }
    ,
    {
        name: "freezer",
        img: "img/3.png"

    }
    ,
    {
        name: "boo",
        img: "img/4.png"

    }
    ,
    {
        name: "boo",
        img: "img/4.png"

    }
    ,
    {
        name: "trunks",
        img: "img/5.png"

    }
    ,
    {
        name: "trunks",
        img: "img/5.png"

    }
    ,
    {
        name: "cell",
        img: "img/6.png"

    }
    ,
    {
        name: "cell",
        img: "img/6.png"

    }
    ,
    {
        name: "broly",
        img: "img/7.png"

    }
    ,
    {
        name: "broly",
        img: "img/7.png"

    }
    ,
    {
        name: "jiren",
        img: "img/8.png"

    }
    ,
    {
        name: "jiren",
        img: "img/8.png"

    }  

    ];

    vectorcartas.sort(() => 0.5 - Math.random());
    const gridD = document.getElementById("grid");
    gridD.innerHTML="";

    for(i = 0; i < vectorcartas.length; i++){
        const carta = document.createElement("img");
        carta.setAttribute("src", "img/cara.png");
        carta.setAttribute("data-id", i);
        carta.addEventListener("click", giracarta);
        gridD.appendChild(carta);
        
    }


const elnumparelles= document.getElementById("pOK");
const elnumerrades= document.getElementById("pKK");



let cartesTriades=[];
let idcartesTriades = [];
let numparejas = 0;
let numerrades = 0;

//Creamos las variables para los sonidos
//En este caso para el click, las mismas cartas y diferentes
let ClickCard = new Audio('sounds/giracarta.wav');
let samecards = new Audio('sounds/Correcto.wav');
let diffcard = new Audio('sounds/Error.wav');


function giracarta(){
    let idCarta = this.getAttribute("data-id");
    let nomCarta = vectorcartas[idCarta].name;
    //Añadimos el sonido de click
    ClickCard.play();
    //Añadimos el sonido de click
    cartesTriades.push(nomCarta);
    idcartesTriades.push(idCarta);

    this.setAttribute("src", vectorcartas[idCarta].img);
    if(cartesTriades.length==2){
        setTimeout(mirarcoincidencia,500);
    }

   
}

//Mirar si coninciden

function mirarcoincidencia(){
    const vectorImatges = document.querySelectorAll('img');
    const idPrimera = idcartesTriades[0];
    const idSegona = idcartesTriades[1];


if (idPrimera == idSegona) {
    vectorImatges[idPrimera].setAttribute('src','img/cara.png');
    numerrades++;

} else if (cartesTriades[0] === cartesTriades[1]) {
    vectorImatges[idPrimera].removeEventListener('click', giracarta);
    vectorImatges[idPrimera].style.visibility="hidden";
    vectorImatges[idSegona].removeEventListener('click', giracarta);
    vectorImatges[idSegona].style.visibility="hidden";
    numparejas++;
    //Añadimos el sonido de misma carta
    samecards.play();
    
} else {
    vectorImatges[idPrimera].setAttribute('src', 'img/cara.png');
    vectorImatges[idSegona].setAttribute('src', 'img/cara.png');
    numerrades++;
    //Añadimos el sonido de diferente carta
    diffcard.play();
    
}
    cartesTriades = [];
    idcartesTriades = [];
    elnumerrades.innerHTML = numerrades;
    elnumparelles.innerHTML = numparejas;

if (numparejas === vectorcartas.length / 2) {
    nom = document.getElementById("jugador").value;
    if (nom == "") {
    nom = "Jugador misterioso";   
}

//Añadimos funciones que al pasar o tener X fallos aumenta la opacidad del rango a 1
if (numerrades>=25){
    document.getElementById("Hierro").style.opacity="1";        
}
if (numerrades==21 ||numerrades==22 ||numerrades==23 ||numerrades==24){
    document.getElementById("Bronce").style.opacity="1";
}
if (numerrades==18 ||numerrades==19 ||numerrades==20){
    document.getElementById("Plata").style.opacity="1";
}
if (numerrades==15 ||numerrades==16||numerrades==17 ){
    document.getElementById("Oro").style.opacity="1";
}
if (numerrades==13 ||numerrades==14){
    document.getElementById("Platino").style.opacity="1";    
}
if (numerrades==10 ||numerrades==11 ||numerrades==12){
    document.getElementById("Diamante").style.opacity="1";
}
if (numerrades==8 ||numerrades==9){
    document.getElementById("Master").style.opacity="1";
}
if (numerrades==5 ||numerrades==6 ||numerrades==7){
    document.getElementById("GrandMaster").style.opacity="1";
}
if(numerrades==0 ||numerrades==1 ||numerrades==2 ||numerrades==3 ||numerrades==4){
    document.getElementById("Challenger").style.opacity="1";
}

}
}
}





