'use client';

import { useEffect } from 'react';

export default function ScrollEffect() {
  useEffect(() => {
    const body = document.querySelector('.layout_body') as HTMLElement | null;
    if (!body) return;

    const wrap = document.querySelector('.layout_wrap') as HTMLElement | null;
    if (wrap) {
      wrap.style.backgroundColor = 'rgba(252, 252, 252, 0.72)';
    }

    let hue = Math.random() * 360;
    const hueSpread = 32;
    const saturation = 82;
    const lightness = 58;
    const alpha = 0.92;
    const idleSpeed = 5;
    const maxSpeed = 16;

    let speed = idleSpeed;
    let frameId = 0;
    let lastTime = performance.now();

    const paint = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      hue = (hue + speed * dt) % 360;
      speed += (idleSpeed - speed) * Math.min(dt * 2.4, 1);

      const color1 = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
      const color2 = `hsla(${(hue + hueSpread) % 360}, ${saturation}%, ${lightness}%, ${alpha})`;
      body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;

      frameId = requestAnimationFrame(paint);
    };

    const boost = () => {
      speed = Math.min(speed + 10, maxSpeed);
    };

    frameId = requestAnimationFrame(paint);
    window.addEventListener('scroll', boost, { passive: true });
    window.addEventListener('wheel', boost, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', boost);
      window.removeEventListener('wheel', boost);
      if (wrap) {
        wrap.style.backgroundColor = '';
      }
    };
  }, []);

  return null;
}
