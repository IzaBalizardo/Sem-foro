const vermelho = document.querySelector('#vermelho');
const amarelo = document.querySelector('#amarelo');
const verde = document.querySelector('#verde');
const automatico = document.querySelector('#automatico');
const img = document.querySelector('#img');


function vermelhoOn (){
    img.src = "./assets/img/vermelho.png"

}

vermelho.addEventListener("click", vermelhoOn);


function amareloOn (){
    img.src = "./assets/img/amarelo.png"

}

amarelo.addEventListener("click", amareloOn);



function verdeOn (){
    img.src = "./assets/img/verde.png"

}

verde.addEventListener("click", verdeOn);




function automaticoOn (){
    img.src = "./assets/img/vermelho.png",
    img.src = "./assets/img/amarelo.png",
    img.src = "./assets/img/verde.png"

}

automatico.addEventListener("click", automaticoOn);