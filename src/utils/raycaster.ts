import { Raycaster, Vector2 } from "three";
import { camera } from "./camera";



export function regRaycaster(): Raycaster {
    const raycaster = new Raycaster();
    const pointer = new Vector2();

    window.addEventListener("mousemove", e => {
        pointer.x = e.clientX / window.innerWidth * 2 - 1;
        pointer.y = - e.clientY / window.innerHeight * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
    });

    return raycaster;
}

export function regClickRaycaster(): { raycaster: Raycaster, active: { state: boolean } } {
    const active = { state: false };
    const clickRaycaster = new Raycaster();
    const pointer = new Vector2();

    window.addEventListener("click", e => {
        active.state = true;
        pointer.x = e.clientX / window.innerWidth * 2 - 1;
        pointer.y = - e.clientY / window.innerHeight * 2 + 1;
        clickRaycaster.setFromCamera(pointer, camera);
    });

    return { active, raycaster: clickRaycaster };
}
