import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { camera, renderer } from ".";

export const controls = new OrbitControls(camera, renderer.domElement);

// controls.enablePan = false;
// controls.enableZoom = false;
controls.enableDamping = true;
controls.minPolarAngle = .8;
controls.maxPolarAngle = 2.4;
// controls.dampingFactor = .07;
controls.rotateSpeed = .6;