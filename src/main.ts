import "css-reset-and-normalize/scss/reset-and-normalize.scss";
import "./assets/styles/main.scss";
import { camera, scene, raycaster, clickRaycaster, textureLoader, controls, blurPass, composer, interactiveObjs, enableResize, nullHover, hovered } from "./utils";
import { Planet } from "./common/planet";
import { MeshBasicMaterial } from "three";
import { ambientLight, pointLight } from "./components/light";


import sunTexture from "./assets/textures/sun.jpg";
import { InteractiveMesh } from "./common/interactiveMesh";
import { Mercury } from "./components/planets/mercury";
import { Venus } from "./components/planets/venus";
import { Earth } from "./components/planets/earth";
import { Mars } from "./components/planets/mars";
import { Saturn } from "./components/planets/saturn";
import { Jupiter } from "./components/planets/jupiter";
import { Neptune } from "./components/planets/neptune";
import { Uranus } from "./components/planets/uranus";
import { planetInfo } from "./utils/domElements";




Mercury();
Venus();
const earth = Earth();
Mars();
Saturn();
Jupiter();
Uranus();
Neptune();

const isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);


enableResize();

const sun = new Planet(3.5, 0, new MeshBasicMaterial({ map: textureLoader.load(sunTexture), toneMapped: false, }), 0, { name: "Sun", description: "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The Sun radiates this energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth." }, .011);
sun.add(pointLight);

if (!isMobile) {
	window.addEventListener("mousedown", () => {
		if (hovered.state.length == 0) {
			nullHover.state = true;
		} else {
			nullHover.state = false;
		}
	});
	
}

scene.add(ambientLight);

export function main() {
	planetInfo.addEventListener("click", e => {
		if (e.target instanceof HTMLImageElement) {
			planetInfo.classList.remove("active");
			blurPass.enabled = false;
		}
	})
	render();
}

function render() {
	requestAnimationFrame(render);

	if (!isMobile) {
		const intersect = raycaster.intersectObjects<InteractiveMesh>(scene.children)[0];

		if (intersect && hovered.state.filter(planet => intersect.object.id == planet.id).length == 0) {
			if (!planetInfo.classList.contains("active")) {
				intersect.object.onPointerEnter?.({ camera, scene });
			}

			hovered.state.push(intersect.object);
		}

		hovered.state = hovered.state.map(planet => {
			if (planet.id != intersect?.object.id) {
				if (!planetInfo.classList.contains("active")) {
					planet.onPointerLeave?.({ camera, scene });
				}
				return null;
			} else {
				return planet;
			}

		}).filter(p => p != null) as any;
	}

	if (hovered.state.length > 0) {
		document.documentElement.style.cursor = "pointer";
	} else {
		document.documentElement.style.cursor = "default";
	}
		if (clickRaycaster.active.state) {

			const intersect = raycaster.intersectObjects<InteractiveMesh>(scene.children)[0];

			if (!nullHover.state) {
				intersect?.object.onClick?.({ scene, camera });
			}
		}

		clickRaycaster.active.state = false;

	interactiveObjs.forEach(obj => {
		obj.render?.();
	});

	controls.update();

	earth.rotateY(0.01);

	composer.render();
}