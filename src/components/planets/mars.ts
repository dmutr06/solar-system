import { MeshStandardMaterial } from "three";
import { Planet } from "../../common/planet";
import marsTexture from "../../assets/textures/mars.jpg";
import { textureLoader } from "../../utils";


export const Mars = () => new Planet(.5, 13, new MeshStandardMaterial({ map: textureLoader.load(marsTexture),  }), 0.0005, { name: "Mars", description: "Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil, giving it the nickname \"the Red Planet\". Mars has a second smallest radius among the planets in the Solar System at 3,389.5 km (2,106 mi) and has a surface gravity of 3.72 m/s2 (12.2 ft/s2), which is 38% of Earth's gravity. The Martian dichotomy can be clearly seen on the surface: on average, the terrain on Mars northern hemisphere is flatter and lower than Mars southern hemisphere. Mars has a very thin atmosphere made primarily of carbon dioxide and two irregularly shaped natural satellites: Phobos and Deimos." });