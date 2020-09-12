const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const CANVAS_SIZE = 700;
canvas.width = canvas.height = CANVAS_SIZE;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPaint() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  ctx.strokeStyle = event.target.style.backgroundColor;
  ctx.fillStyle = event.target.style.backgroundColor;
}

function handleRangeChange(event) {
  ctx.lineWidth = event.target.value;
}

function handleModeClick() {
  if (filling) {
    filling = false;
    mode.innerText = "fill";
  } else {
    filling = true;
    mode.innerText = "paint";
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPaint);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);

  canvas.addEventListener("click", (event) => {
    if (filling) {
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
  });
}

Array.from(colors).forEach((color) => {
  color.addEventListener("click", handleColorClick);
});

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
