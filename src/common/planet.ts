import { Group, Material, SphereGeometry } from "three";
import { InteractiveMesh } from "./interactiveMesh";
import { ThreeEvent } from "./threeEvent.type";
import anime from "animejs";
import { PlanetInfo } from "./planetInfo.type";
import { scene } from "../utils";
import { planetInfo } from "../utils/domElements";


export class Planet extends InteractiveMesh {
    public planetInfo: PlanetInfo;
    private pivot: Group;
    private rotateSpeed: number;
    private currentRotateSpeed: number;

    constructor(size: number, radius: number, material: Material, rotateSpeed: number, planetInfo: PlanetInfo) {
        super(new SphereGeometry(size, 100, 50), material);
        this.planetInfo = planetInfo;
        this.rotateSpeed = rotateSpeed;
        this.currentRotateSpeed = rotateSpeed;
        this.translateX(radius);
        this.pivot = new Group();
        this.pivot.position.set(0, 0, 0);
        this.pivot.add(this);
        scene.add(this.pivot);
    }

    public onClick(e: ThreeEvent): void {
        this.onPointerLeave(e);
        planetInfo.innerHTML = `
            <div class="name">${this.planetInfo.name}</div>
            <div class="description">${this.planetInfo.description}</div>
            <img src="/src/assets/icons/cross.svg" alt="cross" class="cross" />
        `
        planetInfo?.classList.add("active");
        this.currentRotateSpeed = this.rotateSpeed;
    }

    public onPointerLeave(_: ThreeEvent): void {
        this.currentRotateSpeed = this.rotateSpeed;
        anime({
            targets: this.scale,
            x: 1,
            y: 1,
            z: 1,
        });

        document.documentElement.style.cursor = "default";
    }

    public onPointerEnter(_: ThreeEvent): void {
        this.currentRotateSpeed = 0;
        anime({
            targets: this.scale,
            x: 1.2,
            y: 1.2,
            z: 1.2,
        });

        document.documentElement.style.cursor = "pointer";
    }

    public render() {
        this.pivot.rotateY(this.currentRotateSpeed);
    }
}