import { BufferGeometry, Material, Mesh, NormalBufferAttributes } from "three";
import { ThreeEvent } from "./threeEvent.type";
import { interactiveObjs } from "../utils/interactiveObjs";


export interface InteractiveMesh extends Mesh {
    onPointerEnter?(e: ThreeEvent): void;
    onPointerLeave?(e: ThreeEvent): void;
    onClick?(e: ThreeEvent): void;
    render?(): void;
}

export class InteractiveMesh extends Mesh {
    constructor(geometry: BufferGeometry<NormalBufferAttributes>, material: Material) {
        super(geometry, material);
        interactiveObjs.add(this);
    }

    onPointerEnter?(e: ThreeEvent): void;
    onPointerLeave?(e: ThreeEvent): void;
    onClick?(e: ThreeEvent): void;
    render?(): void;
}