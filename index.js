const canvas = document.querySelector("canvas");
const H = canvas.height = window.innerHeight;
const W = canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");

const arrLetters = '#%!^&* QaWs EdRfTg YhUj IkOl P;{] ZzXx CcVv BbNn Mm<, .<.>/?@ $~`'
const arrL = arrLetters.split('')

const font = 11
let col = W/font
let matrix = []
for(let i = 0; i<col; i++) matrix[i]=1

console.log(arrL[Math.floor(Math.random() * arrL.length)]);

function run () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, W, H)
    ctx.fillStyle = '#0f0'
    ctx.font = font + "px serif";
    for(let i = 0; i < matrix.length; i++){
        let j = arrL[Math.floor(Math.random() * arrL.length)]; 
        ctx.fillText(j, i * font, matrix[i] * font);
        if(matrix[i]*font > H && Math.random() > 0.978){ 
            matrix[i] = 0
        }
        matrix[i]++
    }
}
setInterval(run,123)

window.addEventListener("resize", function () {
  "use strict";
  window.location.reload();
});



