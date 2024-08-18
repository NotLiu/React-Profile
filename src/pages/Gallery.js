import React, { Component } from "react";
import resume from "../downloads/Resume.pdf";
import GalleryImg from "../components/GalleryImg.js";
import boo from "../img/halloween.gif";
import styled from "styled-components";
import WebGLCanvas from "../components/ShaderCanvas.js";

import { BrowserRouter as Router, Redirect, Route, Switch, Link } from "react-router-dom";
const GalleryBorder = styled.div`
  position: absolute;
  top: 10%;
  left: 8%;
  width: 84%;
  height: 20em;
`;

const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${boo});
  height: 50%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-width: 2px;
  border-color: floralwhite;
  border-style: solid;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${boo});
    font-size: large;
    color: black;
  }
`;

const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const CanvasWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 15rem;
  width: 100%;
  margin: 2rem;
`;

const CanvasItem = styled.div`
  width: 25rem;
  height: 37.5rem;
`;
export default function Gallery() {
  const retest_frag = `
      precision highp float;
      varying highp vec2 uv;
      uniform float uTime;

      vec3 palette( in float t)
      {
        vec3 a = vec3(1.0, 0.5, 0.5);
        vec3 b = vec3(0.5, 0.5, 0.5);
        vec3 c = vec3(0.75, 1.0, 0.667);
        vec3 d = vec3(-0.8, 1.0, 0.333);
        
        return a + b*cos( 6.28318*(c*t+d) );
      }

      mat4 rotateZ(float angle) {
        mat4 rotationMatrix;
        rotationMatrix[0] = vec4(cos(angle), sin(angle), 0, 0);
        rotationMatrix[1] = vec4(-sin(angle), cos(angle), 0, 0);
        rotationMatrix[2] = vec4(0, 0, 1, 0);
        rotationMatrix[3] = vec4(0, 0, 0, 1);
        return rotationMatrix;
      }

      void main(void) {
        // Called for every pixel the material is visible on.
        float time_scale = 0.3;
        vec2 uvc = uv * 2.0 - 1.0;
        
        uvc.y *= 1.5;
        
        float uv0 = length(uvc); //distance to center of screen
        
        vec3 finalColor = vec3(0.0);
        
        for(float i = 0.0; i < 4.0; i++){
          uvc = (uvc - 0.5) / exp(uv0 / 3.0);
          
          float d = (length(uvc)-0.5) * exp(-length(uv0));

          float shift = -1.0;
          vec3 col = palette(d + uTime * time_scale);
          
          d = sin(d * 8.0 + cos(uTime * time_scale) / 2.0 + shift)/8.0; 
          d = abs(d);
          d = pow(0.01/d, 1.5);
          
          finalColor += d;
        }
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

  const circle_frag = `
    precision highp float;
    varying highp vec2 uv;
    uniform float uTime;

    vec3 palette( in float t)
    {
      vec3 a = vec3(1.0, 0.5, 0.5);
      vec3 b = vec3(0.5, 0.5, 0.5);
      vec3 c = vec3(0.75, 1.0, 0.667);
      vec3 d = vec3(-0.8, 1.0, 0.333);
      
        return a + b*cos( 6.28318*(c*t+d) );
    }

    float sdStar5(in vec2 p, in float r, in float rf)
    {
        const vec2 k1 = vec2(0.809016994375, -0.587785252292);
        const vec2 k2 = vec2(-k1.x,k1.y);
        p.x = abs(p.x);
        p -= 2.0*max(dot(k1,p),0.0)*k1;
        p -= 2.0*max(dot(k2,p),0.0)*k2;
        p.x = abs(p.x);
        p.y -= r;
        vec2 ba = rf*vec2(-k1.y,k1.x) - vec2(0,1);
        float h = clamp( dot(p,ba)/dot(ba,ba), 0.0, r );
        return length(p-ba*h) * sign(p.y*ba.x-p.x*ba.y);
    }

    float sdRoundedCross(vec2 p, float h) {
        float k = 0.5 * (h + 1.0 / h);
        p = abs(p);
        if (p.x < 1.0 && p.y < p.x * (k - h) + h) {
            return k - sqrt(dot(p - vec2(1.0, k), p - vec2(1.0, k)));
        } else {
            return sqrt(min(
                dot(p - vec2(0.0, h), p - vec2(0.0, h)),
                dot(p - vec2(1.0, 0.0), p - vec2(1.0, 0.0))
            ));
        }
    }


    void main(void)
    {
      float time_scale = 0.3;
      vec2 uvc = (uv*3.0/2.0) * 2.0 - vec2(3.0/2.0); // center UV originally (0.5, 0.5) and center UV (x2) so that (-1.0) will make the center UV be (0.0, 0.0)
      //vec2 uvc = uv * 2.0 - 1.0; // center UV originally (0.5, 0.5) and center UV (x2) so that (-1.0) will make the center UV be (0.0, 0.0)
      //uvc.x += 0.25; //shift to left
      
      uvc.y *= 1.5;
      
      float uv0 = length(uvc); //distance to center of screen
      
      // ROTATE FROM CENTER
      uvc = vec2(
        uvc.x * pow(abs(cos(uTime * time_scale)), 1.25 * exp(uv0)) - uvc.y * pow(abs(sin(uTime * time_scale)), 1.25 * exp(uv0)),
        uvc.x * pow(abs(sin(uTime * time_scale)), 1.25 * exp(uv0)) + uvc.y * pow(abs(cos(uTime * time_scale)), 1.25 * exp(uv0))
      ) * exp(uv0);
      
      
      vec3 finalColor = vec3(0.0);
      //vec3 colorMod = vec3(0.9, 0.4, 0.0);
      vec3 colorMod = vec3(1.0, 1.0, 1.0);
      
      for(float i = 0.0; i < 4.0; i++){
        uvc = (fract(uvc * 1.5) - 0.5) / exp(uv0 / 3.0);
        
        float d = (length(uv)-0.5) * exp(-length(uv0));

        float shift = -1.0;
        vec3 col = palette(d + uTime * time_scale);
        
        d = sin(d * 8.0 + cos(uTime * time_scale) / 2.0 + shift)/8.0; 
        d = abs(d);
        d = pow(0.01/d, 1.5);
        
        finalColor += fract(d) * colorMod + d * 0.25;
      }
      
      float circle = 5.0 * smoothstep(0.0, 2.0, sin(uv0*40.0 + sin(uTime*time_scale))/7.0) * exp(-uv0) * cos(uTime*time_scale * 2.0) * 10.0 * exp(-uv0 * 3.0);
      
      gl_FragColor = vec4(finalColor * exp2(-length(uv0)) * 0.75+ fract(pow(abs(circle), 1.5)) * colorMod + pow(abs(circle), 1.5)* colorMod, 1.0);
    }
      `;

  const lines_frag = `
      precision highp float;
      varying highp vec2 uv;
      uniform float uTime;

      vec3 palette( in float t)
      {
        vec3 a = vec3(1.0, 0.5, 0.5);
        vec3 b = vec3(0.5, 0.5, 0.5);
        vec3 c = vec3(0.75, 1.0, 0.667);
        vec3 d = vec3(-0.8, 1.0, 0.333);
        
          return a + b*cos( 6.28318*(c*t+d) );
      }

      vec3 hLine(vec2 uv, float slope, float yIntercept, float thickness){
        // HORIZONTAL LINE
        // Line equation components for a line from (-1, -1) to (1, 1)

          // Calculate the distance from the current fragment to the line y = x
          float distance = abs(uv.y - (slope * uv.x + yIntercept)) / sqrt(slope * slope + 1.0);
          
        vec3 line = vec3(0.0);
          // Determine if the current fragment is close enough to be part of the line
          if (distance < thickness){
          line += vec3(1.0, 1.0, 1.0); // White line
        }
          else{
          line += vec3(0.0, 0.0, 0.0); // Black background
        }
        
        return line;
      }

      vec3 vLine(vec2 uv, float xPos, float thickness){
        vec3 line = vec3(0.0);
        
        if(abs(xPos-uv.x) <= thickness){
          line += vec3(1.0, 1.0, 1.0);
        }
        
        return line;
      }

      float easeInOutCubic(float x) {
          return x < 0.5 ? 4.0 * x * x * x : 1.0 - pow(-2.0 * x + 2.0, 3.0) / 2.0;
      }

      void main(void) {

        float time_scale = 0.05;
        vec2 uvc = (uv*3.0/2.0) * 2.0 - vec2(3.0/2.0); // center UV originally (0.5, 0.5) and center UV (x2) so that (-1.0) will make the center UV be (0.0, 0.0)
        uvc.y *= 3.0/2.0;
        
        //uvc = fract(uvc * 1.5) - 0.5;
        
        float uv0 = length(uvc); //distance to center of screen
        const float numLines = 10.0;
        const float numCircles = 10.0;
        
        vec3 final_color = vec3(0.0, 0.0, 0.0);
        float thickness = 0.025 * abs(sin(uTime * time_scale))* exp(-uv0 * 2.0 * abs(sin(uTime * time_scale)));
        
        for(float i = 1.0; i < numLines; i++){
          float spread_slope = (numLines * (i - numLines))/(numLines * i);
          
          final_color += hLine(uvc, spread_slope, 0.0 , thickness)/(uv0 * 1.5);
          final_color += hLine(uvc,  -spread_slope, 0.0 , thickness)/(uv0 * 1.5);
          
        }
        
        //final_color *= vec3(0.0, 0.0, 1.0);
        final_color += hLine(uvc, 0.0, 0.0, thickness)/(uv0 * 1.5);
        final_color += hLine(uvc, -1.0, 0.0, thickness)/(uv0 * 1.5);
        
        final_color += vLine(uvc, 0.0, thickness)/(uv0 * 1.5);
        //final_color = vec3(1.0, 0.0, 0.0);
        
        uvc = vec2(
          uvc.x * pow(easeInOutCubic(abs(cos(uTime * time_scale))), 1.5 * exp(uv0)) - uvc.y * pow(easeInOutCubic(abs(sin(uTime * time_scale))), 1.5 * exp(uv0)),
          uvc.x * pow(easeInOutCubic(abs(sin(uTime * time_scale))), 1.5 * exp(uv0)) + uvc.y * pow(easeInOutCubic(abs(cos(uTime * time_scale))), 1.5 * exp(uv0))
        ) * exp(uv0);
        
        float angle = degrees(atan(uvc.y, uvc.x));
        for(float i = 2.0; i < numCircles; i++){
          //float circle_radius = 0.25 * i + abs(sin(angle/9.0 ))/20.0;
          //float circle_radius = 0.25 * i + abs(tan(angle/5.0 + uTime * time_scale))/20.0;
          float circle_radius = 0.25 * i + abs(cos(angle/5.0 + uTime * time_scale ))/20.0;
          
          if(uv0 <= circle_radius && uv0 > circle_radius - thickness * 9.0){
            final_color = vec3(1.0/(uv0 * 1.5));
            
          }
        }
        
        //vec3 the_color = vec3(252.0/255.0, 247.0/255.0, 255.0/255.0);
        //vec3 the_color = vec3(0.0/255.0, 247.0/255.0, 255.0/255.0);
        //COLOR = vec4(vec3(abs(angle/360.0),0.0,0.0), 1.0);
        gl_FragColor = vec4(final_color, 1.0);
      }
    `;

  return (
    <GalleryBorder>
      <Link to="/inktober">
        <HeroImage>
          <HeroText>INKTOBER 21</HeroText>
        </HeroImage>
      </Link>
      {/* <CanvasWrapper>
        <CanvasItem>
          <WebGLCanvas fragmentShader={retest_frag} />
        </CanvasItem>
        <CanvasItem>
          <WebGLCanvas fragmentShader={circle_frag} />
        </CanvasItem>
        <CanvasItem>
          <WebGLCanvas fragmentShader={lines_frag} />
        </CanvasItem>
        <CanvasItem>
          <WebGLCanvas fragmentShader={retest_frag} />
        </CanvasItem> 
      </CanvasWrapper> */}
    </GalleryBorder>
  );
}
