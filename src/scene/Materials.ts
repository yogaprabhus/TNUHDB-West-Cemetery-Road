import * as THREE from 'three';

export function createProceduralTileTexture(
  bgHex: string,
  groutHex: string,
  accentHex: string,
  gridCount: number
): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = bgHex;
  ctx.fillRect(0, 0, 256, 256);

  for (let i = 0; i < 1200; i++) {
    ctx.fillStyle = i % 2 === 0 ? accentHex : 'rgba(255,255,255,0.04)';
    ctx.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
  }

  ctx.strokeStyle = groutHex;
  ctx.lineWidth = 2;
  const step = 256 / gridCount;
  for (let i = 0; i <= gridCount; i++) {
    const p = Math.round(i * step);
    ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, 256); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(256, p); ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(3, 3);
  return tex;
}
