import React, { useRef } from 'react';

function Base64ToImage({ base64String }) {
    const canvasRef = useRef(null);

    const handleImageLoad = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      const convertedImage = canvas.toDataURL();
      console.log(convertedImage); // This is the converted image as a Base64 string
      URL.revokeObjectURL(url); // Revoke the URL object
    };
  
    const blob = new Blob([atob(base64String)], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
  
    const image = new Image();
    image.src = url;
    image.addEventListener('load', handleImageLoad);

    console.log(base64String)
  
    return <canvas ref={canvasRef} />;
  
}

export default Base64ToImage;
