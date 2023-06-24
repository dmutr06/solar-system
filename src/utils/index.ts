import { camera } from "./camera";
import { scene } from "./scene";
import { renderer } from "./renderer";
import { regRaycaster } from "./raycaster";
import { regClickRaycaster } from "./raycaster";
import { textureLoader } from "./textureLoader";

const raycaster = regRaycaster();
const clickRaycaster = regClickRaycaster();

export {
    camera,
    scene,
    renderer,
    raycaster,
    clickRaycaster,
    textureLoader,
};