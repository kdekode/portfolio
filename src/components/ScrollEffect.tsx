'use client';

import { useEffect } from 'react';

export default function ScrollEffect() {
  useEffect(() => {
    // Seleccionamos el body (asegúrate de que tenga la clase .layout-body)
    const body = document.querySelector('.layout_body');
    if (!body) return;

    // Función para generar un color hexadecimal aleatorio
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    // Función que cambia el fondo con un gradiente aleatorio
    const changeGradient = () => {
      const color1 = getRandomColor();
      const color2 = getRandomColor();
      
      // Aplicamos una transición suave y el nuevo gradiente
      (body as HTMLElement).style.transition = 'background 0.5s ease';
      (body as HTMLElement).style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    };

    // 3. El setInterval que cambia los colores constantemente
    const intervalId = setInterval(() => {
      // Generamos NUEVOS colores en cada ciclo dentro del intervalo
      const color1 = getRandomColor();
      const color2 = getRandomColor();

      (body as HTMLElement).style.transition = 'background 0.5s ease';
      (body as HTMLElement).style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    }, 1000); // Cambia cada 1 segundo

    // 1. Evento scroll (cuando la página se mueve de verdad)
    window.addEventListener('scroll', changeGradient);

    // 2. Evento wheel (detecta el giro de la rueda aunque no haya scroll en la página)
    window.addEventListener('wheel', changeGradient);

    // Limpieza de eventos al desmontar el componente
    return () => {
      window.removeEventListener('scroll', changeGradient);
      window.removeEventListener('wheel', changeGradient);
      clearInterval(intervalId);
    };
  }, []);

  return null; 
}