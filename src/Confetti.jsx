import { Button } from '@mui/material';
import { Box } from '@mui/material'
import React, { useEffect, useRef } from 'react';

const Confetti = () => {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const numberOfImages = 3;
  let speed = 0.5; // Adjust speed here

  const speedUp = () => {
    speed = speed * 2;
  }

  const speedDown = () => {
    speed = speed/2;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let x = 0;
    const y = 0;

    function loadImage(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    }

    async function initialize() {
      // Load the image
      const img = await loadImage('/img/shucreams.png');
      imgRef.current = img;

      // Start animation loop
      update();
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each image
      for (let i = 0; i < numberOfImages; i++) {
        // If the image is below the canvas, reset its position to the top
        if (x > canvas.width-32 || x < 0) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          speed = -speed;
        }

        // Update image position
        x += speed;

        // Draw the image
        ctx.drawImage(imgRef.current, x, y);
      }

      requestAnimationFrame(update);
    }

    initialize();
  }, []);

  return(
  <div>
  <canvas ref={canvasRef} width={400} height={100} />
  <Box component="section" justifyItems = 'center' sx={{ p: 2}}>
      <Button variant="contained" onClick={speedUp} style={{ backgroundColor: 'gold', color: 'black' }}>creamify</Button>
      <Button variant="contained" onClick={speedDown} style={{ backgroundColor: 'peachpuff', color: 'black' }}>decreamify</Button>
  </Box>
  
  </div>);
};

export default Confetti;
