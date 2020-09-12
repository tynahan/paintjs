const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
  painting = false;
}

function startPaint() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPaint);
  canvas.addEventListener("mouseup", stopPainting);
}
