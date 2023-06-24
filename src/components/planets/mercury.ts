import { MeshStandardMaterial } from "three";
import { Planet } from "../../common/planet";
import mercuryTexture from "../../assets/textures/mercury.jpg";
import { textureLoader } from "../../utils";


export const Mercury = () => new Planet(.4, 7, new MeshStandardMaterial({ map: textureLoader.load(mercuryTexture) }), 0.00124, { name: "Mercury", description: "Mercury is the first planet from the Sun and the smallest planet in the Solar System. It is a terrestrial planet with a heavily cratered surface due to the planet having no geological activity and an extremely tenuous atmosphere (called an exosphere). Despite being the smallest planet in the Solar System with a mean diameter of 4,880 km (3,030 mi), 38% of that of Earth's, Mercury is dense enough to have roughly the same surface gravity as Mars. Mercury has a dynamic magnetic field with a strength about 1% of that of Earth's and has no natural satellites." });