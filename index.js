// Import stylesheets
import './style.css';

const w = 400;
const h = 400;

const canvas = document.createElement('canvas');

canvas.width = w;
canvas.height = h;

document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const data = ctx.createImageData(w, h);

const f = (x) => Math.max(0, Math.min(255.0, Math.floor(x * 255.0)));

for (let x = 0; x < w; x++) {
  for (let y = 0; y < h; y++) {
    const idx = 4 * (y * w + x);
    const r = 1;
    const g = 0;
    const b = 0;
    data.data[idx + 0] = f(r);
    data.data[idx + 1] = f(g);
    data.data[idx + 2] = f(b);
    data.data[idx + 3] = f(1);
  }
}

ctx.putImageData(data, 0, 0);
