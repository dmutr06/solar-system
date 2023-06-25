import { EquirectangularReflectionMapping, Scene } from "three";
import background from "../assets/textures/background.jpg";
import { textureLoader } from "./textureLoader";

export const scene = new Scene();

const texture = textureLoader.load(background);

texture.mapping = EquirectangularReflectionMapping;

scene.background = texture;