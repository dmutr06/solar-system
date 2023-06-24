import { MeshStandardMaterial } from "three";
import { Planet } from "../../common/planet";
import jupiterTexture from "../../assets/textures/jupiter.jpg";
import { textureLoader } from "../../utils";

export const Jupiter = () => new Planet(2, 28, new MeshStandardMaterial({ map: textureLoader.load(jupiterTexture) }), 0.00024, { name: "Jupiter", description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after Jupiter, the chief deity of ancient Roman religion. Jupiter is primarily composed of hydrogen (90% by volume), followed by helium, which constitutes a quarter of its mass and a tenth of its volume. The ongoing contraction of Jupiter's interior generates more heat than the planet receives from the Sun. Because of its rapid rotation rate of 1 rotation per 10 hours, the planet's shape is an oblate spheroid: it has a slight but noticeable bulge around the equator. The outer atmosphere is divided into a series of latitudinal bands, with turbulence and storms along their interacting boundaries. The most obvious result of this is the Great Red Spot, a giant storm which has been observed since 1831 and possibly earlier. Jupiter is surrounded by a faint planetary ring system and has a powerful magnetosphere, the largest contiguous structure in the Solar System after the heliosphere. Jupiter forms a system of 95 known moons and probably many more, including the four large moons discovered by Galileo Galilei in 1610: Io, Europa, Ganymede, and Callisto. Ganymede, the largest of the four, is larger than the planet Mercury. Callisto is the second largest; Io and Europa are approximately the size of Earth's Moon. Since 1973, Jupiter has been visited by nine robotic probes: seven flybys and two dedicated orbiters, with two more either en route or awaiting launch." });