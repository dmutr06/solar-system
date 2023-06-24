import "css-reset-and-normalize/scss/reset-and-normalize.scss";
import "./assets/styles/main.scss";
import { camera, scene, renderer, raycaster, clickRaycaster, textureLoader } from "./utils";
import { Planet } from "./common/planet";
import { MeshBasicMaterial } from "three";
import { ambientLight, pointLight } from "./components/light";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import sunTexture from "./assets/textures/sun.jpg";
import { InteractiveMesh } from "./common/interactiveMesh.interface";
import { enableResize } from "./utils/reset";
import { interactiveObjs } from "./utils/interactiveObjs";
import { Mercury } from "./components/planets/mercury";
import { Venus } from "./components/planets/venus";
import { Earth } from "./components/planets/earth";
import { Mars } from "./components/planets/mars";
import { Saturn } from "./components/planets/saturn";
import { Jupiter } from "./components/planets/jupiter";
import { Neptune } from "./components/planets/neptune";
import { Uranus } from "./components/planets/uranus";

let hovered: InteractiveMesh[] = [];
const controls = new OrbitControls(camera, renderer.domElement);


Mercury();
Venus();
Earth();
Mars();
Saturn();
Jupiter();
Uranus();
Neptune();

const isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);


enableResize();

const sun = new Planet(3.5, 0, new MeshBasicMaterial({ map: textureLoader.load(sunTexture) }), 0, { name: "Sun", description: "The star" });
sun.add(pointLight);



scene.add(ambientLight);

function main() {
	render();
}

function render() {
	requestAnimationFrame(render);

	if (!isMobile) {
		const intersect = raycaster.intersectObjects<InteractiveMesh>(scene.children)[0];

		if (intersect && hovered.filter(planet => intersect.object.id == planet.id).length == 0) {
			intersect.object.onPointerEnter?.({ camera, scene });
			hovered.push(intersect.object);
		}

		hovered = hovered.map(planet => {
			if (planet.id != intersect?.object.id) {
				planet.onPointerLeave?.({ camera, scene });
				return null;
			} else {
				return planet;
			}

		}).filter(p => p != null) as any;
	}

	if (clickRaycaster.active.state) {

		const intersect = raycaster.intersectObjects<InteractiveMesh>(scene.children)[0];

		intersect?.object.onClick?.({ scene, camera });
		clickRaycaster.active.state = false;
	}

	interactiveObjs.forEach(obj => {
		obj.render?.();
	});

	controls.update();

	renderer.render(scene, camera);
}

document.addEventListener("DOMContentLoaded", main);