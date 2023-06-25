import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass.js";
import { camera, renderer, scene } from ".";
import { Vector2 } from "three";

export const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
export const bloomPass = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), .7, 0, .75);
export const aaPass = new SMAAPass(window.innerWidth, window.innerHeight);

composer.addPass(bloomPass);
composer.addPass(aaPass);