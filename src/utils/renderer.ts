import { ACESFilmicToneMapping, WebGLRenderer } from "three";


export const renderer = new WebGLRenderer({ canvas: document.querySelector("#space")!, antialias: true, });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.8;