const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");


var data = new Date();
let hr = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();
console.log("Hora: "+hr+" Minuto: "+min+" Segundo: "+ seg);

let posicaoHr = hr*360/12+(min*360/60(/12));
let posicaoMin = (min*360/60)+(seg*(360/60)/60);
let posicaoSeg = seg*360/60;


PONTEIROHORA.style.transform = "rotate("+posicaoHr+"deg)";//foi aplicado transform ao estilo da constante com uma rotação que foi retirada da variavel posição hora no caso
PONTEIROMINUTO.style.transform="rotate("+posicaoMin+"deg)";
PONTEIROSEGUNDO.style.transform="rotate("+posicaoSeg+"deg)";