import { camera } from "./camera";
import { scene } from "./scene";
import { renderer } from "./renderer";
import { regRaycaster } from "./raycaster";
import { regClickRaycaster } from "./raycaster";
import { textureLoader } from "./textureLoader";
import { composer, blurPass } from "./postprocessing";
import { controls } from "./controls";
import { interactiveObjs } from "./interactiveObjs";
import { enableResize } from "./reset";
import { hovered, nullHover } from "./vars";

const raycaster = regRaycaster();
const clickRaycaster = regClickRaycaster();

export {
    camera,
    scene,
    renderer,
    raycaster,
    clickRaycaster,
    textureLoader,
    composer,
    controls,
    blurPass,
    interactiveObjs,
    enableResize,
    hovered,
    nullHover
};