import { camera, renderer, scene } from ".";
import { BloomEffect, EffectComposer, EffectPass, RenderPass, FXAAEffect, BoxBlurPass } from "postprocessing";

export const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
export const blurPass = new BoxBlurPass({ kernelSize: 9 });
blurPass.enabled = false;
composer.addPass(blurPass);
composer.addPass(new EffectPass(camera, new BloomEffect({ intensity: 1, luminanceThreshold: .75 })));
composer.addPass(new EffectPass(camera, new FXAAEffect()));