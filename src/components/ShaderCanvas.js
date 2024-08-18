// src/WebGLCanvas.js
import React, { useRef, useEffect } from "react";

const WebGLCanvas = ({ vertexShader = undefined, fragmentShader = undefined }) => {
  const canvasRef = useRef(null);

  let lastFrameTime = 0;
  const fps = 30; // Desired frames per second

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gl = canvas.getContext("webgl");

    // Check for WebGL support
    if (!gl) {
      alert("WebGL not supported, falling back on experimental-webgl");
      gl = canvas.getContext("experimental-webgl");
    }
    if (!gl) {
      alert("Your browser does not support WebGL");
    }

    // Vertex shader program
    console.log(vertexShader);
    const vsSource = vertexShader
      ? vertexShader
      : `
      attribute vec4 aVertexPosition;
      attribute vec2 aTextureCoord;
      varying highp vec2 uv;
      void main(void) {
        gl_Position = aVertexPosition;
        uv = aTextureCoord;
      }
    `;

    // Fragment shader program
    const fsSource = fragmentShader
      ? fragmentShader
      : `
      precision highp float;
      varying highp vec2 uv;
      uniform float uTime;

      void main(void) {
        gl_FragColor = vec4(sin(uTime), 0.0, 0.0, 1.0);  // White color
      }
    `;

    // Initialize a shader program
    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

    // Get uniform location
    const uTime = gl.getUniformLocation(shaderProgram, "uTime");

    // Collect all the info needed to use the shader program
    const programInfo = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
        textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
      },
    };

    // Build all the objects we'll be drawing
    const buffers = initBuffers(gl);

    let currentTime = performance.now() % 1000; // Time in seconds
    // Render loop
    function render() {
      // Throttle frame rate
      currentTime = performance.now(); // Convert to seconds
      const deltaTime = currentTime - lastFrameTime;
      //   console.log(deltaTime);
      //   if (deltaTime >= 1000 / fps) {
      requestAnimationFrame(render);
      gl.uniform1f(uTime, (currentTime * 0.001) % 1000);
      drawScene(gl, programInfo, buffers, uTime);
      lastFrameTime = currentTime;
      //   }
    }
    render();

    // Initialize the shader program
    function initShaderProgram(gl, vsSource, fsSource) {
      const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
      const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

      // Create the shader program
      const shaderProgram = gl.createProgram();
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);

      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("Unable to initialize the shader program: " + gl.getProgramInfoLog(shaderProgram));
        return null;
      }

      return shaderProgram;
    }

    // Creates a shader of the given type, uploads the source and compiles it.
    function loadShader(gl, type, source) {
      const shader = gl.createShader(type);

      // Send the source to the shader object
      gl.shaderSource(shader, source);

      // Compile the shader program
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

    // Initialize the buffers we'll need
    function initBuffers(gl) {
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

      const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

      // Create a buffer for the square's texture coordinates.
      const textureCoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

      // Define UV coordinates for the square
      const textureCoordinates = [1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0];

      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW);

      return {
        position: positionBuffer,
        textureCoord: textureCoordBuffer,
      };
    }

    // Draw the scene.
    function drawScene(gl, programInfo, buffers) {
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Tell WebGL how to pull out the positions from the position buffer into the vertexPosition attribute
      {
        const numComponents = 2;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
      }

      // Set the texture coordinates
      {
        const numComponents = 2;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
        gl.vertexAttribPointer(programInfo.attribLocations.textureCoord, numComponents, type, normalize, stride, offset);
        gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
      }

      //   gl.uniform1f(uTime, currentTime);
      // Tell WebGL to use our program when drawing
      gl.useProgram(programInfo.program);

      {
        const offset = 0;
        const vertexCount = 4;
        gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
      }
    }
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default WebGLCanvas;
