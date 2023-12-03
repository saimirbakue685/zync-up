/* 
   Filename: AdvancedCode.js
   Description: This code demonstrates an advanced image processing algorithm using JavaScript.
*/

// Class for Image Manipulation
class ImageManipulation {
  constructor(imageData) {
    this.imageData = imageData;
  }

  // Apply grayscale filter to the image
  applyGrayscaleFilter() {
    const data = this.imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // Red channel
      data[i + 1] = avg; // Green channel
      data[i + 2] = avg; // Blue channel
    }
  }

  // Apply sepia filter to the image
  applySepiaFilter() {
    const data = this.imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];

      const newRed = (red * 0.393) + (green * 0.769) + (blue * 0.189);
      const newGreen = (red * 0.349) + (green * 0.686) + (blue * 0.168);
      const newBlue = (red * 0.272) + (green * 0.534) + (blue * 0.131);

      data[i] = Math.min(255, newRed);
      data[i + 1] = Math.min(255, newGreen);
      data[i + 2] = Math.min(255, newBlue);
    }
  }

  // Apply edge detection filter to the image using Sobel operator
  applyEdgeDetectionFilter() {
    const data = this.imageData.data;
    const width = this.imageData.width;

    const kernelX = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
    const kernelY = [-1, -2, -1, 0, 0, 0, 1, 2, 1];

    const convolution = (x, y, kernel) => {
      let sum = 0;

      for (let row = -1; row <= 1; row++) {
        for (let col = -1; col <= 1; col++) {
          const imageX = (x + col + width) % width;
          const imageY = (y + row + width) % width;
          const pixel = (imageY * width + imageX) * 4;
          const value = kernel[(row + 1) * 3 + (col + 1)];
          sum += this.imageData.data[pixel] * value;
        }
      }

      return sum;
    };

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < width; y++) {
        const red = convolution(x, y, kernelX);
        const green = convolution(x, y, kernelY);
        const blue = Math.sqrt((red * red) + (green * green));

        const pixel = (y * width + x) * 4;

        data[pixel] = Math.min(255, blue);
        data[pixel + 1] = Math.min(255, blue);
        data[pixel + 2] = Math.min(255, blue);
      }
    }
  }
}

// Image Processing Example
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

const image = new Image();
image.src = 'example.jpg';

image.onload = function() {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const imgManipulation = new ImageManipulation(imageData);
  imgManipulation.applyGrayscaleFilter();
  imgManipulation.applySepiaFilter();
  imgManipulation.applyEdgeDetectionFilter();

  ctx.putImageData(imgManipulation.imageData, 0, 0);
}