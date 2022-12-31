import React from 'react'

const input = () => {
  return (
    <div>
      <body>
    <h1>Image Annotation</h1>
    <div>
      <input type="file" id="input-image" accept="image/*" />
      <canvas id="canvas"></canvas>
    </div>
    <div>
       <button id="Annotate">Annotate</button> 
      <button id="save-button">Save</button>
      <button id="clear-button">Clear</button>
    </div>

    <script>
      const inputImage = document.getElementById("input-image");
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      // canvas.width = 400;
      // canvas.height = 400;
      let image;

      inputImage.addEventListener("change", (e) => {
        const file = e.target.files[0];
        image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = () => {
          /*
          let w = canvas.width;
          let nw = image.naturalWidth;
          let nh = image.naturalHeight;
          let aspect = nw / nh;
          let h = w / aspect;
          canvas.height = h;

          */
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0);
        };
      });
    </script>
    <script>
      // const Annotate = document.getElementById("Annotate");
      // Annotate.
      addEventListener("click", () => {
        let isDrawing = false;
        let points = [];

        // Handle mouse down events
        canvas.addEventListener("mousedown", (e) => {
          isDrawing = true;
          points.push([e.offsetX, e.offsetY]);
        });

        // Handle mouse move events
        canvas.addEventListener("mousemove", (e) => {
          if (isDrawing) {
            points.push([e.offsetX, e.offsetY]);
            drawPolygon(points);
          }
        });

        function drawPolygon(points) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, 0, 0);
          ctx.beginPath();
          ctx.moveTo(points[0][0], points[0][1]);
          for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i][0], points[i][1]);
          }
          ctx.closePath();
          ctx.stroke();
        }

        canvas.addEventListener("mouseup", (e) => {
          isDrawing = false;
          points.push([e.offsetX, e.offsetY]);
        });

        // Handle clear button click events
        document
          .getElementById("clear-button")
          .addEventListener("click", (e) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            points = [];
          });
      });
    </script>
  </body>
    </div>
  )
}

export default input
