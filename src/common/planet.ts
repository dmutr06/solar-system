import { Group, Material, SphereGeometry } from "three";
import { InteractiveMesh } from "./interactiveMesh";
import { ThreeEvent } from "./threeEvent.type";
import anime from "animejs";
import { PlanetInfo } from "./planetInfo.type";
import { scene } from "../utils";
import { planetDescription, planetInfo, planetName } from "../utils/domElements";
import { blurPass } from "../utils/postprocessing";

function close(e: Event) {
    if (e.target instanceof HTMLCanvasElement) {
        planetInfo.classList.remove("active");
        blurPass.enabled = false;
        document.body.removeEventListener("mousedown", close);
    }
}

export class Planet extends InteractiveMesh {
    public planetInfo: PlanetInfo;
    private pivot: Group;
    private rotateSpeed: number;
    private currentRotateSpeed: number;
    private selfRotateSpeed: number;

    constructor(size: number, radius: number, material: Material, rotateSpeed: number, planetInfo: PlanetInfo, selfRotateSpeed: number) {
        super(new SphereGeometry(size, 100, 50), material);
        this.planetInfo = planetInfo;
        this.rotateSpeed = rotateSpeed;
        this.selfRotateSpeed = selfRotateSpeed;
        this.currentRotateSpeed = rotateSpeed;
        this.translateX(radius);
        this.pivot = new Group();
        this.pivot.position.set(0, 0, 0);
        this.pivot.add(this);
        scene.add(this.pivot);
    }

    public onClick(e: ThreeEvent): void {
        this.onPointerLeave(e);

        planetName.innerHTML = this.planetInfo.name;
        planetDescription.innerHTML = this.planetInfo.description;
        planetInfo.classList.add("active");
        document.body.addEventListener("mousedown", close);
        this.currentRotateSpeed = this.rotateSpeed;
        blurPass.enabled = true;
    }

    public onPointerLeave(_: ThreeEvent): void {
        this.currentRotateSpeed = this.rotateSpeed;
        anime({
            targets: this.scale,
            x: 1,
            y: 1,
            z: 1,
        });
    }

    public onPointerEnter(_: ThreeEvent): void {
        this.currentRotateSpeed = 0;
        anime({
            targets: this.scale,
            x: 1.2,
            y: 1.2,
            z: 1.2,
        });
    }

    public render() {
        this.pivot.rotateY(this.currentRotateSpeed);
        this.rotateY(this.selfRotateSpeed);
    }
}