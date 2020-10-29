const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");


let posicaoHr = 24;
let posicaoMin = 130;
let posicaoSeg = 267;


PONTEIROHORA.style.transform = "rotate("+posicaoHr+"deg)";//foi aplicado transform ao estilo da constante com uma rotação que foi retirada da variavel posição hora no caso
PONTEIROMINUTO.style.transform="rotate("+posicaoMin+"deg)";
PONTEIROSEGUNDO.style.transform="rotate("+posicaoSeg+"deg)";