import { Canvas } from "@react-three/fiber"
import { Lights } from "./Lights"
import { Earth } from "./Earth"

export function Scene() {
    return[
    <Canvas camera={{position: [0, 1, 5]}}>
        <color attach="background" args={["yellow"]}></color>
        <Lights/>
        <Earth/>
    </Canvas>
    ]
}