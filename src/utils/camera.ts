import { PerspectiveCamera } from "three";


export const camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, .1, 1000);

camera.position.z = 10;
camera.position.y = 20;
camera.position.x = 3;