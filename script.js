const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = C.width = window.innerWidth
  H = C.height = window.innerHeight;
console.log(Math.random());
console.log($.fillText);
console.log($.font)
const str = "А+Б0В-Г1Д=Е2Ё Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я",
  matrix = str.split("");
console.log(matrix[6]);
let font = 11,
  col = W / font,
  arr = [];
  for (let i = 0; i < col; i++) arr[i] = 1;
  console.log(arr);

function draw() {
  $.fillStyle = "rgba(0,0,0,.04)";
  $.fillRect(0, 0, W, H);
  $.fillStyle = "#0f0";
  $.font = font + "px system-ui";
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    $.fillText(txt, i * font, arr[i] * font)
    if ( arr[i] * font> H && Math.random() > 0.975) arr[i] = 0;
    arr[i]++;
    console.log(arr[i]*font);
  }
}

setInterval(draw, 100);

window.addEventListener("resize", () => location.reload(true));
