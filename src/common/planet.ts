import { Group, Material, SphereGeometry } from "three";
import { InteractiveMesh } from "./interactiveMesh.interface";
import { ThreeEvent } from "./threeEvent.type";
import anime from "animejs";
import { PlanetInfo } from "./planetInfo.type";
import { scene } from "../utils";


export class Planet extends InteractiveMesh {
    public planetInfo: PlanetInfo;
    private pivot: Group;
    private rotateSpeed: number;
    private currentRotateSpeed: number;

    constructor(size: number, radius: number, material: Material, rotateSpeed: number, planetInfo: PlanetInfo) {
        super(new SphereGeometry(size), material);
        this.planetInfo = planetInfo;
        this.rotateSpeed = rotateSpeed;
        this.currentRotateSpeed = rotateSpeed;
        this.translateX(radius);
        this.pivot = new Group();
        this.pivot.position.set(0, 0, 0);
        this.pivot.add(this);
        scene.add(this.pivot);
    }

    public onClick(_: ThreeEvent): void {
        alert(`${this.planetInfo.name}\n\n${this.planetInfo.description}`);
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
    }
}