import { MeshStandardMaterial } from "three";
import { Planet } from "../../common/planet";
import earthTexture from "../../assets/textures/earth.jpg";
import earthNormalTexture from "../../assets/textures/earth_normal.jpg";
import { textureLoader } from "../../utils";

export const Earth = () => new Planet(.7, 11, new MeshStandardMaterial({ map: textureLoader.load(earthTexture), normalMap: textureLoader.load(earthNormalTexture) }), .001, { name: "Earth", description: "Earth is the third planet from the Sun and the only place known in the universe where life has originated and found habitability. Earth is the only planet known to sustain liquid surface water, with ocean water extending over 70.8% of the planet, making it an ocean world. Most of all other water is retained in Earth's polar regions, with large sheets of ice covering ocean and land, dwarfing Earth's groundwater, lakes, rivers and atmospheric water. The other 29.2% of the Earth's surface is land, consisting of continents and islands, and is widely covered by vegetation. Below the planet's surface lies the crust, consisting of several slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Inside the Earth's crust is a liquid outer core that generates the magnetosphere, deflecting most of the destructive solar winds and cosmic radiation. Earth has a dynamic atmosphere, which sustains Earth's surface conditions and protects it from most meteoroids and UV-light at entry. It has a composition of primarily nitrogen and oxygen. Water vapor is widely present in the atmosphere, forming clouds that cover most of the planet. The water vapor acts as a greenhouse gas and, together with other greenhouse gases in the atmosphere, particularly carbon dioxide (CO2), creates the conditions for both liquid surface water and water vapor to persist via the capturing of energy from the Sun's light. This process maintains the current average surface temperature of 14.76 °C, at which water is liquid under atmospheric pressure. Differences in the amount of captured energy between geographic regions (as with the equatorial region receiving more sunlight than the polar regions) drive atmospheric and ocean currents, producing a global climate system with different climate regions, and a range of weather phenomena such as precipitation, allowing components such as nitrogen to cycle." });