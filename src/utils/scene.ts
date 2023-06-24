import { Scene } from "three";
import background from "../assets/textures/background.jpg";
import { textureLoader } from "./textureLoader";

export const scene = new Scene();

scene.background = textureLoader.load(background);