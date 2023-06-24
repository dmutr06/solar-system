import { PerspectiveCamera } from "three";


export const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);

camera.position.z = 5;